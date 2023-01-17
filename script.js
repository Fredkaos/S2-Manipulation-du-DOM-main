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
        _prix = 13.50;
    }
    else if (choix === 'poires')
    {
        choix1 = "qtePoires";
        choix2 = "poidsPoires";
        _poids = 12;
        choix3 = "prixPoires";
        _prix = 20.00;
    }
    else
    {
        choix1 = "qtePrunes";
        choix2 = "poidsPrunes";
        _poids = 15;
        choix3 = "prixPrunes";
        _prix = 22.00;
    }
    let qte = document.getElementById(choix1).innerText;
    qte = +qte + 1;
    document.getElementById(choix1).innerText = qte;
    let poid = document.getElementById(choix2).innerText;
    poid = +poid + _poids;
    document.getElementById(choix2).innerText = poid;
}
// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;
