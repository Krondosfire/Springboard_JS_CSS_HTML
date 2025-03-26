window.addEventListener('load', function () {
    console.log(`Content is Fully Loaded!`);
});

// document.addEventListener('keypress', function(ev) {
//     console.log(`KEY RELEASED! ${ev.key}`);
    
// });

 document.addEventListener('keydown', function(ev) {
     console.log(`KEY PUSHED! ${ev.key}`);
    
 });

document.querySelector('input').addEventListener('keypress', function(ev) {
    console.log("KEY PRESSED: ", ev.key);
});
