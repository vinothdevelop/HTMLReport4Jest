/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
export const Header = ({ menuStateChange, heading, hideMenu }) => (
    <div className="App-header">
        {hideMenu ? (
            <Fragment></Fragment>
        ) : (
                <a className="icon" onClick={() => menuStateChange('open')}>
                    &#9776;
                </a>
            )}
        <span>{heading ?? 'Execution Report'}</span>
    </div>
);
Header.propTypes = {
    menuStateChange: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    hideMenu: PropTypes.bool,
};
export default Header;
