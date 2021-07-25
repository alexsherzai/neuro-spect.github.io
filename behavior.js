var att_scores = [40, 50, 60, 70, 80, 90, 100];
var visuo_scores = [11, 6, 3, 9, 10, 8];
var memory_scores = [20, 16, 16, 14, 12, 21];
var speed_scores = [51, 63, 42, 41, 70, 89];

sessionStorage.setItem("logged-in", false);

document.getElementById('attention').setAttribute("data-percent", att_scores[att_scores.length - 1].toString());
document.getElementById('attention').innerHTML = att_scores[att_scores.length - 1].toString();

document.getElementById('visuospatial').setAttribute("data-percent", visuo_scores[visuo_scores.length - 1].toString());
document.getElementById('visuospatial').innerHTML = visuo_scores[visuo_scores.length - 1].toString();

document.getElementById('memory').setAttribute("data-percent", memory_scores[memory_scores.length - 1].toString());
document.getElementById('memory').innerHTML = memory_scores[memory_scores.length - 1].toString();

document.getElementById('speed').setAttribute("data-percent", speed_scores[speed_scores.length - 1].toString());
document.getElementById('speed').innerHTML = speed_scores[speed_scores.length - 1].toString();