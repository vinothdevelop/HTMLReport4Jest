import React from 'react';
import ToggleButton from './ToggleButton';
import { render, fireEvent } from '@testing-library/react';
describe('Toggle button dom', () => {
    test('Should contain intial value', () => {
        const { container } = render(
            <ToggleButton
                checkedText="Expand"
                onToggle={function () {}}
                toggleState={false}
            ></ToggleButton>,
        );
        expect(container.querySelector('label')).toHaveTextContent('Expand');
        expect(container.querySelector('input')).not.toBeChecked();
    });
});
describe('Toggle button fire event', () => {
    test('Should toggle', () => {
        const { container } = render(
            <ToggleButton
                checkedText="Expand"
                onToggle={function () {}}
                toggleState={false}
            ></ToggleButton>,
        );
        fireEvent.click(container.querySelector('input'));
        expect(container.querySelector('input')).toBeChecked();
        fireEvent.click(container.querySelector('input'));
        expect(container.querySelector('input')).not.toBeChecked();
    });

    test('Should toggle', () => {
        const mockCallback = jest.fn();
        const { container } = render(
            <ToggleButton
                checkedText="Expand"
                onToggle={mockCallback}
                toggleState={false}
            ></ToggleButton>,
        );
        fireEvent.click(container.querySelector('input'));
        expect(mockCallback).toBeCalledTimes(1);
        expect(mockCallback).toBeCalledWith(true);
        mockCallback.mockReset();
        fireEvent.click(container.querySelector('input'));
        expect(mockCallback).toBeCalledTimes(1);
        expect(mockCallback).toBeCalledWith(false);
    });
});
