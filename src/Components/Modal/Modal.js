import React from "react";
import "./Modal.css";
import PropTypes from 'prop-types'
export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => { this.onClose() }}>&times;</span>
                        <table className="modal-table">
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td colSpan="3">{this.props.modelData.title}</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>{this.props.modelData.duration}</td>
                                    <td>Status</td>
                                    <td>{this.props.modelData.status}</td>
                                </tr>
                                <tr>
                                    <td>Failure Messages</td>
                                    <td colSpan="3">{this.props.modelData.failureMessages}</td>
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
    modelData: PropTypes.any.isRequired
};