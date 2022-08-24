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

/* BOTONES CONOCE MAS DE CADA MENU LINK /////////////////////////////////////////////////////////////////////////////////////////// */
const listBtns = document.querySelectorAll(".products .btns-group .model");

const itemOneTotems = document.querySelector(".products .totems .btns-group .modelOne");
const itemOneTotemsView = document.querySelector(".products .totems .container.One");

const itemTwoTotems = document.querySelector(".products .totems .btns-group .modelTwo");
const itemTwoTotemsView = document.querySelector(".products .totems .container.Two");

const itemThreeTotems = document.querySelector(".products .totems .btns-group .modelThree");
const itemThreeTotemsView = document.querySelector(".products .totems .container.Three");

const itemOneRacks = document.querySelector(".products .racks .btns-group .modelOne");
const itemOneRacksView = document.querySelector(".products .racks .container.One");

const itemTwoRacks = document.querySelector(".products .racks .btns-group .modelTwo");
const itemTwoRacksView = document.querySelector(".products .racks .container.Two");

const itemThreeRacks = document.querySelector(".products .racks .btns-group .modelThree");
const itemThreeRacksView = document.querySelector(".products .racks .container.Three");

const itemOneExpend = document.querySelector(".products .expend .btns-group .modelOne");
const itemOneExpendView = document.querySelector(".products .expend .container.One");

const itemTwoExpend = document.querySelector(".products .expend .btns-group .modelTwo");
const itemTwoExpendView = document.querySelector(".products .expend .container.Two");

const itemThreeExpend = document.querySelector(".products .expend .btns-group .modelThree");
const itemThreeExpendView = document.querySelector(".products .expend .container.Three");

const itemOneGadgets = document.querySelector(".products .gadgets .btns-group .modelOne");
const itemOneGadgetsView = document.querySelector(".products .gadgets .container.One");

const itemTwoGadgets = document.querySelector(".products .gadgets .btns-group .modelTwo");
const itemTwoGadgetsView = document.querySelector(".products .gadgets .container.Two");

const itemThreeGadgets = document.querySelector(".products .gadgets .btns-group .modelThree");
const itemThreeGadgetsView = document.querySelector(".products .gadgets .container.Three");

const itemOneBandas = document.querySelector(".products .bandas .btns-group .modelOne");
const itemOneBandasView = document.querySelector(".products .bandas .container.One");

const itemTwoBandas = document.querySelector(".products .bandas .btns-group .modelTwo");
const itemTwoBandasView = document.querySelector(".products .bandas .container.Two");

const itemThreeBandas = document.querySelector(".products .bandas .btns-group .modelThree");
const itemThreeBandasView = document.querySelector(".products .bandas .container.Three");

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
    bandasView.classList.remove("activeView");
    listBtns.forEach((item) => item.classList.remove("active"));
    itemOneTotemsView.classList.remove("container-activeView");
    itemTwoTotemsView.classList.remove("container-activeView");
    itemThreeTotemsView.classList.remove("container-activeView");
    itemOneRacksView.classList.remove("container-activeView");
    itemTwoRacksView.classList.remove("container-activeView");
    itemThreeRacksView.classList.remove("container-activeView");
    itemOneExpendView.classList.remove("container-activeView");
    itemTwoExpendView.classList.remove("container-activeView");
    itemThreeExpendView.classList.remove("container-activeView");
    itemOneGadgetsView.classList.remove("container-activeView");
    itemTwoGadgetsView.classList.remove("container-activeView");
    itemThreeGadgetsView.classList.remove("container-activeView");
    itemOneBandasView.classList.remove("container-activeView");
    itemTwoBandasView.classList.remove("container-activeView");
    itemThreeBandasView.classList.remove("container-activeView");
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

/* BOTONES CONOCE MAS DE CADA MENU LINK /////////////////////////////////////////////////////////////////////////////////////////// */
function clickBtnsGroup() {
    listBtns.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    itemOneTotemsView.classList.remove("container-activeView");
    itemTwoTotemsView.classList.remove("container-activeView");
    itemThreeTotemsView.classList.remove("container-activeView");
    itemOneRacksView.classList.remove("container-activeView");
    itemTwoRacksView.classList.remove("container-activeView");
    itemThreeRacksView.classList.remove("container-activeView");
    itemOneExpendView.classList.remove("container-activeView");
    itemTwoExpendView.classList.remove("container-activeView");
    itemThreeExpendView.classList.remove("container-activeView");
    itemOneGadgetsView.classList.remove("container-activeView");
    itemTwoGadgetsView.classList.remove("container-activeView");
    itemThreeGadgetsView.classList.remove("container-activeView");
    itemOneBandasView.classList.remove("container-activeView");
    itemTwoBandasView.classList.remove("container-activeView");
    itemThreeBandasView.classList.remove("container-activeView");
}

listBtns.forEach((item) => item.addEventListener("click", clickBtnsGroup));

function classAddItemOneTotems() {
    if (itemOneTotems.classList.contains("active")) {
        itemOneTotemsView.classList.add("container-activeView");
    } else {
        itemOneTotemsView.classList.remove("container-activeView");
    }
}

function classAddItemTwoTotems() {
    if (itemTwoTotems.classList.contains("active")) {
        itemTwoTotemsView.classList.add("container-activeView");
    } else {
        itemTwoTotemsView.classList.remove("container-activeView");
    }
}

function classAddItemThreeTotems() {
    if (itemThreeTotems.classList.contains("active")) {
        itemThreeTotemsView.classList.add("container-activeView");
    } else {
        itemThreeTotemsView.classList.remove("container-activeView");
    }
}

itemOneTotems.addEventListener("click", classAddItemOneTotems);
itemTwoTotems.addEventListener("click", classAddItemTwoTotems);
itemThreeTotems.addEventListener("click", classAddItemThreeTotems);

function classAddItemOneRacks() {
    if (itemOneRacks.classList.contains("active")) {
        itemOneRacksView.classList.add("container-activeView");
    } else {
        itemOneRacksView.classList.remove("container-activeView");
    }
}

function classAddItemTwoRacks() {
    if (itemTwoRacks.classList.contains("active")) {
        itemTwoRacksView.classList.add("container-activeView");
    } else {
        itemTwoRacksView.classList.remove("container-activeView");
    }
}

function classAddItemThreeRacks() {
    if (itemThreeRacks.classList.contains("active")) {
        itemThreeRacksView.classList.add("container-activeView");
    } else {
        itemThreeRacksView.classList.remove("container-activeView");
    }
}

itemOneRacks.addEventListener("click", classAddItemOneRacks);
itemTwoRacks.addEventListener("click", classAddItemTwoRacks);
itemThreeRacks.addEventListener("click", classAddItemThreeRacks);

function classAddItemOneExpend() {
    if (itemOneExpend.classList.contains("active")) {
        itemOneExpendView.classList.add("container-activeView");
    } else {
        itemOneExpendView.classList.remove("container-activeView");
    }
}

function classAddItemTwoExpend() {
    if (itemTwoExpend.classList.contains("active")) {
        itemTwoExpendView.classList.add("container-activeView");
    } else {
        itemTwoExpendView.classList.remove("container-activeView");
    }
}

function classAddItemThreeExpend() {
    if (itemThreeExpend.classList.contains("active")) {
        itemThreeExpendView.classList.add("container-activeView");
    } else {
        itemThreeExpendView.classList.remove("container-activeView");
    }
}

itemOneExpend.addEventListener("click", classAddItemOneExpend);
itemTwoExpend.addEventListener("click", classAddItemTwoExpend);
itemThreeExpend.addEventListener("click", classAddItemThreeExpend);

function classAddItemOneExpend() {
    if (itemOneExpend.classList.contains("active")) {
        itemOneExpendView.classList.add("container-activeView");
    } else {
        itemOneExpendView.classList.remove("container-activeView");
    }
}

function classAddItemTwoExpend() {
    if (itemTwoExpend.classList.contains("active")) {
        itemTwoExpendView.classList.add("container-activeView");
    } else {
        itemTwoExpendView.classList.remove("container-activeView");
    }
}

function classAddItemThreeExpend() {
    if (itemThreeExpend.classList.contains("active")) {
        itemThreeExpendView.classList.add("container-activeView");
    } else {
        itemThreeExpendView.classList.remove("container-activeView");
    }
}

itemOneExpend.addEventListener("click", classAddItemOneExpend);
itemTwoExpend.addEventListener("click", classAddItemTwoExpend);
itemThreeExpend.addEventListener("click", classAddItemThreeExpend);

function classAddItemOneGadgets() {
    if (itemOneGadgets.classList.contains("active")) {
        itemOneGadgetsView.classList.add("container-activeView");
    } else {
        itemOneGadgetsView.classList.remove("container-activeView");
    }
}

function classAddItemTwoGadgets() {
    if (itemTwoGadgets.classList.contains("active")) {
        itemTwoGadgetsView.classList.add("container-activeView");
    } else {
        itemTwoGadgetsView.classList.remove("container-activeView");
    }
}

function classAddItemThreeGadgets() {
    if (itemThreeGadgets.classList.contains("active")) {
        itemThreeGadgetsView.classList.add("container-activeView");
    } else {
        itemThreeGadgetsView.classList.remove("container-activeView");
    }
}

itemOneGadgets.addEventListener("click", classAddItemOneGadgets);
itemTwoGadgets.addEventListener("click", classAddItemTwoGadgets);
itemThreeGadgets.addEventListener("click", classAddItemThreeGadgets);

function classAddItemOneBandas() {
    if (itemOneBandas.classList.contains("active")) {
        itemOneBandasView.classList.add("container-activeView");
    } else {
        itemOneBandasView.classList.remove("container-activeView");
    }
}

function classAddItemTwoBandas() {
    if (itemTwoBandas.classList.contains("active")) {
        itemTwoBandasView.classList.add("container-activeView");
    } else {
        itemTwoBandasView.classList.remove("container-activeView");
    }
}

function classAddItemThreeBandas() {
    if (itemThreeBandas.classList.contains("active")) {
        itemThreeBandasView.classList.add("container-activeView");
    } else {
        itemThreeBandasView.classList.remove("container-activeView");
    }
}

itemOneBandas.addEventListener("click", classAddItemOneBandas);
itemTwoBandas.addEventListener("click", classAddItemTwoBandas);
itemThreeBandas.addEventListener("click", classAddItemThreeBandas);