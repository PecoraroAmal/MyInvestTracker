// Template JSON per il portfolio
const templateJSON = {
  "ETF": [
    {
      "nome": "Vanguard S&P 500 ETF",
      "ISIN": "IE00B3XXRP09",
      "TICKER": "VUSA",
      "capitale_investito": [
        {
          "mese": "2025-10",
          "quantita": 1,
          "prezzo_unitario": 109
        }
      ]
    }
  ],
  "Azioni": [
    {
      "nome": "Apple Inc.",
      "ISIN": "US0378331005",
      "TICKER": "AAPL",
      "capitale_investito": [
        {
          "mese": "2025-10",
          "quantita": 1,
          "prezzo_unitario": 220
        }
      ]
    }
  ],
  "Obbligazioni": []
};

// Funzione per scaricare il file JSON template
function downloadTemplate() {
    // Crea il contenuto JSON formattato
    const jsonString = JSON.stringify(templateJSON, null, 2);
    
    // Crea un Blob con il contenuto JSON
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // Crea un URL temporaneo per il Blob
    const url = URL.createObjectURL(blob);
    
    // Crea un elemento <a> temporaneo per il download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio_template.json';
    
    // Simula il click per avviare il download
    document.body.appendChild(link);
    link.click();
    
    // Pulisce: rimuove l'elemento e revoca l'URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Registra il service worker per il supporto offline
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service Worker registered:', registration);
    }).catch(error => {
        console.error('Service Worker registration failed:', error);
    });
}

// Event listener per il pulsante di download
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-template');
    const downloadAppButton = document.getElementById('download-app');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', downloadTemplate);
    }
    
    if (downloadAppButton) {
        downloadAppButton.addEventListener('click', downloadApp);
    }
});

// Funzione per scaricare l'app (PWA)
function downloadApp() {
    // Suggerisce di aggiungere alla schermata home
    if (navigator.share) {
        navigator.share({
            title: 'MyInvestTracker',
            text: 'Aggiungi MyInvestTracker alla tua schermata home',
            url: window.location.href
        }).catch(err => console.log('Errore nella condivisione:', err));
    } else {
        alert('Funzionalità PWA disponibile. Accedi dal browser mobile, apri il menu e cerca "Aggiungi alla schermata home" o "Install app".');
    }
}

// Funzione per evidenziare il link attivo nella navbar
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Esegui al caricamento della pagina
document.addEventListener('DOMContentLoaded', setActiveNavLink);