import React from 'react';
import './Header.css';
import PropTypes from 'prop-types'
export const Header = ({ menuStateChange, heading }) =>
    <div className="App-header">
        <a className="icon" onClick={() => menuStateChange('open')}>&#9776;</a>
        <span>{heading ?? 'Execution Report'}</span>
    </div>
Header.propTypes = {
    menuStateChange: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired
};
export default Header;
