const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const toggleModal = function () {
    modal.classList.toggle("is-open");
};

/*
cartButton.addEventListener("click", function (event) {
    modal.classList.add("is-open");
});


close.addEventListener("click", function (event) {
    modal.classList.remove("is-open");
});*/

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);


new WOW().init();
