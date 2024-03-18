function ajoutTitre(movies, id) {
    let myH2 = document.getElementById("titre");
    myH2.textContent = movies[id - 1].titre;
}
function ajoutResume(movies, id) {
    let myResume = document.getElementById("resume");
    myResume.textContent = movies[id - 1].resume + " (Sources : Wikipédia, Allociné ou SensCritique)";
}
function ajoutInfos(movies, id) {
    let myInfos = document.getElementById("infos");
    myInfos.textContent = "Réalisé par " + movies[id - 1].real + " en " + movies[id - 1].year
}

function ajoutLien(movies, id) {
    let myLien = document.getElementById("lien")
    myLien.textContent = "Voir le film en streaming";
    myLien.href = movies[id - 1].stream;
}

export { ajoutTitre, ajoutResume, ajoutInfos, ajoutLien }