let mode = document.querySelector(".mode-area");
let modeIco = document.querySelector(".mode-area i");

mode.addEventListener("click", function () {
    // START ADD AND REMOVE DARK MODE BTN ANIMATION
    mode.classList.add("anime");
    mode.addEventListener("animationend", function () {
        mode.classList.remove("anime");
    });

    // CHECK STATUS BTN FOR LIGHT OR DARK THEME
    if (modeIco.className.includes("fa-sun")) {
        modeIco.classList = "fa fa-moon";
        modeIco.style.color = "#fff";
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        modeIco.classList = "fa fa-sun";
        document.body.classList.remove("dark-mode");
        modeIco.style.color = "#444";
        localStorage.setItem("theme", "light");
    }
});

// GET AND CHECK STATUS FOR SAVE IN LOCALSTORAGE FOR SAVE MODE
window.onload = function () {
    let getDarkModeStatus = localStorage.getItem("theme");
    if (getDarkModeStatus == "dark") {
        modeIco.classList = "fa fa-moon";
        modeIco.style.color = "#fff";
        document.body.classList.add("dark-mode");
    }
};
