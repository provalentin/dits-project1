export default (state=[],{type, payload})=>{
    switch (type) {
        case "SET_POKEMONS_LIST":
            return [...payload];
        default: return state;
    }

}