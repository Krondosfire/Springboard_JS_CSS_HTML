 window.addEventListener('load', function () {
     console.log(`Content is Fully Loaded!`);
 });

// const preferences = {
//    fontSize: '16px',
//    favColor: 'beige',
// }
// localStorage.setItem('preferences', JSON.stringify(preferences));

// console.log(`JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.`);

// const { favColor } = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;



const toggleSwitch = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    toggleSwitch.checked = true;
};

toggleSwitch.addEventListener('click', function (_event) {
    const { checked } = toggleSwitch;
    if(checked) {
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : '';
    
});



