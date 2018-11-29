import React, { Component } from 'react';

class Test extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Test">
                {this.props.children}
            </div>
        );
    }
}

export default Test;