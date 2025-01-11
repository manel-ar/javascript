const MyArray=['banane','pomme','cerise','orange']
console.log(MyArray)
const cars=new Array('bmw','mercedes','range rover')
console.log(cars);
console.log(MyArray.toString());
console.log(MyArray.join('/'));
let voiture=cars.pop()
console.log(voiture)
console.log(cars)
let fruit=MyArray.push('kiwi')
console.log(fruit)
console.log(MyArray)
MyArray[0]='papay'
console.log(MyArray)
const boys=['lamine','karim','samir']
const girls=['mika','lina','imene']
const mychildrens= boys.concat(girls)
console.log(mychildrens)
// exercice:un tableau parfum pus  afficher le tableau supprmier dernier Element,ajouter un parfum a la fin , a la position 2 afficher un autre parfum 
const parfum=['zara','linterdit','black opium']
console.log(parfum)
let parf=parfum.pop()
console.log(parf)
parfum[2]='berberry'
console.log(parfum)
let parff=parfum.push('la vie est belle')
console.log(parfum)
// pop supprimer dernier element et push modifier/ajouter le dernier element dans le tableau
const fruitt=['banane','pomme','mangue']
fruitt.splice(2,0,'citron','kiwi')
console.log(fruitt);
//  a la position 2 je vais rien supprimer et j'ajout deux autres elements
fruitt.splice(3,2)
// a la position 3 je supprime les 2 elements apres 
console.log(fruitt)
const x=['banane','orange','citron','pomme','mangue']
console.log(x)
//  apartir de la position 2 on extrait le reste du tableau
const slicex= x.slice(2)
console.log(slicex)
const y=['banane','orange','citron','pomme','mangue']
const slicey= y.slice(1,3)
console.log(slicey)
//  a la position 1 je vais extraire les 3-1 elements apres 