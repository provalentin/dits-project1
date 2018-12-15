import fetchWrap from "../../api";


export const fetchPokemonsList = () => {
    return async (dispatch,getState) => {
        // console.log("Current state: ")
        // console.log(getState())
        const {results,status} =  await fetchWrap.get("pokemon")
        dispatch({type:"SET_POKEMONS_LIST", payload: results})
        return status
    }
}