// Créer un formulaire en affichant les saisies récupérées sur la même page.
// Champ à prévoir(contexte : produit) : titre, couleur,
// taille(x, xxl, m), poids, prix, description.

//Recuperation des éléments
let form = document.querySelector('#form');
let titre = document.querySelector('#titre');
let couleur = document.querySelector('#couleur');
let tailles = document.querySelector('#tailleId');
let poids = document.querySelector("#poids");
let prix = document.querySelector('#prix');
let descr = document.querySelector('#descr') 
let submit = document.querySelector('#submit');

/*************************************** */

submit.addEventListener('click', (e) => {
    e.preventDefault()
    content.className = 'fonddescription'
    
    // content.innerHTML = '<table><tr><th> Titre : ' + '</th><th>' + titre.value + '</th></tr >' 
    //     + '<tr><th> Couleur : </th><th>' + couleur.value + '</th><th>' +
    //     + '</tr ><tr><th>'+'Poids:' + '</th>'+'<th>'+poids.value+'</th></tr>' 
        
    
    content.innerHTML = "<table>" +
        "<tr><th>informations</th><th>données</th></tr>" +
        "<tr><td>titre</td><td>" + titre.value + "</td></tr>" +
        "<tr><td>taille</td><td>" + tailles.options[tailles.selectedIndex].value + "</td></tr>" + "<tr><td>couleur</td><td>" + couleur.value + "</td></tr>" +
        "<tr><td>prix</td><td>" + prix.value + "</td></tr>" +
        "<tr><td>poids</td><td>" + poids.value + "</td></tr>" +
        "<tr><td>description</td><td>" + descr.value + "</td></tr>" +
        "<table>";
})


