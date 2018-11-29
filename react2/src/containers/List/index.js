import React, { Component } from 'react';
import Item from "../../components/Item"

class List extends Component {
    state = {
        list: [
            {id:1, text:"to do 1"},
            {id:2, text:"to do 2"},
            {id:3, text:"to do 3"},
            {id:4, text:"to do 4"}
        ]
    }
    updateItemList = (text, id) => {
        const {list} = this.state;
        const newList = [...list];
        newList.map(item =>( item.id  === id) && (item.text = text) )
        this.setState({list:newList});
        console.log(newList);
    }

    deleteItem = id => {
        const {list} = this.state;
        const newList = list.filter(item => item.id !== id && item)
        this.setState({list: newList});
        console.log(newList);
    }

    render() {
        const {state : {list}, updateItemList } = this
        console.log(this.props);
        //const {list} = this.state;
        return (
            <div className="List">
                {
                    list.map(item => <Item item={item} key={item.id}/>)
                }
            </div>
        );
    }
}

export default List;