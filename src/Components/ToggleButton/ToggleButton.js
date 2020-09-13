import React, { useState } from 'react';
import './ToggleButton.css';
import PropTypes from 'prop-types';
export const ToggleButton = ({ checkedText, onToggle, toggleState }) => {
    const [toggle, setToggle] = useState(toggleState ?? false);
    function toggleButton() {
        if (!toggle) {
            setToggle(true);
            onToggle(true);
        } else {
            setToggle(false);
            onToggle(false);
        }
    }
    return (
        <span className="checkbox-switch">
            <input
                type="checkbox"
                checked={toggle}
                id="toggleButton"
                aria-label="test"
                onChange={() => toggleButton()}
            />
            <label htmlFor="toggleButton" className="checkbox-right">
                {checkedText}
            </label>
        </span>
    );
};
ToggleButton.propTypes = {
    onToggle: PropTypes.func.isRequired,
    checkedText: PropTypes.string,
    toggleState: PropTypes.bool,
};
export default ToggleButton;
