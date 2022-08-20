const list = document.querySelectorAll(".second-navbar .nd-navbar .nd-menu-item");

const totems = document.querySelector(".second-navbar .nd-navbar .nd-menu-item.item-totems");
const totemsView = document.querySelector(".products .totems");

const racks = document.querySelector(".second-navbar .nd-navbar .nd-menu-item.item-racks");
const racksView = document.querySelector(".products .racks");

const expend = document.querySelector(".second-navbar .nd-navbar .nd-menu-item.item-expend");
const expendView = document.querySelector(".products .expend");

const gadgets = document.querySelector(".second-navbar .nd-navbar .nd-menu-item.item-gadgets");
const gadgetsView = document.querySelector(".products .gadgets");

const bandas = document.querySelector(".second-navbar .nd-navbar .nd-menu-item.item-bandas");
const bandasView = document.querySelector(".products .bandas");

const listBtns = document.querySelectorAll(".products .btns-group .model")

function activeLink() {
    list.forEach((item) => item.classList.remove("menu-link--active"));
    this.classList.add("menu-link--active");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

function click() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    totemsView.classList.remove("activeView");
    racksView.classList.remove("activeView");
    expendView.classList.remove("activeView");
    gadgetsView.classList.remove("activeView");
    bandas.classList.remove("activeView");
    listBtns.forEach((item) => item.classList.remove("active"));
}

list.forEach((item) => item.addEventListener("click", click));


function classAddClickTotems() {
    if (totems.classList.contains("active")) {
        totemsView.classList.add("activeView");
    } else {
        totemsView.classList.remove("activeView");
    }
}
function classAddClickRacks() {
    if (racks.classList.contains("active")) {
        racksView.classList.add("activeView");
    } else {
        racksView.classList.remove("activeView");
    }
}
function classAddClickExpend() {
    if (expend.classList.contains("active")) {
        expendView.classList.add("activeView");
    } else {
        expendView.classList.remove("activeView");
    }
}
function classAddClickGadgets() {
    if (gadgets.classList.contains("active")) {
        gadgetsView.classList.add("activeView");
    } else {
        gadgetsView.classList.remove("activeView");
    }
}
function classAddClickBandas() {
    if (bandas.classList.contains("active")) {
        bandasView.classList.add("activeView");
    } else {
        bandasView.classList.remove("activeView");
    }
}

totems.addEventListener("click", classAddClickTotems);
racks.addEventListener("click", classAddClickRacks);
expend.addEventListener("click", classAddClickExpend);
gadgets.addEventListener("click", classAddClickGadgets);
bandas.addEventListener("click", classAddClickBandas);

function clickBtnsGroup() {
    listBtns.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

listBtns.forEach((item) => item.addEventListener("click", clickBtnsGroup));