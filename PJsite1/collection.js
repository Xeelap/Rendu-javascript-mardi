darkModeBtn = document.getElementById("darkModeBtn") // selectionne le bouton

elements = document.querySelectorAll(
  "body, a, header, .case, .cocktails, .footer, #darkModeBtn"
) // selectionne tous ce qu'il faut passer en dark mode 

darkModeBtn.addEventListener("click", function() {
  elements.forEach(function(element){
    element.classList.toggle("dark-mode")
  }) // active ou desactive le dark mode pour les elements selectionnés
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode"
  } else {
    darkModeBtn.textContent = "Dark Mode"
  }
}) // change le texte du bouton selon le mode actuel 

