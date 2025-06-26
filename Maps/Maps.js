function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();

    /* File: Maps.js */
// Verwijzingen naar DOM-elementen
const infoButton = document.getElementById('info-button');
const infoPanel = document.getElementById('info-panel');
const closeBtn = document.querySelector('#info-panel .close-btn');

// Functie om paneel te openen/sluiten
function togglePanel() {
  infoPanel.classList.toggle('open');
  infoButton.classList.toggle('open');
}

// Event listeners
infoButton.addEventListener('click', togglePanel);
closeBtn.addEventListener('click', togglePanel);