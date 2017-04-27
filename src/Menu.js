import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
    return(
        <ul className="nav nav-pills">
            <li>
                <Link activeClassName="active" to="/">Tracks</Link>
            </li>
            <li>
                <Link activeClassName="active" to="/about">About</Link>
            </li>
        </ul>
    );
}

export default Menu;