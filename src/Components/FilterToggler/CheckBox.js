import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';
export const CheckBox = props => {
    return (
        <label className="checkboxLabel">
            {props.value}
            <input
                key={props.value}
                type="checkbox"
                checked={props.isChecked}
                value={props.value}
                id={props.value}
                onChange={props.handleCheck}
            />
            <span className="checkboxSpan" />
        </label>
    );
};

CheckBox.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    isChecked: PropTypes.bool,
    value: PropTypes.string.isRequired,
};
export default CheckBox;
