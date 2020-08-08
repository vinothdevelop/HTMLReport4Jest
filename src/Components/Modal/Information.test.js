import '@testing-library/jest-dom';
import React from 'react';
import Information from './Information';
import { render } from '@testing-library/react';
test('Return empty when array is empty', () => {
    const info = [];
    const { container } = render(<Information info={info}></Information>);
    expect(container.firstChild.childNodes.length).toEqual(0);
});
test('Return empty when object is passed', () => {
    const info = {};
    const { container } = render(<Information info={info}></Information>);
    expect(container.firstChild.childNodes.length).toEqual(0);
});
test('Should have title and value', () => {
    const info = [{ title: 'Title', value: 'Value' }];
    const { container } = render(<Information info={info}></Information>);
    expect(container.firstChild.childNodes.length).toEqual(2);
    expect(container.firstChild.childNodes[0].textContent).toEqual('Title');
    expect(container.firstChild.childNodes[1].textContent).toEqual('Value');
});
test('Should have formatted date', () => {
    const info = [
        { title: 'Title', value: '2020-08-08T12:04:14.473Z', type: 'date' },
    ];
    const { container } = render(<Information info={info}></Information>);
    expect(container.firstChild.childNodes.length).toEqual(2);
    expect(container.firstChild.childNodes[1].textContent).toEqual(
        '08-Aug-2020',
    );
});