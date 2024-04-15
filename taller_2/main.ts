import { series } from './data';
import { Serie } from './serie';

console.log(series);

let seriesTable: HTMLElement = document.getElementById("series")!;

mostrarDatosSeries(series);

function mostrarDatosSeries(listaSeries: Serie[]): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");

    for (let serie of listaSeries) {
        let trElement: HTMLElement = document.createElement("tr");

        trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
        <td style="color: rgb(100, 129, 211)">${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;

        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}