import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Page3 extends Component {
    render() {
        return (
            <div className="Page3">
                Page3
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

export default Page3;

