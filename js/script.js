const headerTitle = document.querySelector(".header__title"),
    categorItem = document.querySelector(".category__animate"),
    categoryAnimateTwo = document.querySelector(".category__animate_2"),
    categoryAnimateThree = document.querySelector(".category__animate_3"),
    categoryAnimateFor = document.querySelector(".category__animate_4"),
    categoryTitle = document.querySelector(".category__title");

window.addEventListener("scroll", function scroll() {
    if (window.scrollY > categorItem.offsetTop - categorItem.clientHeight * 2) {
        categorItem.classList.add("active");
        categoryAnimateTwo.classList.add("active");
        categoryAnimateThree.classList.add("active")
        categoryAnimateFor.classList.add("active")
        categoryTitle.classList.add("active")
    }
});

const productAnimate = document.querySelector(".product__animate_1"),
    productAnimateTwo = document.querySelector(".product__animate_2"),
    productAnimateThree = document.querySelector(".product__animate_3"),
    productAnimateFor = document.querySelector(".product__animate_4"),
    productTitle = document.querySelector(".product__title"),
    productSubtitle = document.querySelector(".product__subtitle");
// categoryTitle = document.querySelector(".category__title");

window.addEventListener("scroll", function () {
    if (window.scrollY > productAnimate.offsetTop - productAnimate.clientHeight * 2) {
        productAnimate.classList.add("active");
        productAnimateTwo.classList.add("active");
        productAnimateThree.classList.add("active");
        productAnimateFor.classList.add("active");
        productTitle.classList.add("active");
        productSubtitle.classList.add("active");
    }
});

const specialAnimation = document.querySelector(".special__animation_1"),
    specialAnimationTwo = document.querySelector(".special__animation_2"),
    specialAnimationThree = document.querySelector(".special__animation_3"),
    specialAnimationFor = document.querySelector(".special__animation_4"),
    specialTitle = document.querySelector(".special__title"),
    specialSubtitle = document.querySelector(".special__subtitle");
// categoryTitle = document.querySelector(".category__title");

window.addEventListener("scroll", function () {
    if (window.scrollY > specialAnimation.offsetTop - specialAnimation.clientHeight * 2) {
        specialAnimation.classList.add("active");
        specialAnimationTwo.classList.add("active");
        specialAnimationThree.classList.add("active");
        specialAnimationFor.classList.add("active");
        specialTitle.classList.add("active");
        specialSubtitle.classList.add("active");
    }
});

const doctorAnimate = document.querySelector(".doctor__animate_1");
doctorAnimateTwo = document.querySelector(".doctor__animate_2"),
    doctorAnimateThere = document.querySelector(".doctor__animate_3"),
    doctorAnimateFor = document.querySelector(".doctor__animate_4"),
    doctorTitle = document.querySelector(".doctor__title"),
    doctorSubtitle = document.querySelector(".doctor__subtitle");

window.addEventListener("scroll", function () {
    if (window.scrollY > doctorAnimate.offsetTop - doctorAnimate.clientHeight * 2) {
        doctorAnimate.classList.add("active");
        doctorAnimateTwo.classList.add("active");
        doctorAnimateThere.classList.add("active");
        doctorAnimateFor.classList.add("active");
        doctorTitle.classList.add("active");
        doctorSubtitle.classList.add("active");
    }
});

// const modal = document.querySelector(".modal"),
//     headerButton = document.querySelector(".header__button"),
//     modalClose = document.querySelector(".modal__close");

// headerButton.addEventListener("click", function () {
//     modal.classList.add("active");
// })

// modalClose.addEventListener("click", function () {
//     modal.classList.remove("active");
// })

const burgerMenu = document.querySelector(".burger__menu"),
    burList = document.querySelector(".bur__list");

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burList.classList.toggle("active");
})

function toggleStyle(el, styleName, value) {
    if (el.style[styleName] !== value) {  //better to check that it is not the value you have
      el.style[styleName] = value;
    } else {
      el.style[styleName] = '';
    }
  }

let btnRejim = document.querySelector(".btn-rejim");
let productink = document.querySelector(".product__link")
let header = document.querySelector(".header");
let productLink = document.querySelectorAll(".product__link");
let headerSubtitle = document.querySelector(".header__subtitle");
let navPhoneNumber = document.querySelector(".nav__phone");
let navLink = document.querySelectorAll(".nav__link");

for (let j = 0; j < productLink.length; j++) {
    const ct = productLink[j];
    btnRejim.addEventListener("click", function () {
        toggleStyle(ct, "background", "#272727")
    })  
}


for (let i = 0; i < navLink.length; i++) {
    const el = navLink[i];
    btnRejim.addEventListener("click", function () {
        toggleStyle(el, "color", "goldenrod")
    })  
}


// let productLink = document.querySelectorAll(".product__link")


// btnRejim.addEventListener("click", function(){
//     header.style = `background:green;`
//     productLink.style = `background:green;`
// })
btnRejim.addEventListener("click", function () {
    btnRejim.classList.toggle("yashil")
    header.classList.toggle("yashil")
    toggleStyle(headerTitle, "color", "goldenrod")
    toggleStyle(headerSubtitle, "color", "goldenrod")
    toggleStyle(headerButton, "background", "goldenrod")
    toggleStyle(navLink, "color", "goldenrod")
})

