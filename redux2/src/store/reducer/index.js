import {combineReducers} from 'redux'
import counter from "./counter"
import pokemonList from "./pokemonList"

const rootReducer = combineReducers({
    counter,
    pokemonList
})

export default rootReducer