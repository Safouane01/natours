const nextBtn = document.querySelectorAll(".btn--next");
const prevBtn = document.querySelectorAll(".btn--prev");
const formPages = document.querySelectorAll(".booking-from__page");

const bullets = document.querySelectorAll(".bullet");
const bulletNum = document.querySelectorAll(".numb");
const bulletCheck = document.querySelectorAll(".check");

const varitieContainer = document.querySelector(".booking__varity-container");
const varities = document.querySelectorAll('.booking__varity')
const btnMore = document.querySelectorAll(".btn__secondary--more");

const navLink = document.querySelectorAll('.navigation__link')
const checkBox = document.querySelector(".navigation__toggle")


nextBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const active = btn.dataset.active;

    formPages.forEach((page) => {
      if (page.classList.contains("booking-form__page--active"))
        page.style.transform = "translateX(-35rem)";
      page.classList.remove("booking-form__page--active");
      if (page.classList.contains(`active--${active}`)) {
        page.classList.add("booking-form__page--active");
        page.style.transform = "translateX(0)";
      }
    });
    bullets.forEach((bullet) => {
      if (bullet.dataset.span == active) bullet.classList.add("active");
    });
    bulletNum.forEach((num) => {
      if (num.dataset.num == active - 1) num.style.display = "none";
    });
    bulletCheck.forEach((check) => {
      if (check.dataset.check == active) {
        check.style.visibility = "visible";
        check.style.opacity = "1";
      }
    });
  })
);

prevBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const prev = btn.dataset.prev;

    formPages.forEach((page) => {
      if (page.classList.contains("booking-form__page--active"))
        page.style.transform = "translateX(35rem)";
      page.classList.remove("booking-form__page--active");
      if (page.classList.contains(`active--${prev}`)) {
        page.classList.add("booking-form__page--active");
        page.style.transform = "translateX(0)";
      }
    });

    bullets.forEach((bullet) => {
      if (bullet.classList.contains("active") && bullet.dataset.prev == prev)
        bullet.classList.remove("active");
    });
    bulletCheck.forEach((check) => {
      if (check.dataset.prev == prev) {
        check.style.visibility = "hidden";
        check.style.opacity = "0";
      }
    });

    bulletNum.forEach((num) => {
      if (num.dataset.num == prev) num.style.display = "block";
    });
  })
);
let counter = 2;
btnMore.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (btn.dataset.type === "varitie") {
    
    varities.forEach(varitie => varitie.classList.remove("booking__varity--active"))
    let htmlEle = `<div class="booking__varity booking__varity--active">
    <div>
       <input type="text" id="variete${counter}" name="variete${counter}""  class="booking__form-input" placeholder="Variété${counter}"" >
       <label for="variete${counter}"" class="booking__form-label">Variété${counter}</label>
    </div>
    <div>
       <input type="number" id="num-var${counter}"" name="num-var1"  class="booking__form-input" placeholder="Nombre" >
       <label for="num-var${counter}"" class="booking__form-label">Nombre</label>
    </div>
    </div>`;
    varitieContainer.insertAdjacentHTML("beforeend", htmlEle)
    counter++
    
    }
  })
);


navLink.forEach(link => link.addEventListener('click', ()=> {
  checkBox.checked = false
  

}))