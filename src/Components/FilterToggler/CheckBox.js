import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';
export const CheckBox = props => {
    return (
        <label className="checkboxLabel">
            {props.value}
            <input
                key={props.value}
                onChange={props.handleCheck}
                type="checkbox"
                checked={props.isChecked}
                value={props.value}
                id={props.value}
            />
            <span className="checkboxSpan"></span>
        </label>
    );
};
CheckBox.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    isChecked: PropTypes.bool,
    value: PropTypes.string.isRequired,
};
export default CheckBox;
