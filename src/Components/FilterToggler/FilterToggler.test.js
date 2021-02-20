import React from 'react';
import FilterToggler from './FilterToggler';
import { render, fireEvent } from '@testing-library/react';
test('Should contain one checkbox', () => {
    const { container } = render(
        <FilterToggler statusList={['passed']} onStatusChecked={() => {}} />,
    );
    expect(container.getElementsByTagName('input').length).toEqual(1);
});

test('Should contain two checkbox', () => {
    const { container } = render(
        <FilterToggler
            statusList={['passed', 'failed']}
            onStatusChecked={() => {}}
        />,
    );
    expect(container.getElementsByTagName('input').length).toEqual(2);
});

test('Should call function on change', () => {
    const mockCallback = jest.fn();
    const { container } = render(
        <FilterToggler
            statusList={['passed', 'failed']}
            onStatusChecked={mockCallback}
        />,
    );
    fireEvent.click(container.firstChild.getElementsByTagName('input')[0]);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0].length).toBe(1);
    expect(mockCallback.mock.calls[0][0][0]).toBe('passed');
    fireEvent.click(container.firstChild.getElementsByTagName('input')[0]);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[1][0].length).toBe(0);
});
