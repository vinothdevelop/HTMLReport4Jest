import React from 'react';
import { render } from '@testing-library/react';
import Status from './Status';
test('Should contain passed', () => {
    const { container } = render(<Status status="passed" />);
    expect(container.textContent).toEqual('passed');
    expect(container).toMatchSnapshot();
});
test('Should contain failed', () => {
    const { container } = render(<Status status="failed" />);
    expect(container.textContent).toEqual('failed');
    expect(container).toMatchSnapshot();
});
test('Should contain pending', () => {
    const { container } = render(<Status status="pending" />);
    expect(container.textContent).toEqual('pending');
    expect(container).toMatchSnapshot();
});
test('Should contain todo', () => {
    const { container } = render(<Status status="todo" />);
    expect(container.textContent).toEqual('todo');
    expect(container).toMatchSnapshot();
});
