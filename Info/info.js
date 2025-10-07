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

// Event listener per il pulsante di download
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-template');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', downloadTemplate);
    }
});

// Funzione per evidenziare il link attivo nella sidebar
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar a');
    
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