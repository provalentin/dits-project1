import {fetchPokemonsList} from '../store/actions'

export const mapStateToProps = (state) => ({
    counter: state.counter
})

export const mapActionToProps = (dispatch) => ({
    increment: () => {dispatch({type:"INCREMENT"})},
    decrement: () => {dispatch({type:"DECREMENT"})},
    fetchPokemons: () => dispatch(fetchPokemonsList())
})