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
        choix3 ="prixPommes";
    }
    else if (choix === 'poires')
    {
        let qte = document.getElementById("qtePoires").innerText;
        qte = +qte + 1;
        document.getElementById("qtePoires").innerText = qte;
    }
    else
    {
        let qte = document.getElementById("qtePrunes").innerText;
        qte = +qte + 1;
        document.getElementById("qtePrunes").innerText = qte;
    }
    let qte = document.getElementById(choix1).innerText;
    qte = +qte + 1;
    document.getElementById(choix1).innerText = qte;
}
// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;
