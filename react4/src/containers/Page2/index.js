import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Page2 extends Component {
    render() {
        return (
            <div className = "Page2">
                <h2>Page2</h2>
                <Link to={'/'}>
                    <h2> to home page </h2>
                </Link>
                <Link to={'/page3'}>
                    <h2> to page 3 </h2>
                </Link>
            </div>
        )
    }
}

export default Page2;