import '@testing-library/jest-dom';
import React from 'react';
import Information from './Information';
import { render } from '@testing-library/react';
test('Return empty when array is empty', () => {
    const info = [];
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
