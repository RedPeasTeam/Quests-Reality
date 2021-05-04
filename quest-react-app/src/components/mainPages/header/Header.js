import React, {Component} from 'react';
import LinkList from './LinkList';

class Header extends Component {
    render() {
        return <div className='header-wrapper'>
            <span className='logo'>Quest reality</span>
            <LinkList />
        </div>
    }
}

export default Header;