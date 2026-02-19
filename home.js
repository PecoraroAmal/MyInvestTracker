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

let deferredPrompt;

// Registra il service worker con gestione robusta
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('Attempting to register Service Worker at /sw.js');
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(registration => {
        console.log('Service Worker registered successfully:', registration);
        registration.update();
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
    
    console.log('Fetching manifest at /assets/site.webmanifest');
    fetch('/assets/site.webmanifest')
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load manifest: ${response.status} ${response.statusText}`);
        console.log('Manifest loaded successfully');
        return response.json();
      })
      .then(data => console.log('Manifest content:', data))
      .catch(error => console.error('Error fetching manifest:', error));
  });
}

// Mostra messaggi all'utente
function showMessage(message, type = 'info') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${type}`;
  messageDiv.textContent = message;
  messageDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
    color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
    border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
    border-radius: 5px;
    z-index: 10000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `;
  document.body.appendChild(messageDiv);
  
  setTimeout(() => messageDiv.remove(), 4000);
}

// Funzione per scaricare il file JSON template
function downloadTemplate() {
    const jsonString = JSON.stringify(templateJSON, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio_template.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-template');
    const installButton = document.getElementById('install-app');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', downloadTemplate);
    }
    
    if (installButton) {
        console.log('Install button found in DOM');
        installButton.disabled = true;
        installButton.addEventListener('click', () => {
            console.log('Install button clicked, userAgent:', navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream;
            if (isIOS) {
                showMessage('Su iOS, usa il menu Safari: Condividi > Aggiungi a Home', 'info');
            } else if (deferredPrompt) {
                console.log('Showing install prompt');
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    console.log('Prompt outcome:', choiceResult.outcome);
                    if (choiceResult.outcome === 'accepted') {
                        showMessage('MyInvestTracker installato con successo!', 'success');
                    } else {
                        showMessage('Installazione annullata.', 'info');
                    }
                    deferredPrompt = null;
                });
            } else {
                console.warn('Install prompt not available');
                showMessage('Prompt non disponibile. Su Android: apri il menu (3 punti) > "Aggiungi alla schermata home" o "Installa app". Assicurati di usare HTTPS.', 'info');
            }
        });
        setTimeout(() => {
            installButton.disabled = false;
            console.log('Install button enabled');
        }, 2000);
    } else {
        console.log('Install button not found in DOM');
    }
    
    setActiveNavLink();
});

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt fired:', e);
    e.preventDefault();
    deferredPrompt = e;
    const installButton = document.getElementById('install-app');
    if (installButton) {
        console.log('Enabling install button due to beforeinstallprompt');
        installButton.disabled = false;
    }
});

window.addEventListener('appinstalled', () => {
    console.log('PWA installed');
    showMessage('MyInvestTracker installato e pronto!', 'success');
});

function checkOnlineStatus() {
    if (!navigator.onLine) {
        showMessage('Offline! Alcune funzionalità potrebbero non essere disponibili.', 'info');
    }
}

window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);

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