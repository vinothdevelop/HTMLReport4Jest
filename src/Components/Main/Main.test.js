import '@testing-library/jest-dom';
import React from 'react';
import Main from './Main';
import { render } from '@testing-library/react';
test('Should display information', () => {
    const testResults = {
        title: 'All',
        id: '1',
        children: [
            {
                title: 'Test Title',
                duration: 25,
                status: 'passed',
                id: '2',
                failureMessages: [],
            },
        ],
    };

    const information = [{ title: 'Title', value: 'Value', type: 'string' }];
    const { container } = render(
        <Main testResults={testResults} information={information}></Main>,
    );
    expect(container.querySelector('.infoWrapper').childNodes.length).toEqual(
        2,
    );
});

test('Should hide information when null', () => {
    const testResults = {
        title: 'All',
        id: '1',
        children: [
            {
                title: 'Test Title',
                duration: 25,
                status: 'passed',
                id: '2',
                failureMessages: [],
            },
        ],
    };
    const { container } = render(
        <Main testResults={testResults} information={null}></Main>,
    );
    expect(container.querySelector('.infoWrapper').childNodes.length).toEqual(
        0,
    );
});

test('Should hide information when undefined', () => {
    const testResults = {
        title: 'All',
        id: '1',
        children: [
            {
                title: 'Test Title',
                duration: 25,
                status: 'passed',
                id: '2',
                failureMessages: [],
            },
        ],
    };
    const { container } = render(
        <Main testResults={testResults} information={undefined}></Main>,
    );
    expect(container.querySelector('.infoWrapper').childNodes.length).toEqual(
        0,
    );
});
