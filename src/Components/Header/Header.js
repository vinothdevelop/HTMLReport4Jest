import React from 'react';
import './Header.css';
import PropTypes from 'prop-types'
export const Header = ({ menuStateChange }) =>
    <div className="App-header">
        <a className="icon" onClick={() => menuStateChange('open')}>&#9776;</a>
        <span>Execution Report</span>
    </div>
Header.propTypes = {
    menuStateChange: PropTypes.func.isRequired
};
export default Header;
