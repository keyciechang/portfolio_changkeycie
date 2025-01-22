// Fonction de recherche
function searchContent() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const helpBoxes = document.querySelectorAll('.help-box');
  
    helpBoxes.forEach(box => {
      const title = box.querySelector('h2').textContent.toLowerCase();
      const description = box.querySelector('p').textContent.toLowerCase();
      
      // Afficher ou masquer les blocs en fonction de la recherche
      if (title.includes(searchQuery) || description.includes(searchQuery)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  }
  
  // Ajoutez un événement pour activer la recherche
  document.getElementById('search-bar').addEventListener('input', searchContent);
  

  document.querySelector('.back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});


// Redirection vers help.html
window.onload = function() {
window.location.href = "help.html";
};
