import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Page2 extends Component {
    render() {
        return (
            <div className="Page2">
                Page2
                <Link to={'/page3'}>
                    To page 3
                </Link>
                <Link to={'/'}>
                    To Home
                </Link>
            </div>
        );
    }
}

export default Page2;

