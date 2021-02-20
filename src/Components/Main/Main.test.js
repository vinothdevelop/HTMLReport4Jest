import '@testing-library/jest-dom';
import React from 'react';
import Main from './Main';
import { render, fireEvent } from '@testing-library/react';
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
        <Main
            testResults={testResults}
            information={information}
            onStatusChecked={() => {}}
            onExpandToggle={() => {}}
        />,
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
        <Main
            testResults={testResults}
            information={null}
            onStatusChecked={() => {}}
            onExpandToggle={() => {}}
        />,
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
        <Main
            testResults={testResults}
            information={undefined}
            onStatusChecked={() => {}}
            onExpandToggle={() => {}}
        />,
    );
    expect(container.querySelector('.infoWrapper').childNodes.length).toEqual(
        0,
    );
});

describe('Status Checked Event', () => {
    test('Should call function on change', () => {
        const mockCallback = jest.fn();
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
            <Main
                testResults={testResults}
                information={undefined}
                statusList={['passed']}
                onStatusChecked={mockCallback}
                onExpandToggle={() => {}}
            />,
        );

        fireEvent.click(
            container
                .getElementsByClassName('togglesWrapper')[0]
                .getElementsByClassName('filterWrapper')[0]
                .getElementsByTagName('input')[0],
        );
        expect(mockCallback.mock.calls.length).toBe(1);
        expect(mockCallback.mock.calls[0][0].length).toBe(1);
        expect(mockCallback.mock.calls[0][0][0]).toBe('passed');
        fireEvent.click(
            container
                .getElementsByClassName('togglesWrapper')[0]
                .getElementsByClassName('filterWrapper')[0]
                .getElementsByTagName('input')[0],
        );
        expect(mockCallback.mock.calls.length).toBe(2);
        expect(mockCallback.mock.calls[1][0].length).toBe(0);
    });
});
