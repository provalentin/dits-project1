import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Page3 extends Component {
    render() {
        return (
            <div className = "Page3">
                <h1>Page3</h1>
                <Link to={'/'}>
                    <h2> to home page </h2>
                </Link>
                <Link to={'/page2'}>
                    <h2> to page 2 </h2>
                </Link>
            </div>
        )
    }
}
export default Page3;