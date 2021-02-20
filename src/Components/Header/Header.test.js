import '@testing-library/jest-dom';
import React from 'react';
import Header from './Header';
import { render, fireEvent } from '@testing-library/react';
describe('Header title test', () => {
    test('Should contain text sent', () => {
        const { container } = render(
            <Header heading="Test Heading" menuStateChange={() => {}} />,
        );
        expect(container.firstChild.lastChild.textContent).toEqual(
            'Test Heading',
        );
    });

    test('Should contain default text if set to undefined', () => {
        const { container } = render(
            <Header heading={undefined} menuStateChange={() => {}} />,
        );
        expect(container.firstChild.lastChild.textContent).toEqual(
            'Execution Report',
        );
    });

    test('Should contain default text if set to null', () => {
        const { container } = render(
            <Header heading={null} menuStateChange={() => {}} />,
        );
        expect(container.firstChild.lastChild.textContent).toEqual(
            'Execution Report',
        );
    });
});

describe('Header menu test', () => {
    test('Should hide menu', () => {
        const { container } = render(
            <Header isMenuHidden heading={null} menuStateChange={() => {}} />,
        );
        expect(container.getElementsByClassName('menu').length).toEqual(0);
    });
    test('Should not hide menu', () => {
        const { container } = render(
            <Header
                isMenuHidden={false}
                heading={null}
                menuStateChange={() => {}}
            />,
        );
        expect(container.getElementsByClassName('menu').length).toEqual(1);
    });
    test('Should not hide menu on null', () => {
        const { container } = render(
            <Header heading={null} menuStateChange={() => {}} />,
        );
        expect(container.getElementsByClassName('menu').length).toEqual(1);
    });

    test('Should hide menu should match snapshot', () => {
        const { container } = render(
            <Header isMenuHidden heading={null} menuStateChange={() => {}} />,
        );
        expect(container).toMatchSnapshot();
    });
});

test('Should match snapshot', () => {
    const { container } = render(
        <Header heading="Test Heading" menuStateChange={() => {}} />,
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('Should fire event on click', () => {
    const FakeFun = jest.fn();
    const { container } = render(
        <Header heading="Test Heading" menuStateChange={FakeFun} />,
    );
    fireEvent.click(container.firstChild.firstChild);
    fireEvent.click(container.firstChild.firstChild);
    expect(FakeFun).toHaveBeenCalledTimes(2);
    expect(FakeFun).toHaveBeenNthCalledWith(1, 'open');
    expect(FakeFun).toHaveBeenNthCalledWith(2, 'close');
});
