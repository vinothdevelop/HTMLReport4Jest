import React from 'react';
import CheckBox from './CheckBox';
import { render, fireEvent } from '@testing-library/react';
test('Should contain value', () => {
    const { container } = render(
        <CheckBox value="Test" isChecked={false} handleCheck={() => {}} />,
    );
    expect(container).toHaveTextContent('Test');
});

test('Should not be checked', () => {
    const { container } = render(
        <CheckBox value="Test" isChecked={false} handleCheck={() => {}} />,
    );
    expect(container.firstChild.lastChild.previousSibling).not.toBeChecked();
});

test('Should be checked', () => {
    const { container } = render(
        <CheckBox isChecked value="Test" handleCheck={() => {}} />,
    );
    expect(container.firstChild.lastChild.previousSibling).toBeChecked();
});

test('Should call function on change', () => {
    const mockCallback = jest.fn();
    const { container } = render(
        <CheckBox value="Test" isChecked={false} handleCheck={mockCallback} />,
    );
    fireEvent.click(container.firstChild);
    expect(mockCallback.mock.calls.length).toBe(1);
    fireEvent.click(container.firstChild);
    expect(mockCallback.mock.calls.length).toBe(2);
});
