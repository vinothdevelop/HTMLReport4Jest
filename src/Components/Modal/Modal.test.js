import '@testing-library/jest-dom'
import React from 'react';
import Modal from './Modal';
import { render } from '@testing-library/react';
import DateUtilities from './../../Utilities/DateUtilities'
test('Return null when Modal is not set to show', () => {
    const { container } = render(
        <Modal show={false} onClose={function () { }} modelData={{}}>
        </Modal>
    );
    expect(container.firstChild).toBeNull();
});
test('Should contain formated time', () => {
    let data = { title: 'Test Title', duration: 25, status: 'passed', failureMessages: [] };
    const { container } = render(
        <Modal show={true} onClose={function () { }} modelData={data}>
        </Modal>
    );
    expect(container.firstChild.firstChild.textContent.indexOf(new DateUtilities().convertMillisecondsToTime(25))).toBeGreaterThan(0);
});