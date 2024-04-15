import { series } from './data.js';
console.log(series);
var seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
function mostrarDatosSeries(listaSeries) {
    var tbodySeries = document.createElement("tbody");
    var totalTemporadas = 0;
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var serie = listaSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(serie.id, "</td>\n    <td><a href=\"").concat(serie.website, "\" style=\"color: rgb(100, 129, 211)\">").concat(serie.nombre, "</a></td>\n    <td>").concat(serie.canal, "</td>\n    <td>").concat(serie.temporadas, "</td>");
        tbodySeries.appendChild(trElement);
        totalTemporadas += serie.temporadas;
    }
    seriesTable.appendChild(tbodySeries);
    var promedioTemporadas = totalTemporadas / listaSeries.length;
    var promedioElement = document.getElementById("promedio");
    promedioElement.children[0].textContent = "Promedio de temporadas: ".concat(promedioTemporadas.toFixed(2));
    seriesTable.appendChild(promedioElement);
}
