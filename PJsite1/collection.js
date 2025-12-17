darkModeBtn = document.getElementById("darkModeBtn")

elements = document.querySelectorAll(
  "body, a, header, .case, .cocktails, .footer, #darkModeBtn"
)

darkModeBtn.addEventListener("click", function() {
  elements.forEach(function(element){
    element.classList.toggle("dark-mode")
  })
})

