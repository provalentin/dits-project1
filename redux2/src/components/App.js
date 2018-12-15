import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css';

import {mapActionToProps, mapStateToProps} from "./redux";

class App extends Component {
    state={
        results:[]
    }

    onIncrement = () => {
        //this.props.counter++;
        this.props.increment();
    }

    onDecrement = () => {
        //this.props.counter--;
        this.props.decrement();
    }

    gettingPokeList = () => {
        this.props.fetchPokemons()
    }

    render() {
        return (
            <p>
                Clicked: {this.props.counter} times
                {' '}
                <button onClick={this.onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={this.onDecrement}>
                    -
                </button>
                {' '}

                <div> Pokemonis:</div>
                <button onClick = {this.gettingPokeList}>FETCH POKEMONS</button>
            </p>
        )
    }
}

export default connect( mapStateToProps, mapActionToProps)(App)