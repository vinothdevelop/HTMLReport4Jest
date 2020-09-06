import React from 'react';
import { render } from '@testing-library/react';
import Status from './Status';
test('Should contain passed', () => {
    const { container } = render(<Status status="passed"></Status>);
    expect(container.textContent).toEqual('passed');
    expect(container).toMatchSnapshot();
});
test('Should contain failed', () => {
    const { container } = render(<Status status="failed"></Status>);
    expect(container.textContent).toEqual('failed');
    expect(container).toMatchSnapshot();
});
test('Should contain pending', () => {
    const { container } = render(<Status status="pending"></Status>);
    expect(container.textContent).toEqual('pending');
    expect(container).toMatchSnapshot();
});
test('Should contain todo', () => {
    const { container } = render(<Status status="todo"></Status>);
    expect(container.textContent).toEqual('todo');
    expect(container).toMatchSnapshot();
});
