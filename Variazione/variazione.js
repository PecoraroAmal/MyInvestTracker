function calcolaVariazione() {
    const iniziale = parseFloat(document.getElementById('initialValue').value);
    const nuovo = parseFloat(document.getElementById('newValue').value);
    const unitaOutput = document.getElementById('unitaOutput');
    const percentualeOutput = document.getElementById('percentualeOutput');

    // Reset del contenuto e delle classi
    unitaOutput.textContent = '';
    percentualeOutput.textContent = '';
    unitaOutput.className = '';
    percentualeOutput.className = '';

    // Validazione input
    if (isNaN(iniziale) || isNaN(nuovo)) {
        unitaOutput.textContent = "Inserisci valori validi.";
        return;
    }

    if (iniziale === 0) {
        unitaOutput.textContent = "Il valore iniziale non può essere zero.";
        return;
    }

    // Calcolo della variazione
    const differenzaUnita = nuovo - iniziale;
    const differenzaPercentuale = (differenzaUnita / iniziale) * 100;

    // Imposta il testo degli output
    unitaOutput.textContent = `Differenza in unità: ${differenzaUnita.toFixed(2)}`;
    percentualeOutput.textContent = `Differenza in percentuale: ${differenzaPercentuale.toFixed(2)}%`;

    // Applica le classi in base al segno
    if (differenzaUnita < 0) {
        unitaOutput.classList.add('negativo');
    } else if (differenzaUnita > 0) {
        unitaOutput.classList.add('positivo');
    }

    if (differenzaPercentuale < 0) {
        percentualeOutput.classList.add('negativo');
    } else if (differenzaPercentuale > 0) {
        percentualeOutput.classList.add('positivo');
    }
}