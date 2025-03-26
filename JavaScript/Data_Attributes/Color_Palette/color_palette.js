window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

const colorSection = document.querySelector('#colors');
colorSection.addEventListener('click', function (event) {
    document.body.style.backgroundColor = event.target.dataset.hex;
});
