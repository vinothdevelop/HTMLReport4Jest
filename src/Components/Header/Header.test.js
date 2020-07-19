import '@testing-library/jest-dom'
import React from 'react';
import Header from './Header';
import { render, fireEvent } from '@testing-library/react';

describe('Header title test', () => {
    test('Should contain text sent', () => {
        const { container } = render(
            <Header heading="Test Heading" menuStateChange={function () { }}>
            </Header>
        );
        expect(container.firstChild.lastChild.textContent).toEqual("Test Heading");
    });

    test('Should contain default text if set to undeined', () => {
        const { container } = render(
            <Header heading={undefined} menuStateChange={function () { }}>
            </Header>
        );
        expect(container.firstChild.lastChild.textContent).toEqual("Execution Report");
    });

    test('Should contain default text if set to null', () => {
        const { container } = render(
            <Header heading={null} menuStateChange={function () { }}>
            </Header>
        );
        expect(container.firstChild.lastChild.textContent).toEqual("Execution Report");
    });
})

test('Should match snapshot', () => {
    const { container } = render(
        <Header heading="Test Heading" menuStateChange={function () { }}>
        </Header>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('Should fire event on click', () => {
    const FakeFun = jest.fn();
    const { container } = render(
        <Header heading="Test Heading" menuStateChange={FakeFun}>
        </Header>
    );
    fireEvent.click(container.firstChild.firstChild)
    expect(FakeFun).toHaveBeenCalled();
});