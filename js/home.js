let counterEspCon = 1

const nextBtn = document.querySelectorAll(".btn--next");
const prevBtn = document.querySelectorAll(".btn--prev");
const formPages = document.querySelectorAll(".booking-from__page");

const bullets = document.querySelectorAll(".bullet");
const bulletNum = document.querySelectorAll(".numb");
const bulletCheck = document.querySelectorAll(".check");

const varitieContainer = document.querySelector(`.booking__varity-container`);
const varities = document.querySelectorAll(".booking__varity");
const btnMore = document.querySelectorAll(".btn__secondary--more");

const btnMoreEsp = document.querySelectorAll(
  ".btn__secondary--more[data-type='espece']"
);


// let especeContainer = document.querySelector(`.booking__espece-container-${counterEspCon}`);

const navLink = document.querySelectorAll(".navigation__link");
const checkBox = document.querySelector(".navigation__toggle");

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





// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
  //     checkBox.checked = false;
//   })
// );






let counterEsp = 2;
let especeContainer

btnMoreEsp.forEach((btnEsp) =>
  btnEsp.addEventListener("click", (e) => {
    especeContainer = btnEsp.closest(".booking__espece-container-1").querySelector(".booking__form-group");
    counter1 = 2

    console.log(counterEspCon)
    console.log(especeContainer)
    let html = `<div class="booking__form-group">
  <input type="text" id="espece${counterEsp}" name="espece${counterEsp}"  class="booking__form-input" placeholder="Espèce${counterEsp}" >
  <label for="espece${counterEsp}" class="booking__form-label">Espèce${counterEsp}</label>
  <div class="booking__varity-container">
    <div class="booking__varity booking__varity--active">
    <div>
    <input type="text" id="variete1" name="variete1"  class="booking__form-input" placeholder="Variété" >
         <label for="variete1" class="booking__form-label">Variété</label>
       </div>
       <div>
       <input type="number" id="num-var1" name="num-var1"  class="booking__form-input" placeholder="Nombre" >
         <label for="num-var1" class="booking__form-label">Nombre</label>
      </div>
    </div>
    <a href="#" data-type="varitie" class="btn__secondary--more "><span class="tooltip">Ajouter une autre variété</span>&#43;</a>
    </div>
</div>`;
especeContainer.insertAdjacentHTML("afterend", html)
counterEspCon++

const varitieBtns = document.querySelectorAll('a[data-type="varitie"]');
    varitieBtns.forEach((btn) => {
      btn.addEventListener("click", (e)=> {
        e.preventDefault()
  let varCon = btn.closest(".booking__varity-container").querySelector(".booking__varity");

  let htmlEle = `<div class="booking__varity booking__varity--active">
    <div>
       <input type="text" id="variete${counter1}" name="variete${counter1}""  class="booking__form-input" placeholder="Variété${counter1}"" >
       <label for="variete${counter1}"" class="booking__form-label">Variété${counter1}</label>
    </div>
    <div>
       <input type="number" id="num-var${counter1}"" name="num-var1"  class="booking__form-input" placeholder="Nombre" >
       <label for="num-var${counter1}"" class="booking__form-label">Nombre</label>
    </div>
    </div>`;
      varCon.insertAdjacentHTML("afterend", htmlEle);
      counter1++
  
      });
    });
    counterEsp++
  })
  
);
// const handleVaritieButtonClick = (e) => {
//   e.preventDefault()
//   let varCon = btn.closest(".booking__varity-container").querySelector(".booking__varity");

//   let htmlEle = `<div class="booking__varity booking__varity--active">
//     <div>
//        <input type="text" id="variete${counter1}" name="variete${counter1}""  class="booking__form-input" placeholder="Variété${counter1}"" >
//        <label for="variete${counter1}"" class="booking__form-label">Variété${counter1}</label>
//     </div>
//     <div>
//        <input type="number" id="num-var${counter1}"" name="num-var1"  class="booking__form-input" placeholder="Nombre" >
//        <label for="num-var${counter1}"" class="booking__form-label">Nombre</label>
//     </div>
//     </div>`;
//       especeContainer.insertAdjacentHTML("afterend", htmlEle);
//       counter1++
  
// }

let counter = 2;


btnMore.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();

   

    if (btn.dataset.type === "variti") {
      varities.forEach((varitie) =>
        varitie.classList.remove("booking__varity--active")
      );
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
      varitieContainer.insertAdjacentHTML("beforeend", htmlEle);
      
      counter++;
    }
  })
);

let counter1 = 2




