// Dati JSON incorporati direttamente
const jsonData = {
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

// Evento che si attiva quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    // Selezione degli elementi DOM
    const fileInput = document.getElementById('json-upload');
    const errorDiv = document.getElementById('error');
    const summarySection = document.getElementById('summary-section');
    const doughnutSection = document.getElementById('doughnut-section');
    const lineChartSection = document.getElementById('line-chart-section');
    const summaryTableBody = document.getElementById('summary-table-body');
    const legendTableBody = document.getElementById('legend-table-body');
    const investmentSummaryDiv = document.getElementById('investment-summary');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    let doughnutChart = null;
    let lineChart = null;
    let data = null;
    let totalPortfolioValue = 0;
    let totalCapitalInvested = 0;
    // Array di colori per i grafici
    const colors = [
        '#3B82F6', '#EF4444', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899', '#6B7280', '#14B8A6', '#6366F1', '#F43F5E',
        '#22D3EE', '#F472B6', '#A3E635', '#FBBF24', '#E879F9', '#F87171', '#34D399', '#818CF8', '#FDE68A', '#FCA5A5',
        '#4ADE80', '#FCD34D', '#C084FC', '#F9A8D4', '#60A5FA', '#FECACA', '#FECF7A', '#A7F3D0', '#DDD6FE', '#FDBA74',
        '#F3F4F6', '#F1F5F9', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6EE7B7', '#F0ABFC', '#FECACA', '#FDE68A', '#FCA5A5',
        '#A7F3D0', '#DDD6FE', '#FDBA74', '#F3F4F6', '#F1F5F9', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6EE7B7', '#F0ABFC'
    ];

    // Creazione elemento per il nome del file
    const fileNameDiv = document.createElement('div');
    fileNameDiv.className = 'file-name';
    fileInput.parentElement.appendChild(fileNameDiv);

    // Funzionalità drag-and-drop
    const dropArea = document.querySelector('.file-drop-area');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    // Previene il comportamento predefinito per gli eventi drag-and-drop
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Aggiunge classe 'drag-active' durante il drag
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => {
            dropArea.classList.add('drag-active');
        }, false);
    });

    // Rimuove classe 'drag-active' quando si esce dall'area
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => {
            dropArea.classList.remove('drag-active');
        }, false);
    });

    // Gestisce il drop del file
    dropArea.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            const event = new Event('change', { bubbles: true });
            fileInput.dispatchEvent(event);
        }
    }, false);

    // Gestisce il caricamento del file
    fileInput.addEventListener('change', handleFileUpload);

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) {
            fileNameDiv.textContent = '';
            return;
        }

        fileNameDiv.textContent = `File selezionato: ${file.name}`;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                data = JSON.parse(e.target.result);
                errorDiv.textContent = '';
                displayData(data);
            } catch (err) {
                errorDiv.textContent = 'Errore nel parsing del JSON: ' + err.message;
                fileNameDiv.textContent = '';
            }
        };
        reader.readAsText(file);
    }

    // Funzione per visualizzare i dati
    function displayData(data) {
        summaryTableBody.innerHTML = '';
        legendTableBody.innerHTML = '';
        investmentSummaryDiv.innerHTML = '';
        categoryFilter.innerHTML = '<option value="">Tutte le categorie</option>';
        totalPortfolioValue = 0;
        totalCapitalInvested = 0;
        const assetData = [];
        const investmentTotals = [];
        let colorIndex = 0;

        // Popola il filtro delle categorie
        const categories = Object.keys(data);
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        // Elabora i dati per tabelle e grafici
        categories.forEach(category => {
            const assets = data[category];
            assets.forEach(asset => {
                const key = `${category}-${asset.nome}`;

                // Calcola patrimonio_investito e patrimonio_ottenuto
                let totalQuantity = 0;
                let patrimonioInvestito = 0;
                asset.capitale_investito.forEach(inv => {
                    totalQuantity += inv.quantita;
                    patrimonioInvestito += inv.quantita * inv.prezzo_unitario;
                });
                
                // Ottiene l'ultimo prezzo da capitale_investito
                const lastInvestment = asset.capitale_investito[asset.capitale_investito.length - 1] || {};
                const lastUnitPrice = lastInvestment.prezzo_unitario || 0;
                
                // Calcolo corretto: ritorno attuale = quantità totale * ultimo prezzo unitario
                const patrimonioOttenuto = totalQuantity * lastUnitPrice;

                totalPortfolioValue += patrimonioOttenuto;
                totalCapitalInvested += patrimonioInvestito;

                // Assegna colore unico
                const color = colors[colorIndex % colors.length];
                colorIndex++;

                // Salva dati per grafici e filtri
                investmentTotals.push({
                    name: asset.nome,
                    category: category,
                    patrimonioInvestito: patrimonioInvestito,
                    patrimonioOttenuto: patrimonioOttenuto,
                    totalQuantity: totalQuantity,
                    key: key,
                    color: color
                });

                assetData.push({
                    name: asset.nome,
                    category: category,
                    isin: asset.ISIN || 'N/A',
                    ticker: asset.TICKER || 'N/A',
                    quantity: totalQuantity,
                    capital: patrimonioInvestito,
                    total: patrimonioOttenuto,
                    key: key,
                    color: color
                });

                // Riga per la tabella di riepilogo
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="p-3">${asset.nome}</td>
                    <td class="p-3">${category}</td>
                    <td class="p-3">${asset.ISIN || 'N/A'}</td>
                    <td class="p-3">${asset.TICKER || 'N/A'}</td>
                    <td class="p-3">${totalQuantity.toFixed(2)}</td>
                    <td class="p-3">${patrimonioInvestito.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</td>
                    <td class="p-3">${patrimonioOttenuto.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</td>
                `;
                summaryTableBody.appendChild(row);

                // Riga per la tabella della legenda
                const rendimento = patrimonioInvestito > 0 ? ((patrimonioOttenuto - patrimonioInvestito) / patrimonioInvestito * 100).toLocaleString('it-IT', { maximumFractionDigits: 2 }) : '0,00';
                const legendRow = document.createElement('tr');
                legendRow.innerHTML = `
                    <td class="p-3">${asset.nome}</td>
                    <td class="p-3">${patrimonioInvestito.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</td>
                    <td class="p-3">${patrimonioOttenuto.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</td>
                    <td class="p-3 ${rendimento >= 0 ? 'text-green-600' : 'text-red-600'}">${rendimento}%</td>
                `;
                legendTableBody.appendChild(legendRow);
            });
        });

        // Mostra le sezioni
        summarySection.classList.remove('hidden');
        doughnutSection.classList.remove('hidden');
        lineChartSection.classList.remove('hidden');

        // Grafico a ciambella con percentuali
        const doughnutData = {
            labels: investmentTotals.map(inv => inv.name),
            datasets: [{
                data: investmentTotals.map(inv => inv.patrimonioOttenuto),
                backgroundColor: investmentTotals.map(inv => inv.color)
            }]
        };

        const doughnutCtx = document.getElementById('doughnut-chart').getContext('2d');
        if (doughnutChart) {
            doughnutChart.destroy();
        }
        doughnutChart = new Chart(doughnutCtx, {
            type: 'doughnut',
            data: doughnutData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        font: { size: 16 }
                    },
                    datalabels: {
                        display: true,
                        formatter: (value, context) => {
                            const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(2) : 0;
                            return `${percentage}%`;
                        },
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 12
                        },
                        textAlign: 'center'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const inv = investmentTotals[context.dataIndex];
                                const ritornoAttuale = inv.patrimonioOttenuto.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
                                const percentage = totalPortfolioValue > 0 ? (inv.patrimonioOttenuto / totalPortfolioValue * 100).toLocaleString('it-IT', { maximumFractionDigits: 2 }) : 0;
                                return [
                                    `Quantità: ${inv.totalQuantity.toFixed(2)}`,
                                    `Ritorno Attuale: ${ritornoAttuale}`,
                                    `Percentuale: ${percentage}%`
                                ];
                            }
                        }
                    }
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: function(chart) {
                    const { width, height, ctx } = chart;
                    ctx.restore();
                    ctx.font = 'bold 18px sans-serif';
                    ctx.textBaseline = 'middle';
                    ctx.textAlign = 'center';
                    const text = totalPortfolioValue.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
                    ctx.fillText(text, width / 2, height / 2);
                    ctx.save();
                }
            }]
        });

        // Riepilogo investimenti
        investmentSummaryDiv.innerHTML = `
            <div class="flex justify-between items-center p-2 bg-gray-50 rounded text-sm">
                <span class="font-medium">Capitale Investito</span>
                <span>${totalCapitalInvested.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
            </div>
            <div class="flex justify-between items-center p-2 bg-gray-50 rounded text-sm mt-2">
                <span class="font-medium">Ritorno Attuale</span>
                <span class="${totalPortfolioValue >= totalCapitalInvested ? 'text-green-600' : 'text-red-600'}">${totalPortfolioValue.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
            </div>
        `;

        // Aggiorna il grafico a linee
        updateLineChart(data);

        // Listener per i filtri
        const handleFilters = () => filterTable(assetData);
        searchInput.removeEventListener('input', handleFilters);
        categoryFilter.removeEventListener('change', handleFilters);
        searchInput.addEventListener('input', handleFilters);
        categoryFilter.addEventListener('change', handleFilters);
    }

    // Funzione per filtrare la tabella
    function filterTable(assetData) {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const rows = summaryTableBody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            const asset = assetData[index];
            const matchesSearch = asset.name.toLowerCase().includes(searchTerm) ||
                                 asset.category.toLowerCase().includes(searchTerm) ||
                                 asset.isin.toLowerCase().includes(searchTerm) ||
                                 asset.ticker.toLowerCase().includes(searchTerm);
            const matchesCategory = !selectedCategory || asset.category === selectedCategory;

            row.style.display = matchesSearch && matchesCategory ? '' : 'none';
        });
    }

    // Funzione per aggiornare il grafico a linee
    function updateLineChart(data) {
        const datasets = [];
        const allMesi = new Set();

        // Raccoglie tutti i mesi da capitale_investito
        Object.keys(data).forEach(category => {
            data[category].forEach(asset => {
                asset.capitale_investito.forEach(inv => allMesi.add(inv.mese));
            });
        });

        const sortedMesi = Array.from(allMesi).sort();

        // Crea dataset per ogni asset basato su prezzo_unitario
        let colorIndex = 0;
        Object.keys(data).forEach(category => {
            data[category].forEach(asset => {
                const key = `${category}-${asset.nome}`;
                const color = colors[colorIndex % colors.length];
                colorIndex++;
                
                const dataMap = {};
                asset.capitale_investito.forEach(inv => {
                    dataMap[inv.mese] = inv.prezzo_unitario;
                });
                
                const valori = sortedMesi.map(mese => dataMap[mese] !== undefined ? dataMap[mese] : null);
                
                datasets.push({
                    label: `${category} - ${asset.nome}`,
                    data: valori,
                    borderColor: color,
                    fill: false,
                    tension: 0.3
                });
            });
        });

        const lineCtx = document.getElementById('line-chart').getContext('2d');
        if (lineChart) {
            lineChart.destroy();
        }
        lineChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: sortedMesi,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            boxWidth: 20,
                            padding: 15,
                            contentTypefont: {
                                size: 12
                            }
                        }
                    },
                    title: { display: false },
                    datalabels: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: value => '€' + value.toLocaleString('it-IT')
                        },
                        title: {
                            display: true,
                            text: 'Prezzo Unitario (€)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Mese'
                        }
                    }
                }
            }
        });
    }

    // Caricamento iniziale dei dati JSON
    try {
        data = jsonData;
        errorDiv.textContent = '';
        displayData(data);
    } catch (err) {
        errorDiv.textContent = 'Errore nel caricamento dei dati JSON: ' + err.message;
    }
});