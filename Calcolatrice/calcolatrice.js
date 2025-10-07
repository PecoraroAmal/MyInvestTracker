// JSON di esempio incorporato
const exampleData = {
  "ETF": [
    {
      "nome": "Vanguard S&P 500 ETF",
      "ISIN": "IE00B3XXRP09",
      "TICKER": "VUSA",
      "capitale_investito": [
        { "mese": "2023-04", "quantita": 25, "prezzo_unitario": 82.45 },
        { "mese": "2023-05", "quantita": 27, "prezzo_unitario": 83.10 },
        { "mese": "2023-06", "quantita": 30, "prezzo_unitario": 84.25 },
        { "mese": "2023-07", "quantita": 32, "prezzo_unitario": 85.40 },
        { "mese": "2023-08", "quantita": 35, "prezzo_unitario": 84.90 },
        { "mese": "2023-09", "quantita": 37, "prezzo_unitario": 83.75 },
        { "mese": "2023-10", "quantita": 40, "prezzo_unitario": 82.95 },
        { "mese": "2023-11", "quantita": 42, "prezzo_unitario": 84.30 },
        { "mese": "2023-12", "quantita": 45, "prezzo_unitario": 85.80 },
        { "mese": "2024-01", "quantita": 47, "prezzo_unitario": 86.95 },
        { "mese": "2024-02", "quantita": 50, "prezzo_unitario": 88.20 },
        { "mese": "2024-03", "quantita": 52, "prezzo_unitario": 89.15 }
      ],
      "storico_investimenti": [
        { "mese": "2023-04", "prezzo": 2061.25 },
        { "mese": "2023-05", "prezzo": 2243.70 },
        { "mese": "2023-06", "prezzo": 2527.50 },
        { "mese": "2023-07", "prezzo": 2732.80 },
        { "mese": "2023-08", "prezzo": 2971.50 },
        { "mese": "2023-09", "prezzo": 3098.75 },
        { "mese": "2023-10", "prezzo": 3318.00 },
        { "mese": "2023-11", "prezzo": 3540.60 },
        { "mese": "2023-12", "prezzo": 3861.00 },
        { "mese": "2024-01", "prezzo": 4086.65 },
        { "mese": "2024-02", "prezzo": 4410.00 },
        { "mese": "2024-03", "prezzo": 4635.80 }
      ]
    },
    {
      "nome": "iShares MSCI World",
      "ISIN": "IE00B4L5Y983",
      "TICKER": "IWDA",
      "capitale_investito": [
        { "mese": "2023-04", "quantita": 20, "prezzo_unitario": 75.80 },
        { "mese": "2023-05", "quantita": 22, "prezzo_unitario": 76.45 },
        { "mese": "2023-06", "quantita": 24, "prezzo_unitario": 77.20 },
        { "mese": "2023-07", "quantita": 26, "prezzo_unitario": 78.35 },
        { "mese": "2023-08", "quantita": 28, "prezzo_unitario": 77.90 },
        { "mese": "2023-09", "quantita": 30, "prezzo_unitario": 76.85 },
        { "mese": "2023-10", "quantita": 32, "prezzo_unitario": 75.95 },
        { "mese": "2023-11", "quantita": 34, "prezzo_unitario": 77.40 },
        { "mese": "2023-12", "quantita": 36, "prezzo_unitario": 78.90 },
        { "mese": "2024-01", "quantita": 38, "prezzo_unitario": 80.15 },
        { "mese": "2024-02", "quantita": 40, "prezzo_unitario": 81.40 },
        { "mese": "2024-03", "quantita": 42, "prezzo_unitario": 82.20 }
      ],
      "storico_investimenti": [
        { "mese": "2023-04", "prezzo": 1516.00 },
        { "mese": "2023-05", "prezzo": 1681.90 },
        { "mese": "2023-06", "prezzo": 1852.80 },
        { "mese": "2023-07", "prezzo": 2037.10 },
        { "mese": "2023-08", "prezzo": 2181.20 },
        { "mese": "2023-09", "prezzo": 2305.50 },
        { "mese": "2023-10", "prezzo": 2430.40 },
        { "mese": "2023-11", "prezzo": 2631.60 },
        { "mese": "2023-12", "prezzo": 2840.40 },
        { "mese": "2024-01", "prezzo": 3045.70 },
        { "mese": "2024-02", "prezzo": 3256.00 },
        { "mese": "2024-03", "prezzo": 3452.40 }
      ]
    }
  ],
  "Azioni": [
    {
      "nome": "Apple Inc.",
      "ISIN": "US0378331005",
      "TICKER": "AAPL",
      "capitale_investito": [
        { "mese": "2023-04", "quantita": 12, "prezzo_unitario": 165.20 },
        { "mese": "2023-05", "quantita": 14, "prezzo_unitario": 170.50 },
        { "mese": "2023-06", "quantita": 15, "prezzo_unitario": 175.30 },
        { "mese": "2023-07", "quantita": 17, "prezzo_unitario": 180.45 },
        { "mese": "2023-08", "quantita": 18, "prezzo_unitario": 178.20 },
        { "mese": "2023-09", "quantita": 20, "prezzo_unitario": 171.50 },
        { "mese": "2023-10", "quantita": 22, "prezzo_unitario": 169.80 },
        { "mese": "2023-11", "quantita": 23, "prezzo_unitario": 174.90 },
        { "mese": "2023-12", "quantita": 25, "prezzo_unitario": 181.20 },
        { "mese": "2024-01", "quantita": 27, "prezzo_unitario": 185.85 },
        { "mese": "2024-02", "quantita": 28, "prezzo_unitario": 182.31 },
        { "mese": "2024-03", "quantita": 30, "prezzo_unitario": 175.92 }
      ]
    },
    {
      "nome": "Microsoft Corp.",
      "ISIN": "US5949181045",
      "TICKER": "MSFT",
      "capitale_investito": [
        { "mese": "2023-04", "quantita": 8, "prezzo_unitario": 285.50 },
        { "mese": "2023-05", "quantita": 9, "prezzo_unitario": 295.30 },
        { "mese": "2023-06", "quantita": 10, "prezzo_unitario": 310.20 },
        { "mese": "2023-07", "quantita": 11, "prezzo_unitario": 325.80 },
        { "mese": "2023-08", "quantita": 12, "prezzo_unitario": 330.50 },
        { "mese": "2023-09", "quantita": 13, "prezzo_unitario": 345.20 },
        { "mese": "2023-10", "quantita": 14, "prezzo_unitario": 360.45 },
        { "mese": "2023-11", "quantita": 15, "prezzo_unitario": 370.30 },
        { "mese": "2023-12", "quantita": 16, "prezzo_unitario": 385.50 },
        { "mese": "2024-01", "quantita": 17, "prezzo_unitario": 397.58 },
        { "mese": "2024-02", "quantita": 18, "prezzo_unitario": 409.06 },
        { "mese": "2024-03", "quantita": 19, "prezzo_unitario": 421.43 }
      ]
    },
    {
      "nome": "NVIDIA Corp.",
      "ISIN": "US67066G1040",
      "TICKER": "NVDA",
      "capitale_investito": [
        { "mese": "2023-04", "quantita": 3, "prezzo_unitario": 271.20 },
        { "mese": "2023-05", "quantita": 4, "prezzo_unitario": 312.50 },
        { "mese": "2023-06", "quantita": 4, "prezzo_unitario": 422.90 },
        { "mese": "2023-07", "quantita": 5, "prezzo_unitario": 451.80 },
        { "mese": "2023-08", "quantita": 5, "prezzo_unitario": 485.90 },
        { "mese": "2023-09", "quantita": 6, "prezzo_unitario": 432.70 },
        { "mese": "2023-10", "quantita": 6, "prezzo_unitario": 412.30 },
        { "mese": "2023-11", "quantita": 7, "prezzo_unitario": 487.20 },
        { "mese": "2023-12", "quantita": 7, "prezzo_unitario": 495.30 },
        { "mese": "2024-01", "quantita": 8, "prezzo_unitario": 547.10 },
        { "mese": "2024-02", "quantita": 8, "prezzo_unitario": 692.35 },
        { "mese": "2024-03", "quantita": 9, "prezzo_unitario": 889.64 }
      ]
    },
    {
      "nome": "ASML Holding",
      "ISIN": "NL0010273215",
      "TICKER": "ASML",
      "capitale_investito": [
        { "mese": "2023-04", "quantita": 2, "prezzo_unitario": 580.40 },
        { "mese": "2023-05", "quantita": 2, "prezzo_unitario": 605.20 },
        { "mese": "2023-06", "quantita": 3, "prezzo_unitario": 620.80 },
        { "mese": "2023-07", "quantita": 3, "prezzo_unitario": 635.50 },
        { "mese": "2023-08", "quantita": 3, "prezzo_unitario": 592.30 },
        { "mese": "2023-09", "quantita": 4, "prezzo_unitario": 578.90 },
        { "mese": "2023-10", "quantita": 4, "prezzo_unitario": 555.40 },
        { "mese": "2023-11", "quantita": 4, "prezzo_unitario": 615.80 },
        { "mese": "2023-12", "quantita": 5, "prezzo_unitario": 670.20 },
        { "mese": "2024-01", "quantita": 5, "prezzo_unitario": 678.40 },
        { "mese": "2024-02", "quantita": 6, "prezzo_unitario": 695.20 },
        { "mese": "2024-03", "quantita": 6, "prezzo_unitario": 885.90 }
      ]
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
    const jsonUpload = document.getElementById('json-upload');
    const errorDiv = document.getElementById('error');
    const fileNameDiv = document.querySelector('.file-name');
    const inputSection = document.getElementById('input-section');
    const assetTableBody = document.getElementById('asset-table-body');
    const maxBudgetInput = document.getElementById('max-budget');
    const calculateButton = document.getElementById('calculate-button');
    const withinBudgetSection = document.getElementById('within-budget-section');
    const withinBudgetTableBody = document.getElementById('within-budget-table-body');
    const withinBudgetSummary = document.getElementById('within-budget-summary');
    const remainingPercentageDiv = document.getElementById('remaining-percentage');
    const fileDropArea = document.querySelector('.file-drop-area');
    const fractionalCheckbox = document.getElementById('fractional-calc');

    // controlli DOM minimi
    if (!jsonUpload || !errorDiv || !inputSection || !assetTableBody ||
        !maxBudgetInput || !calculateButton || !withinBudgetSection || !withinBudgetTableBody ||
        !remainingPercentageDiv || !fractionalCheckbox) {
        console.error('Elementi DOM mancanti. Controlla gli id nel markup.');
        return;
    }

    let assets = []; // { nome, qty, price, currentValue, currentPercentage }

    // utilità per formattazione numeri
    function formatNumber(num, decimals = 2) {
        return num.toLocaleString('it-IT', { 
            minimumFractionDigits: decimals, 
            maximumFractionDigits: decimals 
        });
    }

    function parseLocalizedNumber(str) {
        if (typeof str !== 'string') return parseFloat(str);
        // Rimuove i punti (separatori delle migliaia) e sostituisce la virgola con il punto
        return parseFloat(str.replace(/\./g, '').replace(',', '.'));
    }

    // utilità
    function sumQuantities(capitaleInvestito) {
        if (!Array.isArray(capitaleInvestito)) return 0;
        return capitaleInvestito.reduce((s, e) => s + (Number(e.quantita) || 0), 0);
    }
    function valueOf(qty, price) { return qty * price; }

    // calcola il valore attuale totale del portafoglio per le percentuali - STESSO CALCOLO DELL'ALTRA PAGINA
    function calculateCurrentPortfolioValue(jsonData) {
        let totalValue = 0;
        
        for (const category in jsonData) {
            if (!Array.isArray(jsonData[category])) continue;
            jsonData[category].forEach(asset => {
                if (!asset.nome || !Array.isArray(asset.capitale_investito)) return;
                
                const totalQuantity = sumQuantities(asset.capitale_investito);
                // Get the last price from capitale_investito (ultimo prezzo_unitario) - COME NELL'ALTRA PAGINA
                const lastInvestment = asset.capitale_investito[asset.capitale_investito.length - 1] || {};
                const lastUnitPrice = lastInvestment.prezzo_unitario || 0;
                const currentValue = lastUnitPrice * totalQuantity;
                
                totalValue += currentValue;
            });
        }
        
        return totalValue;
    }

    // aggiorna percentuali attuali live (chiamata quando si modifica un prezzo)
    function updateCurrentPercentages() {
        // Non facciamo nulla - le percentuali attuali rimangono fisse dal JSON
        return;
    }

    // aggiorna percentuale rimanente delle percentuali desiderate
    function updateRemainingPercentage() {
        const percInputs = document.querySelectorAll('input[id^="percentage-"]');
        let sum = 0;
        percInputs.forEach(inp => {
            const v = inp.value !== '' ? parseLocalizedNumber(inp.value) : 0;
            if (!isNaN(v)) sum += v;
        });
        const remaining = 100 - sum;
        remainingPercentageDiv.textContent = `Percentuale rimanente: ${formatNumber(remaining)}%`;
        remainingPercentageDiv.style.color = Math.abs(remaining) < 0.01 ? 'green' : 'red';
    }

    // popola la tabella dagli asset del JSON - CORREZIONI PER CALCOLO PERCENTUALE ATTUALE
    function populateTable(jsonData) {
        try {
            assets = [];
            assetTableBody.innerHTML = '';

            // Calcola il valore totale del portafoglio per le percentuali attuali - COME NELL'ALTRA PAGINA
            const totalPortfolioValue = calculateCurrentPortfolioValue(jsonData);

            let idx = 0;
            for (const category in jsonData) {
                if (!Array.isArray(jsonData[category])) continue;
                jsonData[category].forEach(asset => {
                    if (!asset.nome || !Array.isArray(asset.capitale_investito)) return;
                    
                    const qty = sumQuantities(asset.capitale_investito);
                    // Ottieni l'ultimo prezzo_unitario dal capitale_investito - COME NELL'ALTRA PAGINA
                    const lastUnitPrice = asset.capitale_investito.length > 0 
                        ? asset.capitale_investito[asset.capitale_investito.length - 1].prezzo_unitario 
                        : 0;
                    // Calcola il valore corrente usando l'ultimo prezzo unitario - COME NELL'ALTRA PAGINA
                    const currentValue = lastUnitPrice * qty;
                    const currentPercentage = totalPortfolioValue > 0 ? (currentValue / totalPortfolioValue) * 100 : 0;
                    
                    assets.push({
                        nome: asset.nome,
                        qty,
                        price: lastUnitPrice,
                        currentValue,
                        currentPercentage
                    });

                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${asset.nome}</td>
                        <td id="current-percentage-${idx}">${formatNumber(currentPercentage)}%</td>
                        <td>${formatNumber(qty)}</td>
                        <td><input type="text" id="price-${idx}" placeholder="Prezzo corrente" value="${formatNumber(lastUnitPrice)}"></td>
                        <td><input type="text" id="percentage-${idx}" placeholder="% desiderata"></td>
                    `;
                    assetTableBody.appendChild(row);

                    // listener live
                    const priceEl = document.getElementById(`price-${idx}`);
                    const percEl = document.getElementById(`percentage-${idx}`);
                    if (priceEl) priceEl.addEventListener('input', updateCurrentPercentages);
                    if (percEl) percEl.addEventListener('input', updateRemainingPercentage);

                    idx++;
                });
            }

            if (assets.length === 0) throw new Error('Nessun asset valido trovato nel JSON.');

            inputSection.classList.remove('hidden');
            withinBudgetSection.classList.add('hidden');
            errorDiv.textContent = '';
            updateRemainingPercentage();
            updateCurrentPercentages();
        } catch (err) {
            throw err;
        }
    }

    // caricamento automatico dati di esempio incorporati
    try {
        const jsonData = JSON.parse(JSON.stringify(exampleData)); // Crea una copia profonda
        if (fileNameDiv) fileNameDiv.textContent = 'File caricato: dati di esempio';
        populateTable(jsonData);
    } catch (err) {
        if (fileNameDiv) fileNameDiv.textContent = 'Errore nel caricamento dei dati di esempio';
        console.error('Errore caricamento dati esempio:', err);
    }

    // upload file input
    jsonUpload.addEventListener('change', (ev) => {
        const file = ev.target.files && ev.target.files[0];
        if (!file) return;
        if (fileNameDiv) fileNameDiv.textContent = `File selezionato: ${file.name}`;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                populateTable(json);
            } catch (err) {
                errorDiv.textContent = 'Errore: file JSON non valido.';
                inputSection.classList.add('hidden');
                withinBudgetSection.classList.add('hidden');
            }
        };
        reader.readAsText(file);
    });

    // drag & drop
    if (fileDropArea) {
        fileDropArea.addEventListener('dragover', (e) => { e.preventDefault(); fileDropArea.classList.add('drag-active'); });
        fileDropArea.addEventListener('dragleave', () => { fileDropArea.classList.remove('drag-active'); });
        fileDropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            fileDropArea.classList.remove('drag-active');
            const file = e.dataTransfer.files && e.dataTransfer.files[0];
            if (!file) return;
            // assegna ai file input e forza change
            try {
                jsonUpload.files = e.dataTransfer.files;
                jsonUpload.dispatchEvent(new Event('change'));
            } catch (err) {
                // fallback: usa FileReader direttamente
                const reader = new FileReader();
                reader.onload = (ev) => {
                    try {
                        const json = JSON.parse(ev.target.result);
                        if (fileNameDiv) fileNameDiv.textContent = `File selezionato: ${file.name}`;
                        populateTable(json);
                    } catch (e) {
                        errorDiv.textContent = 'Errore: file JSON non valido.';
                    }
                };
                reader.readAsText(file);
            }
        });
    }

    // calcolo riequilibrio
    calculateButton.addEventListener('click', () => {
        try {
            errorDiv.textContent = '';  // Pulisci l'errore precedente
            const maxBudget = parseLocalizedNumber(maxBudgetInput.value);
            if (isNaN(maxBudget) || maxBudget < 0) throw new Error('Inserisci un importo massimo valido.');

            // legge i dati attuali da tabella
            const assetData = assets.map((a, i) => {
                const priceEl = document.getElementById(`price-${i}`);
                const percEl = document.getElementById(`percentage-${i}`);
                const price = priceEl && priceEl.value !== '' ? parseLocalizedNumber(priceEl.value) : NaN;
                const percentage = percEl && percEl.value !== '' ? parseLocalizedNumber(percEl.value) : NaN;
                if (isNaN(price) || price <= 0) throw new Error(`Prezzo non valido per ${a.nome}.`);
                if (isNaN(percentage) || percentage < 0) throw new Error(`Percentuale non valida per ${a.nome}.`);
                return {
                    nome: a.nome,
                    qty: a.qty,
                    price,
                    percentage,
                    currentValue: valueOf(a.qty, price)
                };
            });

            const totalRequested = assetData.reduce((s, x) => s + x.percentage, 0);
            if (Math.abs(totalRequested - 100) > 0.01) throw new Error('La somma delle percentuali desiderate deve essere 100%.');

            errorDiv.textContent = '';

            const totalCurrentValue = assetData.reduce((s, x) => s + x.currentValue, 0);
            const allowFractional = fractionalCheckbox.checked;

            const rebalanced = calculateRebalancedPortfolio(assetData, maxBudget, totalCurrentValue, allowFractional);

            // mostra risultati
            withinBudgetTableBody.innerHTML = '';
            rebalanced.forEach(r => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${r.nome}</td>
                    <td>${formatNumber(r.currentQuantity)}</td>
                    <td>${formatNumber(r.newQuantity)}</td>
                    <td>${r.action}</td>
                    <td>${formatNumber(r.cost)}</td>
                    <td>${formatNumber(r.requestedPercentage)}%</td>
                    <td>${formatNumber(r.actualPercentage)}%</td>
                `;
                withinBudgetTableBody.appendChild(row);
            });

            const totalInvested = rebalanced.reduce((s, x) => s + (x.cost >= 0 ? x.cost : 0), 0);
            const totalSold = rebalanced.reduce((s, x) => s + (x.cost < 0 ? -x.cost : 0), 0);
            const budgetRemaining = maxBudget - totalInvested;
            withinBudgetSummary.textContent = `Totale investito: €${formatNumber(totalInvested)} | Totale venduto: €${formatNumber(totalSold)} | Budget rimanente: €${formatNumber(budgetRemaining)}`;

            withinBudgetSection.classList.remove('hidden');
        } catch (err) {
            errorDiv.textContent = `Errore: ${err.message}`;
            errorDiv.style.marginBottom = '1rem';  // Aggiungi spazio sotto l'errore
            withinBudgetSection.classList.add('hidden');
        }
    });

    // algoritmo di riequilibrio con supporto opzionale per asset frazionali
    function calculateRebalancedPortfolio(assetData, maxBudget, totalCurrentValue, allowFractional = false) {
        const result = assetData.map(a => ({
            nome: a.nome,
            price: a.price,
            requestedPercentage: a.percentage,
            currentQuantity: a.qty,
            newQuantity: a.qty,
            cost: 0,
            action: 'Nessuna azione',
            actualPercentage: 0
        }));

        let remainingBudget = maxBudget;
        let totalInvestment = totalCurrentValue;

        for (const asset of result) {
            const targetValue = (asset.requestedPercentage / 100) * (totalCurrentValue + maxBudget);
            const targetQty = allowFractional 
                ? Math.round((targetValue / asset.price) * 100) / 100
                : Math.floor(targetValue / asset.price);
            
            const toBuy = Math.max(0, targetQty - asset.currentQuantity);
            if (toBuy <= (allowFractional ? 0.01 : 1) - 0.001) continue;

            const cost = toBuy * asset.price;
            if (cost <= remainingBudget) {
                asset.newQuantity = allowFractional 
                    ? Math.round((asset.currentQuantity + toBuy) * 100) / 100
                    : Math.floor(asset.currentQuantity + toBuy);
                asset.cost = cost;
                asset.action = `Acquista ${formatNumber(toBuy)} unità`;
                remainingBudget -= cost;
                totalInvestment += cost;  // Aggiorna il valore totale dell'investimento
            } else {
                const affordable = allowFractional 
                    ? Math.floor((remainingBudget / asset.price) * 100) / 100
                    : Math.floor(remainingBudget / asset.price);
                
                if (affordable >= (allowFractional ? 0.01 : 1)) {
                    asset.newQuantity = allowFractional 
                        ? Math.round((asset.currentQuantity + affordable) * 100) / 100
                        : Math.floor(asset.currentQuantity + affordable);
                    asset.cost = affordable * asset.price;
                    asset.action = `Acquista ${formatNumber(affordable)} unità (budget limitato)`;
                    remainingBudget -= asset.cost;
                    totalInvestment += asset.cost;  // Aggiorna il valore totale dell'investimento
                }
            }
        }

        // Calcola le percentuali finali basate sul valore totale DOPO gli acquisti
        result.forEach(asset => {
            const newValue = asset.newQuantity * asset.price;
            asset.actualPercentage = totalInvestment > 0 ? (newValue / totalInvestment) * 100 : 0;
        });

        return result;
    }
});