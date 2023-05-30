const wrapper = document.querySelector(".wrapper")
const wrapper2 = document.querySelector('.wrapper--2')
const signupLink = document.querySelector(".signup")
const signinLink = document.querySelector(".signin")





signupLink.addEventListener("click", ()=> {
  wrapper.classList.add("wrapper--click")
  wrapper2.classList.add('wrapper--2-click')
  
})

signinLink.addEventListener("click", ()=> {
  wrapper.classList.remove('wrapper--click')
  wrapper2.classList.remove('wrapper--2-click')
})

