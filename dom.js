const titre = document.getElementsByClassName('title')
console.log(titre, 'recuperation de tous les elements de classe title')
const demo = document.getElementById('demo')
console.log(demo, 'recuperation des elements avce lid demo')
document.getElementById('demo').style.color = 'red';
// demo.innerHTML='<h1>hello</h1>'
// demo.innerText='hello'
function salutation() {
    if (demo.innerHTML === 'Livre pour tous le monde') {
        // innerhtml permet de modifier le contenu du text et meme ecraser la balise 
        // inner text permet de modifier uniquement le contenu de la balise
        demo.innerHTML = 'bonjour tous le monde'
    }
    else {
        demo.innerHTML = 'Livre pour tous le monde'
    }
}
demo.onclick = salutation;
const myselector= document.querySelector('#liste-livre li:nth-child(2).name')
console.log(myselector);
const bouclliste= document.querySelectorAll('#liste-livre li.name')
console.log(bouclliste);

