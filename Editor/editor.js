// JSON di esempio incorporato
const exampleData = {
  "ETF": [],
  "Azioni": [],
  "Obbligazioni": []
};

// Seleziona gli elementi del DOM
const fileInput = document.getElementById('json-upload');
const errorDiv = document.getElementById('error');
const editorSection = document.getElementById('editor-section');
const tableContainer = document.getElementById('table-container');
const downloadButton = document.getElementById('download-button');
const fileNameDiv = document.querySelector('.file-name');
let data = null;

// Funzione per ottenere il mese attuale nel formato YYYY-MM
function getCurrentMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // +1 perché i mesi sono 0-based
    return `${year}-${month}`;
}

// Funzione per prevenire il comportamento predefinito degli eventi di drag-and-drop
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Configura gli eventi di drag-and-drop per l'area di caricamento
const dropArea = document.querySelector('.file-drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

// Aggiunge la classe 'drag-active' quando si trascina un file sopra l'area
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.add('drag-active');
    }, false);
});

// Rimuove la classe 'drag-active' quando si lascia l'area o si rilascia il file
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('drag-active');
    }, false);
});

// Gestisce il rilascio del file nell'area di drop
dropArea.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        const event = new Event('change', { bubbles: true });
        fileInput.dispatchEvent(event);
    }
}, false);

// Gestisce il caricamento del file JSON
fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        fileNameDiv.textContent = '';
        tableContainer.innerHTML = '';
        editorSection.classList.add('hidden');
        return;
    }

    fileNameDiv.textContent = `File selezionato: ${file.name}`;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            data = JSON.parse(e.target.result);
            if (!isValidJsonStructure(data)) {
                throw new Error('Struttura JSON non valida: mancano categorie o dati degli asset.');
            }
            renderTable(data);
            errorDiv.textContent = '';
            editorSection.classList.remove('hidden');
        } catch (err) {
            errorDiv.textContent = 'Errore nel parsing del JSON: ' + err.message;
            fileNameDiv.textContent = '';
            tableContainer.innerHTML = '';
            editorSection.classList.add('hidden');
        }
    };
    reader.readAsText(file);
}

// Funzione per validare la struttura base del JSON prima di generare la tabella
function isValidJsonStructure(jsonData) {
    if (!jsonData || typeof jsonData !== 'object') return false;
    return Object.keys(jsonData).every(category => {
        if (!Array.isArray(jsonData[category])) return false;
        return jsonData[category].every(asset => {
            return asset &&
                   typeof asset.nome === 'string' &&
                   typeof asset.ISIN === 'string' &&
                   typeof asset.TICKER === 'string' &&
                   Array.isArray(asset.capitale_investito);
        });
    });
}

// Funzione per generare la tabella modificabile dai dati JSON
function renderTable(jsonData) {
    tableContainer.innerHTML = ''; // Pulisce il contenitore della tabella
    Object.keys(jsonData).forEach(category => {
        const categoryData = jsonData[category];
        const table = document.createElement('table');
        table.className = 'editable-table';
        
        // Intestazione della tabella
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Asset', 'ISIN', 'TICKER', 'Mese', 'Quantità', 'Prezzo Unitario', 'Azioni'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Corpo della tabella
        const tbody = document.createElement('tbody');
        categoryData.forEach((asset, assetIndex) => {
            // Controlla se l'asset ha la struttura corretta
            if (!asset || !Array.isArray(asset.capitale_investito)) {
                console.warn(`Asset non valido nella categoria ${category}, indice ${assetIndex}`);
                return;
            }

            // Ogni entry in capitale_investito genera una riga
            asset.capitale_investito.forEach((investment, investmentIndex) => {
                const row = document.createElement('tr');
                
                // Cella Nome Asset
                const nameCell = document.createElement('td');
                if (investmentIndex === 0) {
                    const nameInput = document.createElement('input');
                    nameInput.value = asset.nome || '';
                    nameInput.addEventListener('input', () => {
                        jsonData[category][assetIndex].nome = nameInput.value;
                    });
                    nameCell.appendChild(nameInput);
                }
                row.appendChild(nameCell);

                // Cella ISIN
                const isinCell = document.createElement('td');
                if (investmentIndex === 0) {
                    const isinInput = document.createElement('input');
                    isinInput.value = asset.ISIN || '';
                    isinInput.addEventListener('input', () => {
                        jsonData[category][assetIndex].ISIN = isinInput.value;
                    });
                    isinCell.appendChild(isinInput);
                }
                row.appendChild(isinCell);

                // Cella TICKER
                const tickerCell = document.createElement('td');
                if (investmentIndex === 0) {
                    const tickerInput = document.createElement('input');
                    tickerInput.value = asset.TICKER || '';
                    tickerInput.addEventListener('input', () => {
                        jsonData[category][assetIndex].TICKER = tickerInput.value;
                    });
                    tickerCell.appendChild(tickerInput);
                }
                row.appendChild(tickerCell);

                // Cella Mese
                const monthCell = document.createElement('td');
                const monthInput = document.createElement('input');
                monthInput.value = investment.mese || '';
                monthInput.addEventListener('input', () => {
                    jsonData[category][assetIndex].capitale_investito[investmentIndex].mese = monthInput.value;
                });
                monthCell.appendChild(monthInput);
                row.appendChild(monthCell);

                // Cella Quantità
                const quantityCell = document.createElement('td');
                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.value = investment.quantita || 0;
                quantityInput.addEventListener('input', () => {
                    jsonData[category][assetIndex].capitale_investito[investmentIndex].quantita = parseFloat(quantityInput.value) || 0;
                });
                quantityCell.appendChild(quantityInput);
                row.appendChild(quantityCell);

                // Cella Prezzo Unitario
                const unitPriceCell = document.createElement('td');
                const unitPriceInput = document.createElement('input');
                unitPriceInput.type = 'number';
                unitPriceInput.step = '0.0001';
                unitPriceInput.value = investment.prezzo_unitario || 0;
                unitPriceInput.addEventListener('input', () => {
                    jsonData[category][assetIndex].capitale_investito[investmentIndex].prezzo_unitario = parseFloat(unitPriceInput.value) || 0;
                });
                unitPriceCell.appendChild(unitPriceInput);
                row.appendChild(unitPriceCell);

                // Cella Azioni (Pulsante per rimuovere)
                const actionCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Rimuovi';
                deleteButton.style.padding = '0.25rem 0.5rem';
                deleteButton.style.backgroundColor = '#dc2626';
                deleteButton.style.color = '#ffffff';
                deleteButton.style.border = 'none';
                deleteButton.style.borderRadius = '4px';
                deleteButton.style.cursor = 'pointer';
                deleteButton.addEventListener('click', () => {
                    jsonData[category][assetIndex].capitale_investito.splice(investmentIndex, 1);
                    if (jsonData[category][assetIndex].capitale_investito.length === 0) {
                        jsonData[category].splice(assetIndex, 1);
                    }
                    renderTable(jsonData);
                });
                actionCell.appendChild(deleteButton);
                row.appendChild(actionCell);

                tbody.appendChild(row);
            });

            // Pulsante per aggiungere una nuova entry a capitale_investito
            const addEntryRow = document.createElement('tr');
            const addEntryCell = document.createElement('td');
            addEntryCell.colSpan = 7;
            const addEntryButton = document.createElement('button');
            addEntryButton.textContent = `Aggiungi Investimento a ${asset.nome}`;
            addEntryButton.style.padding = '0.5rem 1rem';
            addEntryButton.style.backgroundColor = '#28a745';
            addEntryButton.style.color = '#ffffff';
            addEntryButton.style.border = 'none';
            addEntryButton.style.borderRadius = '4px';
            addEntryButton.style.cursor = 'pointer';
            addEntryButton.addEventListener('click', () => {
                jsonData[category][assetIndex].capitale_investito.push({
                    mese: getCurrentMonth(),
                    quantita: 0,
                    prezzo_unitario: 0
                });
                renderTable(jsonData);
            });
            addEntryCell.appendChild(addEntryButton);
            addEntryRow.appendChild(addEntryCell);
            tbody.appendChild(addEntryRow);
        });

        // Pulsante per aggiungere un nuovo asset alla categoria
        const addAssetRow = document.createElement('tr');
        const addAssetCell = document.createElement('td');
        addAssetCell.colSpan = 7;
        const addAssetButton = document.createElement('button');
        addAssetButton.textContent = `Aggiungi Nuovo Asset a ${category}`;
        addAssetButton.style.padding = '0.5rem 1rem';
        addAssetButton.style.backgroundColor = '#28a745';
        addAssetButton.style.color = '#ffffff';
        addAssetButton.style.border = 'none';
        addAssetButton.style.borderRadius = '4px';
        addAssetButton.style.cursor = 'pointer';
        addAssetButton.addEventListener('click', () => {
            jsonData[category].push({
                nome: 'Nuovo Asset',
                ISIN: '',
                TICKER: '',
                capitale_investito: [{ mese: getCurrentMonth(), quantita: 0, prezzo_unitario: 0 }]
            });
            renderTable(jsonData);
        });
        addAssetCell.appendChild(addAssetButton);
        addAssetRow.appendChild(addAssetCell);
        tbody.appendChild(addAssetRow);

        table.appendChild(tbody);
        const scrollWrapper = document.createElement('div');
        scrollWrapper.className = 'table-container';
        scrollWrapper.appendChild(table);
        tableContainer.appendChild(scrollWrapper);

    });
}

// Gestisce il download del JSON modificato
downloadButton.addEventListener('click', () => {
    try {
        if (!isValidJson(data)) {
            errorDiv.textContent = 'JSON non valido: controlla la struttura (categorie, asset, campi richiesti)!';
            return;
        }
        errorDiv.textContent = '';
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'investimenti_modificato.json';
        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        errorDiv.textContent = 'Errore nel salvataggio del JSON: ' + err.message;
    }
});

// Funzione per validare la struttura del JSON per il download
function isValidJson(data) {
    if (!data || typeof data !== 'object') return false;
    return Object.keys(data).every(category => {
        if (!Array.isArray(data[category])) return false;
        return data[category].every(asset => {
            if (!asset || 
                typeof asset.nome !== 'string' ||
                typeof asset.ISIN !== 'string' ||
                typeof asset.TICKER !== 'string' ||
                !Array.isArray(asset.capitale_investito)) return false;
            return asset.capitale_investito.every(entry => 
                entry.mese && typeof entry.mese === 'string' &&
                !isNaN(entry.quantita) && !isNaN(entry.prezzo_unitario)
            );
        });
    });
}

// Carica i dati di esempio all'avvio
window.addEventListener('DOMContentLoaded', () => {
    try {
        data = JSON.parse(JSON.stringify(exampleData)); // Crea una copia profonda
        if (!isValidJsonStructure(data)) {
            errorDiv.textContent = 'Struttura del file di esempio non valida.';
            return;
        }
        renderTable(data);
        errorDiv.textContent = '';
        fileNameDiv.textContent = 'File caricato: dati di esempio';
        editorSection.classList.remove('hidden');
    } catch (err) {
        errorDiv.textContent = 'Errore nel caricamento dei dati di esempio: ' + err.message;
    }
});