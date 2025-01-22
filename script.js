const dockItems = document.querySelectorAll('.dock li');
const windowsContainer = document.getElementById('windows-container');
const dateTimeElement = document.querySelector('.date-time');

// Crée une nouvelle fenêtre
function createWindow(title, page) {
  const windowElement = document.createElement('div');
  windowElement.classList.add('window');
  windowElement.innerHTML = `
    <div class="window-header">
      <span class="title">${title}</span>
      <div class="controls">
        <button class="minimize">➖</button>
        <button class="maximize">🗖</button>
        <button class="close">✖</button>
      </div>
    </div>
    <div class="window-content">
      <iframe src="${page}" frameborder="0" style="width: 100%; height: 100%;"></iframe>
    </div>
  `;

  // Place initiale de la fenêtre
  windowElement.style.top = `${Math.random() * 200 + 50}px`; // Position initiale aléatoire
  windowElement.style.left = `${Math.random() * 200 + 50}px`;

  // Boutons de gestion
  const closeButton = windowElement.querySelector('.close');
  closeButton.addEventListener('click', () => windowElement.remove());

  const minimizeButton = windowElement.querySelector('.minimize');
  minimizeButton.addEventListener('click', () => {
    const content = windowElement.querySelector('.window-content');
    content.classList.toggle('hidden');
  });

  const maximizeButton = windowElement.querySelector('.maximize');
  maximizeButton.addEventListener('click', () => {
    windowElement.classList.toggle('maximized');
  });

  // Ajout du déplacement de la fenêtre
  addDragFunctionality(windowElement);

  // Ajoute la fenêtre au conteneur principal
  windowsContainer.appendChild(windowElement);
}

// Permet le glisser-déposer des fenêtres
function addDragFunctionality(windowElement) {
  const header = windowElement.querySelector('.window-header');

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowElement.offsetLeft;
    offsetY = e.clientY - windowElement.offsetTop;
    windowElement.style.zIndex = 1000; // Amène la fenêtre au premier plan
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// Associe chaque icône à une fenêtre
dockItems.forEach((item) => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');
    const title = item.textContent.trim();
    createWindow(title, page);
  });
});

// Fonction pour mettre à jour l'heure et la date actuelles
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('fr-FR', options);
  const formattedTime = now.toLocaleTimeString('fr-FR');

  dateTimeElement.textContent = `${formattedDate} ${formattedTime}`;
}

// Met à jour l'heure toutes les secondes
setInterval(updateDateTime, 1000);

document.querySelector('.back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Redirection vers help.html
window.onload = function() {
window.location.href = "help.html";
};
