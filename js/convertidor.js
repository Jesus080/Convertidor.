function convertir() {
    const cm = parseFloat(document.getElementById('cmInput').value);
    const mm = cm * 10;
    const metros = cm / 100;
    const kilometros = cm / 100000;
    const pulgadas = cm / 2.54;
    const pies = cm / 30.48;
    const yardas = cm / 91.44;

    document.getElementById('resultados').innerHTML = `
        <p>Millímetros: ${mm}</p>
        <p>Metros: ${metros}</p>
        <p>Kilómetros: ${kilometros}</p>
        <p>Pulgadas: ${pulgadas}</p>
        <p>Pies: ${pies}</p>
        <p>Yardas: ${yardas}</p>
    `;
}