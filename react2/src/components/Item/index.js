import React, { Component } from 'react';

class Item extends Component {
    state = {
        refactorActive: false
    }
    render() {
        const {refactorActive} = this.state;
        return (
            <div className="Item">
                Item
                <button onClick = {()=> this.setState({refactorActive: !refactorActive})}>Delete</button>
                <p>Text</p>
                <button>{refactorActive ? "Refactor" : "Hide input"}</button>
                {refactorActive && <input ref={input=>{this.input = input}} type="text"/>}
                {refactorActive && <button> Save</button>}
            </div>
        );
    }
}

export default Item;