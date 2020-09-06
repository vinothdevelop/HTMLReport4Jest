import React from 'react';
import ErrorMessage from './ErrorMessage';
import { render } from '@testing-library/react';
test('Should return empty message when null', () => {
    const { container } = render(<ErrorMessage messages={null}></ErrorMessage>);
    expect(container.firstChild.firstChild).toBeEmptyDOMElement();
});
test('Should return empty message when empty', () => {
    const { container } = render(<ErrorMessage messages={[]}></ErrorMessage>);
    expect(container.firstChild.firstChild).toBeEmptyDOMElement();
});

test('Should return html message', () => {
    const messages = ['\x1b[30mblack\x1b[37mwhite'];
    const { container } = render(
        <ErrorMessage messages={messages}></ErrorMessage>,
    );
    expect(container.firstChild.firstChild.firstChild.textContent).toEqual(
        'blackwhite',
    );
    expect(container).toMatchSnapshot();
});

test('Should return html message as string', () => {
    const messages = '\x1b[30mblack\x1b[37mwhite';
    const { container } = render(
        <ErrorMessage messages={messages}></ErrorMessage>,
    );
    expect(container.firstChild.firstChild.firstChild.textContent).toEqual(
        'blackwhite',
    );
    expect(container).toMatchSnapshot();
});
