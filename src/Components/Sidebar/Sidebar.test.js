import '@testing-library/jest-dom';
import React from 'react';
import Sidebar from './Sidebar';
import { render } from '@testing-library/react';
describe('Sidebar state test', () => {
    test('Should have open class', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <Sidebar
                isMenuExpanded
                menuState="open"
                treeViewData={item}
                onTreeNodeClick={() => {}}
            />,
        );
        expect(container.firstChild.classList.contains('open')).toBe(true);
    });
    test('Should have close class', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <Sidebar
                isMenuExpanded
                menuState="close"
                treeViewData={item}
                onTreeNodeClick={() => {}}
            />,
        );
        expect(container.firstChild.classList.contains('close')).toBe(true);
    });
});
