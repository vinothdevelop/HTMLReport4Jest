/* eslint-disable max-len */
import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import DateUtilities from './../../Utilities/DateUtilities';
const Convert = require('ansi-to-html');
const convert = new Convert();
export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    replaceStyle(text) {
        const search = 'style="color:#FFF"';
        const replaceWith = 'style="color:#000"';
        return text.split(search).join(replaceWith);
    }
    createMarkup(text) {
        let result = '';
        if (text && text.length > 0) {
            for (let i = 0; i < text.length; i++) {
                result = result.concat(
                    this.replaceStyle(convert.toHtml(this.escapeHtml(text[i]))),
                );
            }
        }
        return { __html: result };
    }

    formatTime(value) {
        return new DateUtilities().convertMillisecondsToTime(value);
    }
    render() {
        if (!this.props.show) {
            return null;
        } else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <span
                            className="modal-close"
                            onClick={() => {
                                this.onClose();
                            }}
                        >
                            &times;
                        </span>
                        <table className="modal-table">
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td colSpan="3">
                                        {this.props.modelData.title}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>
                                        {this.formatTime(
                                            this.props.modelData.duration,
                                        )}
                                    </td>
                                    <td>Status</td>
                                    <td>{this.props.modelData.status}</td>
                                </tr>
                                <tr>
                                    <td>Failure Messages</td>
                                    <td colSpan="3">
                                        <pre
                                            dangerouslySetInnerHTML={this.createMarkup(
                                                this.props?.modelData
                                                    ?.failureMessages,
                                            )}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    modelData: PropTypes.any.isRequired,
};
