import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class LinkList extends Component {
    render() {
        return <div className='nav-bar'>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/'>
                <span>Home</span>
            </NavLink>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/genre'>
                <span>Genre</span>
            </NavLink>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/reviews'>
                <span>Reviews</span>
            </NavLink>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/quest-location'>
                <span>Quest location</span>
            </NavLink>
        </div>
    }
}

export default LinkList;