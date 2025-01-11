function exemplvar() {
    var x = 5;
    if (true) {
        // le var ses valeurs sont ecrasables et reafectés
        var x = 10;
        console.log('affichage de x alinterier de la condition', x)
    }
    console.log("affiche de x a lexterieur de la condition", x)

}
exemplvar();
function exempllet() {
    // let scop bloc:travaille par bloc ce qui est entre {}cest un bloc il l'execute seule  sans le bloc qui est interieur
    let y = 5;
    if (true) {

        let y = 10;
        console.log('affichage de x alinterier de la condition', y)
    }
    console.log("affiche de x a lexterieur de la condition", y)

}
exemplvar();
function exemplconst() {
    const z = 5;
    z = 10;
    console.log('affichage de z alinterier de la condition', z)

}
exempllet();