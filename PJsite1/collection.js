darkModeBtn = document.getElementById("darkModeBtn")

elements = document.querySelectorAll(
  "body, a, header, .case, .cocktails, .footer, #darkModeBtn"
)

darkModeBtn.addEventListener("click", function() {
  elements.forEach(function(element){
    element.classList.toggle("dark-mode")
  })
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode"
  } else {
    darkModeBtn.textContent = "Dark Mode"
  }
})

