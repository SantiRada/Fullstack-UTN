const buttons = document.querySelectorAll('.button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeBodyColor(btn.getAttribute("data-color"));
    });
});

function changeBodyColor(value){
    document.body.style.backgroundColor = value;
}