(function start (){
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
    }) 
  }

  // Slide
  function slide(){
    const nextBtn = document.getElementById("nextBtn")
    const prevBtn = document.getElementById("prevBtn")
    const slideItems = document.querySelectorAll(".slide-item")
    let currentIndex = 0

    // Show item
    function show(index){
      // Hide any showed slide item
      slideItems.forEach(item => {
        item.style.display = "none"
      })
      // Show slide item according to index using display ptoperty
      slideItems[index].style.display = "block"
    }

    // Show items automatically each 3s 
    // Infinit loop using recursion with 3s interval
    function autoShow(){
      next()
      setTimeout(autoShow, 3000)
    }

    // Show next iyem
    function next(){
      currentIndex = (currentIndex + 1) % slideItems.length
      show(currentIndex)
    }

    // Show previous item
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
      // const navOffset = nav.offsetTop
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

  // Contact form functions

  // Form validation
  function validation(){
    const form = document.getElementById("contact")
    const email= document.getElementById("email")
  
    form.addEventListener("submit", (e) => {
      
      e.preventDefault()

      if (email.value.match(/^[a-z][a-z0-9_-]+@[a-z0-9_-]+[.][a-z]{3,4}$/g) === null){
        alert("Please enter valid mail address!")
        return
      }
      
      form.submit()
      form.reset()
    })
  }


  // Initilize webpage functions
  function init (){

    switch (window.location.pathname) {
      case "/":
        particlesJS.load('particles-js', './js/particles.json')
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
    }
  }

  // When DOM loaded initialize
  document.addEventListener("DOMContentLoaded", () => {
    init()
  })

}())