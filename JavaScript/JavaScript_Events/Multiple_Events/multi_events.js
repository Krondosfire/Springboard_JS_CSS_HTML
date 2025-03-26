// window.addEventListener('load', function () {
//     console.log(`Content is Fully Loaded!`);
// });

// const removeButtons = document.querySelectorAll('li button');
// for (let btn of removeButtons) {
//     btn.addEventListener('click', function(ev) {
//         ev.target.parentElement.remove();
//     })
// };

// const form = document.querySelector('#add-product');
// const input = document.querySelector('#item-name');
// const shopList = document.querySelector('#shopping-list');
// form.addEventListener('submit', function(ev) {
//     ev.preventDefault();
//     console.log(input.value);
//     const newItem = document.createElement('li');
//     const delButton = document.createElement('button');
//     delButton.innerText = 'Remove';
//     // Add event listner to the new buttons:
//     delButton.addEventListener('click', function(ev) {
//         ev.target.parentElement.remove();
//     });
//     newItem.innerText = input.value;
//     newItem.appendChild(delButton);
//     input.value = '';
//     shopList.appendChild(newItem);
// });


// Event delegation example:
window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});



const form = document.querySelector('#add-product');
const input = document.querySelector('#item-name');
const shopList = document.querySelector('#shopping-list');

shopList.addEventListener('click', function(ev) {
    
        if(ev.target.tagName === 'BUTTON') {
            ev.target.parentElement.remove();
        }
        else if(ev.target.tagName === 'LI') {
            // ev.target.classList.toggle('done');
            ev.target.classList.toggle('specific');
            const star = document.createElement('span');
            star.innerHTML = '⭐';
            ev.target.prepend(star);
        }
    }
);




form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    console.log(input.value);
    const newItem = document.createElement('li');
    const delButton = document.createElement('button');
    delButton.innerText = 'Remove';
    
    newItem.innerText = input.value;
    newItem.appendChild(delButton);
    input.value = '';
    shopList.appendChild(newItem);
});

