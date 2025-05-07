const API_URL = "https://rithm-jeopardy.herokuapp.com/api/";
const NUMBER_OF_CATEGORIES = 6;
const NUMBER_OF_CLUES_PER_CATEGORY = 5;

let categories = [];
let activeClue = null;
let activeClueMode = 0;
let isPlayButtonClickable = true;

$("#play").on("click", handleClickOfPlay);

async function handleClickOfPlay() {
  if (!isPlayButtonClickable) return;
  isPlayButtonClickable = false;
  await setupTheGame();
}

async function setupTheGame() {
  // Show spinner
  $("#jeopardy").hide();
  $("#spinner").show();

  // Reset DOM
  $("#categories").empty();
  $("#clues").empty();
  $("#active-clue").html("");
  $("#play").text("Restart the Game!");
  categories = [];
  activeClue = null;
  activeClueMode = 0;

  // Fetch data
  const categoryIds = await getCategoryIds();
  categories = [];
  for (let id of categoryIds) {
    const cat = await getCategoryData(id);
    categories.push(cat);
  }

  // Fill table
  fillTable(categories);

  // Hide spinner, show game
  $("#spinner").hide();
  $("#jeopardy").show();
}

async function getCategoryIds() {
  // Fetch a large batch and pick random categories with enough clues
  const resp = await fetch(`${API_URL}categories?count=100`);
  const data = await resp.json();
  const possible = data.filter(cat => cat.clues_count >= NUMBER_OF_CLUES_PER_CATEGORY);
  // Shuffle and pick
  for (let i = possible.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [possible[i], possible[j]] = [possible[j], possible[i]];
  }
  return possible.slice(0, NUMBER_OF_CATEGORIES).map(cat => cat.id);
}

async function getCategoryData(categoryId) {
  const resp = await fetch(`${API_URL}category?id=${categoryId}`);
  const data = await resp.json();
  // Filter clues with valid question/answer and assign values if missing
  let clues = data.clues
    .filter(clue => clue.question && clue.answer)
    .slice(0, NUMBER_OF_CLUES_PER_CATEGORY)
    .map((clue, idx) => ({
      id: clue.id,
      value: clue.value || ((idx + 1) * 200),
      question: clue.question,
      answer: clue.answer
    }));
  return {
    id: data.id,
    title: data.title,
    clues
  };
}

function fillTable(categories) {
  // Table head
  const $categories = $("#categories");
  $categories.empty();
  for (let cat of categories) {
    $categories.append($("<th>").text(cat.title));
  }

  // Table body
  const $clues = $("#clues");
  $clues.empty();
  for (let i = 0; i < NUMBER_OF_CLUES_PER_CATEGORY; i++) {
    const $tr = $("<tr>");
    for (let j = 0; j < categories.length; j++) {
      const clue = categories[j].clues[i];
      const $td = $("<td>")
        .addClass("clue")
        .attr("id", `cat${categories[j].id}-clue${clue.id}`)
        .text(`$${clue.value}`);
      $tr.append($td);
    }
    $clues.append($tr);
  }
}

$("#clues").on("click", ".clue", handleClickOfClue);

function handleClickOfClue(event) {
  if (activeClueMode !== 0) return; // Only allow one active clue at a time

  const id = $(event.target).attr("id"); // e.g., cat1234-clue5678
  let found = false;
  for (let i = 0; i < categories.length && !found; i++) {
    let cat = categories[i];
    for (let j = 0; j < cat.clues.length; j++) {
      let clue = cat.clues[j];
      if (`cat${cat.id}-clue${clue.id}` === id) {
        activeClue = clue;
        activeClueMode = 1;
        $("#active-clue").html(clue.question);
        $(event.target).addClass("viewed");
        // Remove clue from category
        cat.clues.splice(j, 1);
        // Remove category if empty
        if (cat.clues.length === 0) {
          categories.splice(i, 1);
        }
        found = true;
        break;
      }
    }
  }
}

$("#active-clue").on("click", handleClickOfActiveClue);

function handleClickOfActiveClue(event) {
  if (activeClueMode === 1) {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  } else if (activeClueMode === 2) {
    activeClueMode = 0;
    $("#active-clue").html("");
    activeClue = null;
    if (categories.length === 0) {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}
