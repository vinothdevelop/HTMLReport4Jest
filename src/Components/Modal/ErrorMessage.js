import React from 'react';
import './ErrorMessage.css';
import PropTypes from 'prop-types';
const Convert = require('ansi-to-html');
const convert = new Convert({
    fg: '#000',
    bg: '#fff',
    newline: false,
});
export default class ErrorMessage extends React.Component {
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    createMarkup(text) {
        let result = '';
        if (text && text.length > 0) {
            for (let i = 0; i < text.length; i++) {
                result = result.concat(
                    convert.toHtml(this.escapeHtml(text[i])),
                );
            }
        }
        return { __html: result };
    }
    render() {
        return (
            <div>
                <pre
                    className="errorContent"
                    dangerouslySetInnerHTML={this.createMarkup(
                        this.props.messages,
                    )}
                />
            </div>
        );
    }
}
ErrorMessage.propTypes = {
    messages: PropTypes.array,
};
