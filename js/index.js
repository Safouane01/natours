const wrapper = document.querySelector(".wrapper")
const signupLink = document.querySelector(".signup")

const signinLink = document.querySelector(".signin")




signupLink.addEventListener("click", ()=> {
  wrapper.classList.add("wrapper--click")
})

signinLink.addEventListener("click", ()=> {
  wrapper.classList.remove('wrapper--click')
})