import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import DateUtilities from './../../Utilities/DateUtilities';
import ErrorMessage from './ErrorMessage';
import Information from '../Information/Information';
export default class Modal extends React.Component {
    state = {
        activeTab: 'Information',
    };

    prepareInformation(modelData) {
        const information = [];
        if (modelData.title) {
            information.push({
                title: 'Title',
                value: modelData.title,
                type: 'string',
            });
        }

        if (modelData.duration) {
            information.push({
                title: 'Duration',
                value: this.formatTime(modelData.duration),
                type: 'string',
            });
        }

        if (modelData.status) {
            information.push({
                title: 'Status',
                value: modelData.status,
                type: 'string',
            });
        }

        return information;
    }

    onClose = e => {
        if (this.props.onClose) {
            this.props.onClose(e);
        }

        this.setState({ activeTab: 'Information' });
    };

    formatTime(value) {
        return new DateUtilities().convertMillisecondsToTime(value);
    }

    onTabClick(pageName) {
        this.setState({
            activeTab: pageName,
        });
    }

    render() {
        if (!this.props.isDisplayed) {
            return null;
        }

        return (
            <div key={this.props.modelData.id} className="modal">
                <div className="modal-content">
                    <span
                        className="modal-close"
                        onClick={() => {
                            this.onClose();
                        }}
                    >
                        &times;
                    </span>
                    <button
                        type="button"
                        className={`tablink ${
                            this.state.activeTab === 'Information'
                                ? 'active'
                                : 'inactive'
                        }`}
                        onClick={() => this.onTabClick('Information')}
                    >
                        Information
                    </button>
                    <button
                        type="button"
                        className={`tablink ${
                            this.state.activeTab === 'Error Message'
                                ? 'active'
                                : 'inactive'
                        }`}
                        style={{
                            visibility:
                                this.props?.modelData?.failureMessages &&
                                this.props?.modelData?.failureMessages.length >
                                    0
                                    ? 'visible'
                                    : 'hidden',
                        }}
                        onClick={() => this.onTabClick('Error Message')}
                    >
                        Error Message
                    </button>

                    <div
                        style={{
                            display:
                                this.state.activeTab === 'Information'
                                    ? 'block'
                                    : 'none',
                        }}
                        className="tabcontent"
                    >
                        <Information
                            info={this.prepareInformation(this.props.modelData)}
                        />
                    </div>

                    <div
                        style={{
                            display:
                                this.state.activeTab === 'Error Message'
                                    ? 'block'
                                    : 'none',
                        }}
                        className="tabcontent"
                    >
                        <ErrorMessage
                            messages={this.props?.modelData?.failureMessages}
                        />
                    </div>
                </div>
            </div>
        );
    }

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        isDisplayed: PropTypes.bool.isRequired,
        modelData: PropTypes.any,
    };

    static defaultProps = {
        modelData: null,
    };
}
