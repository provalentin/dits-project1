const getPokemons = function (cb) {
    makeRequest({
        url: "https://api.mockaroo.com/api/04d9b930?count=10&key=fbc8d340"
    }, cb)
};

/**
 *
 * @param {number} data.id
 * @param {string} data.first_name
 */
const renderPokemonListItem = function(data) {
    const div = document.createElement('div');
    div.innerHTML = `${data.id}: ${data.first_name}` + ` <a href="${data.id}">${data.first_name} </a>`;
    return div;
};

getPokemons(function (pokemons) {
    const list = document.getElementById('list');
    pokemons.forEach(item => {
        list.appendChild(renderPokemonListItem(item))
    })
});

fetch("https://pokeapi.co/api/v2/pokemon/?limit=10"
    // , {
    // method: "GET",
    // headers: {
    //     "Content-Type": "application-json"
    // }
// }
)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>{});
