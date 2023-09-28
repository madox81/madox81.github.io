function start (){
  // Homepage functions

  // Type Writer effect 
  function typeWriterEffect(){

    const typeWriter = document.querySelector(".typeWriter")
    const text = ["Mohamad.", "a Web Developer."]
    let index=0
    let char = 0

    function write(){
      if(char < text[index].length){
        typeWriter.textContent += text[index].charAt(char)
        char++
        setTimeout(write,200)
      }else {
        setTimeout(erase, 2000)
      }
    }


    function erase(){
      if(char > 0){
        typeWriter.textContent = text[index].substring(0, char-1)
        char--
        setTimeout(erase,100)
      }else{
        if(index === text.length-1) {
          index=0
        }else{
          index++
        }
        setTimeout(write, 2000)
      }
    }

    write()

  }


  // About page functions

  // Read more
  function readMore(){
    const more = document.getElementById("more")
    const hidden= document.getElementsByClassName("hidden-p")
    more.addEventListener('click', (e) => {
      hidden[0].classList.toggle('show')
      if(hidden[0].className === "hidden-p show"){
        more.textContent = "Less <<"
      }else{
        more.textContent = "More >>"
      }
      more.blur()
    }) 
  }

  // Slide
  function slide(){
    const nextBtn = document.getElementById("nextBtn")
    const prevBtn = document.getElementById("prevBtn")
    const slideItems = document.querySelectorAll(".slide-item")
    let currentIndex = 0

    function show(index){
      slideItems.forEach(item => {
        item.style.display = "none"
      })
      slideItems[index].style.display = "block"
    }

    function autoShow(){
      next()
      setTimeout(autoShow, 3000)
    }

    function next(){
      currentIndex = (currentIndex + 1) % slideItems.length
      show(currentIndex)
    }

    function previous(){
      currentIndex = (currentIndex -1 + slideItems.length) % slideItems.length
      show(currentIndex)
    }

    autoShow()

    nextBtn.addEventListener("click", () => next())
    prevBtn.addEventListener("click", () => previous())


  }
  
  // General Functions

  // Navbar effect
  function offSet(){
    const nav = document.querySelector('nav')
    const navOffset = nav.offsetTop
    window.addEventListener('scroll', () => {
      const navOffset = nav.offsetTop
      if(window.pageYOffset > navOffset){
        nav.classList.add('hide')
      }else{
        nav.classList.remove('hide')
      }
    })
  }

  // Scroll Up
  function scrollUp(){
    const scroll = document.querySelector(".scroll-up")
    scroll.addEventListener("click", () => {
      window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
      })
    })
  }

  // Contact form v alidation
  function validation(){
    const form = document.getElementById("contact")
    const name = document.getElementById("name")
    const email= document.getElementById("email")
    const message = document.getElementById("message")
    form.addEventListener("submit", (e) => {
        
      e.preventDefault()

      if(name.value === ""){
        alert("Enter all fields please!")
        return
      }

      if(email.value === ""){
        alert("Enter all fields please!")
        return
      }

      if(message.value === ""){
        alert("Enter all fields please!")
        return
      }

      form.submit()
    })
  }



  // Initilise website functions
  (function init (){

    switch (window.location.pathname) {
      case "/":
        particlesJS.load('particles-js', './js/particles.json', function () {})
        setTimeout(typeWriterEffect, 1250)
        break;
      case "/about.html":
        offSet()
        readMore()
        scrollUp()
        slide()
        break;
      case "/contact.html":
        validation()
        break;
      case "/projects.html":
        offSet()
        break;
      default:
        // statements_def
        break;
    }
  })()

}

// Run 
document.addEventListener("DOMContentLoaded", () => {
  start()
})