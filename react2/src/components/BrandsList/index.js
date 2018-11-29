import React, { Component } from 'react';

class BrandsList extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="BrandsList">
                <h2>Brands List</h2>
                {
                    this.props.brands.map((brand,i) =>
                        <div key={i}>{brand}</div>)
                }
            </div>
        )
    }
}

export default BrandsList;