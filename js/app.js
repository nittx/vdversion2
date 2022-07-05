//find the height of navbar both methods are correct

//  var clientHeight = document.getElementById('myDiv').clientHeight;

// prevent right click options

// document.addEventListener('contextmenu', event => event.preventDefault());

let clientHeight = document.getElementById("navbar").offsetHeight
console.log(clientHeight)

//add box shadow to navbar on scroll

const navShadow = document.getElementById("navShadow")

let moveToTopBtn = document.getElementById("moveToTop")
// When the user scrolls down 40px from the top of the document, Add a shadow

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navShadow.classList.add("shadow")
    navShadow.classList.add("nav-bg-style")
    // navShadow.style.backgroundColor = "#0E1312";
    moveToTopBtn.style.right = "2rem"
  } else {
    navShadow.classList.remove("shadow")
    navShadow.classList.remove("nav-bg-style")
    // navShadow.style.backgroundColor = "transparent";
    moveToTopBtn.style.right = "-100%"
  }
}

const scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}






