import '@testing-library/jest-dom';
import React from 'react';
import Information from './Information';
import { render } from '@testing-library/react';
test('Return empty when array is empty', () => {
    const info = [];
    const { container } = render(<Information info={info} />);
    expect(container.firstChild.childNodes.length).toEqual(0);
});
test('Should have title and value', () => {
    const info = [{ title: 'Title', value: 'Value' }];
    const { container } = render(<Information info={info} />);
    expect(container.firstChild.childNodes.length).toEqual(2);
    expect(container.firstChild.childNodes[0].textContent).toEqual('Title');
    expect(container.firstChild.childNodes[1].textContent).toEqual('Value');
});
test('Should have formatted date', () => {
    const info = [
        { title: 'Title', value: '2020-08-08T12:04:14.473Z', type: 'date' },
    ];
    const { container } = render(<Information info={info} />);
    expect(container.firstChild.childNodes.length).toEqual(2);
    expect(container.firstChild.childNodes[1].textContent).toEqual(
        '08-Aug-2020',
    );
});
test('Should have formatted datetime', () => {
    const info = [
        {
            title: 'Title',
            value: new Date(2012, 11, 20, 3, 0, 0, 200),
            type: 'datetime',
        },
    ];
    const { container } = render(<Information info={info} />);
    expect(container.firstChild.childNodes.length).toEqual(2);
    expect(container.firstChild.childNodes[1].textContent).toEqual(
        '20-Dec-2012 03:00:00',
    );
});
describe('boolean', () => {
    test('Should have yes', () => {
        const info = [{ title: 'Title', value: true, type: 'boolean' }];
        const { container } = render(<Information info={info} />);
        expect(container.firstChild.childNodes.length).toEqual(2);
        expect(container.firstChild.childNodes[1].textContent).toEqual('Yes');
    });

    test('Should have no when false', () => {
        const info = [{ title: 'Title', value: false, type: 'boolean' }];
        const { container } = render(<Information info={info} />);
        expect(container.firstChild.childNodes.length).toEqual(2);
        expect(container.firstChild.childNodes[1].textContent).toEqual('No');
    });

    test('Should have no when empty', () => {
        const info = [{ title: 'Title', value: '', type: 'boolean' }];
        const { container } = render(<Information info={info} />);
        expect(container.firstChild.childNodes.length).toEqual(2);
        expect(container.firstChild.childNodes[1].textContent).toEqual('No');
    });
});
