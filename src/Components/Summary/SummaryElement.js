import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SummaryElement.css';
import { Pie, Chart } from 'react-chartjs-2';

export default class SummaryElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromProps(props, state) {
        Chart.pluginService.register({
            afterRender: function (chart) {
                let noData = true;
                chart.data.datasets[0].data.forEach(element => {
                    if (element > 0) {
                        noData = false;
                    }
                });
                if (noData) {
                    const ctx = chart.chart.ctx;
                    const width = chart.chart.width;
                    const height = chart.chart.height;
                    chart.clear();

                    ctx.save();
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.font = "16px normal 'Helvetica Nueue'";
                    ctx.fillText('No data to display', width / 2, height / 2);
                    ctx.restore();
                }
            },
        });

        return null;
    }

    render() {
        return (
            <div className="card">
                <Pie
                    data={this.state.data}
                    options={{
                        title: {
                            display: true,
                            text: this.props.title,
                            fontSize: 25,
                        },
                        legend: {
                            position: 'left',
                        },
                    }}
                />
            </div>
        );
    }
}
SummaryElement.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
};
