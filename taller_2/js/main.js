import { series } from './data.js';
console.log(series);
let seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
function mostrarDatosSeries(listaSeries) {
    let tbodySeries = document.createElement("tbody");
    for (let serie of listaSeries) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
        <td style="color: rgb(100, 129, 211)">${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}
