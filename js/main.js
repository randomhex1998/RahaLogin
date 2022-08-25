let mode = document.querySelector(".mode-area");
let modeIco = document.querySelector(".mode-area i");
let preLoader = document.querySelector(".pre-loader");

mode.addEventListener("click", function () {
    mode.classList.add("anime");

    mode.addEventListener("animationend", function () {
        mode.classList.remove("anime");
    });

    if (modeIco.className.includes("fa-sun")) {
        modeIco.classList.remove("fa-sun");
        modeIco.classList.toggle("fa-moon");
        modeIco.style.color = "#fff";
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        modeIco.classList.add("fa-sun");
        modeIco.classList.remove("fa-moon");
        document.body.classList.remove("dark-mode");
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
        document.body.classList.add("dark-mode");
    }
    preLoader.style.display = "none";
};
