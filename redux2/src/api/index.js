//
// function getPokemonList() {
//     let promise = fetch("https://pokeapi.co/api/v2/pokemon/")
//         .then(data => data.json())
//
//     return promise
//
// }
// export default getPokemonList


const fetchWrapper = () => {
    const fetching = (api,method, body) => {


        const init  = {
            method,
            mode: 'cors',
            header: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        }
        method !== 'GET' && (init.body = body)
        return fetch(`https://pokeapi.co/api/v2/${api}/`, init)
            .then(res => res.json())
            .then(res => res)
    }




    return {
        get: (api) => fetching(api, "GET"),
        post: (api, body) =>
            fetching(api, "POST", body),
        patch: (api, body) =>
            fetching(api, "PATCH", body)
    }
}

const fetchWrap = fetchWrapper();

export default fetchWrap