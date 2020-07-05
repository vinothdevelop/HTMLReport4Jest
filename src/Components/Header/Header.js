import React from 'react';
import './Header.css';

export const Header = ({ menuStateChange }) =>
    <div className="App-header">
        <a className="icon" onClick={() => menuStateChange('open')}>&#9776;</a>
        <span>Execution Report</span>
    </div>

export default Header;
