import React, { Component } from 'react';

class FilteredBrands extends Component {

    componentWillMount() {
        console.log("will mount");
    }

    render() {
        console.log("render");
        return (
            <div className="Parent">
                <h2>Filtered Brands</h2>
                {
                    this.props.brands.length
                        ?
                        this.props.brands.map(item=>
                            <div>{item}</div>
                        )
                        : <div>"Empty Block"</div>
                }
            </div>
        );
    }

    componentDidMount() {
        console.log("Did mount");
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log("will receive props");
        console.log(nextProps);
    }

    componentWillUpdate() {
        console.log("will update");
    }

    componentDidUpdate() {
        console.log("did update");
    }

    componentWillUnmount() {
        console.log("will unmount");
    }

    componentShouldUpdate() {
        console.log("should update");
        return true;
    }
}

export default FilteredBrands;