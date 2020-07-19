import '@testing-library/jest-dom'
import React from 'react';
import Modal from './Modal';
import { render } from '@testing-library/react';
test('Return null when Modal is not set to show', () => {
    const { container } = render(
        <Modal show={false} onClose={function () { }} modelData={function () { }}>
        </Modal>
    );
    expect(container.firstChild).toBeNull();
});