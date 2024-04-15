import { series } from './data';
import { Serie } from './serie';

console.log(series);

let seriesTable: HTMLElement = document.getElementById("series")!;

mostrarDatosSeries(series);

function mostrarDatosSeries(listaSeries: Serie[]): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");

    let totalTemporadas: number = 0;

    for (let serie of listaSeries) {
    let trElement: HTMLElement = document.createElement("tr");

    trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
    <td><a href="${serie.website}" style="color: rgb(100, 129, 211)">${serie.nombre}</a></td>
    <td>${serie.canal}</td>
    <td>${serie.temporadas}</td>`;

    tbodySeries.appendChild(trElement);

    totalTemporadas += serie.temporadas;
}

    seriesTable.appendChild(tbodySeries);

    let promedioTemporadas: number = totalTemporadas / listaSeries.length;
    let promedioElement: HTMLElement = document.getElementById("promedio")!;
    promedioElement.children[0].textContent = `Promedio de temporadas: ${promedioTemporadas.toFixed(2)}`;

    seriesTable.appendChild(promedioElement);
}
