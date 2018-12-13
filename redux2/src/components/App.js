import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css';



class App extends Component {
    constructor(props) {
        super(props);
    }

    onIncrement = () => {
        //this.props.counter++;
        this.props.increment();
    }

    onDecrement = () => {
        //this.props.counter--;
        this.props.decrement();
    }

    render() {
        console.log(this.props.counter);

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
            </p>
        )
    }
}



export default connect(
    (state)=>({
        counter: state.counter
    }),
    (dispatch)=>({
        increment: () => {dispatch({type:"INCREMENT"})},
        decrement: () => {dispatch({type:"DECREMENT"})},
    })
)(App)
