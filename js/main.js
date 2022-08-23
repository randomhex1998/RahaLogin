let mode = document.querySelector(".mode-area");
let modeIco = document.querySelector(".mode-area i");

mode.addEventListener("click", function () {
    if (modeIco.className.includes("fa-sun")) {
        modeIco.classList.remove("fa-sun");
        modeIco.classList.toggle("fa-moon");
        modeIco.style.color = "#fff";
        document.body.classList.toggle("whitetexts");
        localStorage.setItem("theme", "dark");
    } else {
        modeIco.classList.add("fa-sun");
        modeIco.classList.remove("fa-moon");
        document.body.classList.remove("whitetexts");
        modeIco.style.color = "#444";
        localStorage.setItem("theme", "light");
    }
});

window.onload = function () {
    let bb = localStorage.getItem("theme");
    if (bb == "dark") {
        modeIco.classList.remove("fa-sun");
        modeIco.classList.toggle("fa-moon");
        modeIco.style.color = "#fff";
        document.body.classList.toggle("whitetexts");
    }
};
