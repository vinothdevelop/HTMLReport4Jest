import React, { Fragment, useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
export const Header = ({ menuStateChange, heading, hideMenu }) => {
    const [toggle, setToggle] = useState(false);
    function toggleButton() {
        if (!toggle) {
            setToggle(true);
            menuStateChange('open');
        } else {
            setToggle(false);
            menuStateChange('close');
        }
    }
    return (
        <div className="App-header">
            {hideMenu ? (
                <Fragment></Fragment>
            ) : (
                <Fragment>
                    <input
                        type="checkbox"
                        id="menu"
                        onClick={() => toggleButton()}
                    />
                    <label htmlFor="menu" className="icon">
                        <div className="menu"></div>
                    </label>
                </Fragment>
            )}
            <span>{heading ?? 'Execution Report'}</span>
        </div>
    );
};
Header.propTypes = {
    menuStateChange: PropTypes.func.isRequired,
    heading: PropTypes.string,
    hideMenu: PropTypes.bool,
};
export default Header;
