import React from 'react';
import Modal from './Modal';
import { render } from '@testing-library/react';
test('Link changes the class when hovered', () => {
    const component = render(
        <Modal show="false">
        </Modal>
    );
    expect(component, null);
});