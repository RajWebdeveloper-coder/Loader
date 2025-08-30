
let button = document.getElementById('button');

button.addEventListener('click', function () {
    button.textContent = "Loading...";
    setTimeout(function () {
        button.textContent = "Show Loading for 1 sec";
    }, 1000)
});