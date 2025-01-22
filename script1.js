// Fonction pour ouvrir le PDF dans une fenêtre modale
function openPDF(fileName) {
    var modal = document.getElementById("pdfModal");
    var pdfViewer = document.getElementById("pdfViewer");
  
    // Définir le fichier PDF à afficher
    pdfViewer.src = fileName;
    
    // Afficher la fenêtre modale
    modal.style.display = "block";
  }
  
  // Fonction pour fermer la fenêtre modale
  function closePDF() {
    var modal = document.getElementById("pdfModal");
    modal.style.display = "none";
  }

  document.querySelector('.back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});


// Redirection vers help.html
window.onload = function() {
window.location.href = "help.html";
};
