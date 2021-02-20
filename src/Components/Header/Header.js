import React, { Fragment, useState } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
export const Header = ({ menuStateChange, heading, isMenuHidden }) => {
    const [toggle, setToggle] = useState(false);
    function toggleButton() {
        if (toggle) {
            setToggle(false);
            menuStateChange('close');
        } else {
            setToggle(true);
            menuStateChange('open');
        }
    }

    return (
        <div className="App-header">
            {isMenuHidden ? (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <></>
            ) : (
                <>
                    <input
                        type="checkbox"
                        id="menu"
                        onClick={() => toggleButton()}
                    />
                    <label htmlFor="menu" className="icon">
                        <div className="menu" />
                    </label>
                </>
            )}
            <span>{heading ?? 'Execution Report'}</span>
        </div>
    );
};

Header.propTypes = {
    menuStateChange: PropTypes.func.isRequired,
    heading: PropTypes.string,
    isMenuHidden: PropTypes.bool,
};

Header.defaultProps = {
    isMenuHidden: false,
};
export default Header;
