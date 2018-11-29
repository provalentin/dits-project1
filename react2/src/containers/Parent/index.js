import React, { Component } from 'react';
import BrandsList from "../../components/BrandsList";
import SearchInput from "../../components/SearchInput";
import FilteredBrands from "../../components/FilteredBrands";
import Test from "../Test";
import ToDoList from "../../components/ToDoList";
import List from "../List";

class Parent extends Component {
    state = { brands: ["Apple", "Google", "MSFT"],
                filteredBrands: []};
    changeParentState = (e)=>{
        this.state.brands.map(item=>{
            console.log(item.search(e.target.value));
            const check = item.toLowerCase().search(e.target.value)
            if(check!==-1 && !check && e.target.value){
                const arr = [...this.state.filteredBrands];
                arr.push(item);
                this.setState({
                    filteredBrands: arr

                });
            }
        })
        console.log(e.target.value);
    }
    render() {
        return (
            <div className="Parent">
                <List/>
                <ToDoList/>
                <BrandsList brands={this.state.brands}/>
                <SearchInput changeParentState = {this.changeParentState}/>
                <FilteredBrands brands={this.state.filteredBrands}/>
                <Test>
                    <div>Inner Child</div>
                    <div>Second Inner Child</div>
                </Test>
            </div>
        );
    }
}

export default Parent;