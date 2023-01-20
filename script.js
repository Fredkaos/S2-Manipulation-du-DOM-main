const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}
function ajouter(choix)
{
    if (choix === 'pommes')
    {
        choix1 = "qtePommes";
        choix2 = "poidsPommes";
        _poids = 10;
        choix3 = "prixPommes";
        _prix = parseFloat(document.getElementById("tarifpommes").innerText);
    }
    else if (choix === 'poires')
    {
        choix1 = "qtePoires";
        choix2 = "poidsPoires";
        _poids = 12;
        choix3 = "prixPoires";
        _prix = parseFloat(document.getElementById("tarifpoires").innerText);
    }
    else
    {
        choix1 = "qtePrunes";
        choix2 = "poidsPrunes";
        _poids = 15;
        choix3 = "prixPrunes";
        _prix = parseFloat(document.getElementById("tarifprunes").innerText);
    }
    let qte = document.getElementById(choix1).innerText;
    qte = +qte + 1;
    document.getElementById(choix1).innerText = qte;
    let poid = document.getElementById(choix2).innerText;
    poid = +poid + _poids;
    document.getElementById(choix2).innerText = poid;
    let prix = document.getElementById(choix3).innerText;
    prix = +prix + _prix;
    document.getElementById(choix3).innerText = prix.toFixed(2);

    let totalqte = +document.getElementById("qtePommes").innerText +
        +document.getElementById("qtePoires").innerText +
        +document.getElementById("qtePrunes").innerText;
    document.getElementById("qteTotal").innerText = totalqte;
    let totalpoid = +document.getElementById("poidsPommes").innerText +
        +document.getElementById("poidsPoires").innerText +
        +document.getElementById("poidsPrunes").innerText;
    document.getElementById("poidsTotal").innerText = totalpoid;
    let totalprix = +document.getElementById("prixPommes").innerText +
        +document.getElementById("prixPoires").innerText +
        +document.getElementById("prixPrunes").innerText;
    document.getElementById("prixTotal").innerText = totalprix.toFixed(2);
}

