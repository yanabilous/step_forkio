// let burgerBtn = document.querySelector('.burger-menu-btn');
// let burgerMenu = document.querySelector('.burger-menu')
// let spanBurger = document.querySelectorAll('.open-close-burger')
// let burger = document.querySelector('.burger')

let headerBurger = document.querySelector(".burger-menu-btn");
let headerMenu = document.querySelector(".burger-menu");
let headerItem = document.querySelectorAll(".header__item");

document.addEventListener("click", function (ev) {

    if (ev.target.classList.contains("burger-menu-btn") || ev.target.parentElement.classList.contains("burger-menu-btn")) {
      headerBurger.classList.toggle("active");
      headerMenu.classList.toggle("active");
      headerItem.forEach(element => {
        element.classList.toggle("active");
      });
    }

    else if (ev.target.classList.contains("header__item") || !ev.target.classList.contains("header__item")) {
      removeClass();
    }
  })

  window.addEventListener("resize", () => removeClass());
  window.addEventListener("scroll", () => removeClass());

  function removeClass() {
    headerBurger.classList.remove("active");
    headerMenu.classList.remove("active");
    headerItem.forEach(el => {
      el.classList.remove("active");
    })
  }
