function calculate() {
    const initial = parseFloat(document.getElementById('initial').value) || 0;
    const recurring = parseFloat(document.getElementById('recurring').value) || 0;
    const cadence = parseInt(document.getElementById('cadence').value, 10);
    const rate = parseFloat(document.getElementById('rate').value) / 100 || 0;
    const duration = parseInt(document.getElementById('duration').value, 10);

    // Validazione
    if (isNaN(cadence) || cadence < 1 || cadence > 12 || isNaN(duration) || duration < 1) {
        alert('Inserisci valori validi.');
        return;
    }

    const monthlyRate = rate / 12;
    const totalMonths = duration * 12;

    let balance = initial;
    let totalInvested = initial;

    const labels = [];
    const investedData = [];
    const profitData = [];

    // Non pushiamo più 0 anni all'inizio, iniziamo direttamente dal ciclo

    for (let month = 1; month <= totalMonths; month++) {
        // Interesse mensile
        balance += balance * monthlyRate;

        // Versamento ricorrente
        if (month % cadence === 0) {
            balance += recurring;
            totalInvested += recurring;
        }

        // Salvataggio dati solo a fine anno
        if (month % 12 === 0) {
            const year = month / 12;
            labels.push(year);
            investedData.push(totalInvested);
            profitData.push(balance - totalInvested);
        }
    }

    // Funzione per formattare in stile italiano
    const formatEuro = (value) =>
        value.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Mostra i risultati
    document.getElementById('final').textContent = `Patrimonio finale stimato: €${formatEuro(balance)}`;
    document.getElementById('total').textContent = `Totale investito: €${formatEuro(totalInvested)}`;
    document.getElementById('profit').textContent = `Profitto ottenuto: €${formatEuro(balance - totalInvested)}`;

    // Mostra sezione risultati e grafico
    document.getElementById('output').classList.remove('hidden');

    // Disegna o aggiorna il grafico
    const ctx = document.getElementById('chart').getContext('2d');
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Capitale Investito',
                    data: investedData,
                    backgroundColor: '#3498db',
                    stack: 'stack1'
                },
                {
                    label: 'Profitto',
                    data: profitData,
                    backgroundColor: '#2ecc71',
                    stack: 'stack1'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.dataset.label || '';
                            const value = context.parsed.y;
                            return `${label}: €${value.toLocaleString('it-IT', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    title: { display: true, text: 'Anni', font: { size: 14 } }
                },
                y: {
                    stacked: true,
                    title: { display: true, text: 'Importo (€)', font: { size: 14 } },
                    ticks: {
                        callback: function (value) {
                            return '€' + value.toLocaleString('it-IT', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            });
                        }
                    }
                }
            }
        }
    });
}
