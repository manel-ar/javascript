const baseurl = 'https://jsonplaceholder.typicode.com/'
// const getusers = () => {
//     fetch(`${baseurl}/users`)
//         .then(
//             (response) => {
//                 return response.json()
//             }
//         )
//         .then(
//             (data) => {
//                 console.log(data)
//             }
//         )

//         .catch(error =>
//             console.log(error));


// }
// getusers()
const getusers = async () => {
    try {


        const respons = await fetch(`${baseurl}/users`)
        const data = await respons.json()
        console.log(data)
    } catch {
        error => console.log(error)
    }

}
getusers()
// recuperer les commentaires de l'api avecc async await 
// pour fusionner les branches :git merge main