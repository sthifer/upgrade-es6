// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nameUsers = users.map((user) => {
    return user.name;
})

console.log(nameUsers);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const listaNames =  users2.map((user) => {
    if (user.name.charAt(0)=== 'A'){
        user.name = "Anacleto"
        return user.name;
    }
    return user.name;
})

console.log(listaNames);
// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const listaCities =  cities.map((city) => {
    if (city.isVisited === true){
        return city.name+' (Visitado)';
    }
    return city.name;
})

console.log(listaCities);