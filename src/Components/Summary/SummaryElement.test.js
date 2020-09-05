import React from 'react';
import SummaryElement from './SummaryElement';
import { render, waitFor } from '@testing-library/react';
test('should contain chart', async () => {
    const data = {
        labels: ['Passed', 'Pending', 'Failed', 'Todo'],
        datasets: [
            {
                data: [1, 2, 3, 4],
                backgroundColor: ['green', 'orange', 'red', 'gray'],
                hoverBackgroundColor: ['green', 'orange', 'red', 'gray'],
            },
        ],
    };
    const { container } = render(
        <SummaryElement data={data} title="Test title"></SummaryElement>,
    );
    const canvas = await waitFor(() => container.firstChild.firstChild);
    const img = canvas.toDataURL();
    const imageData = img.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(imageData, 'base64');
    expect(buf).toMatchSnapshot();
});

test('should contain no data found', () => {
    const data = {
        labels: ['Passed', 'Pending', 'Failed', 'Todo'],
        datasets: [
            {
                data: [0, 0, 0, 0],
                backgroundColor: ['green', 'orange', 'red', 'gray'],
                hoverBackgroundColor: ['green', 'orange', 'red', 'gray'],
            },
        ],
    };
    const { container } = render(
        <SummaryElement data={data} title="Test title"></SummaryElement>,
    );
    expect(container.firstChild).toMatchSnapshot();
});
