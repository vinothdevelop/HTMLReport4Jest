import '@testing-library/jest-dom';
import React from 'react';
import ParentNode from './ParentNode';
import { render, fireEvent, screen } from '@testing-library/react';
describe('Expand Menu Test', () => {
    test('Should contain expanded class when isMenuExpanded is true', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                isMenuExpanded
                item={item}
                onTreeNodeClick={() => {}}
            />,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(true);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(true);
    });

    test('Should be collapsible when isMenuExpanded is true', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                isMenuExpanded
                item={item}
                onTreeNodeClick={() => {}}
            />,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should not contain expanded class when isMenuExpanded is false', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                isMenuExpanded={false}
                item={item}
                onTreeNodeClick={() => {}}
            />,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should not contain expanded class when isMenuExpanded is undefined', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                isMenuExpanded={undefined}
                item={item}
                onTreeNodeClick={() => {}}
            />,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should not contain expanded class when isMenuExpanded is null', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                isMenuExpanded={null}
                item={item}
                onTreeNodeClick={() => {}}
            />,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should be expandable when isMenuExpanded is false', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                isMenuExpanded={false}
                item={item}
                onTreeNodeClick={() => {}}
            />,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(true);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(true);
    });

    test('Should be expandable when isMenuExpanded is false', () => {
        const mockCallback = jest.fn();
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        render(
            <ParentNode
                isMenuExpanded={false}
                item={item}
                onTreeNodeClick={mockCallback}
            />,
        );
        fireEvent.click(screen.getByText('Menu parent'));
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenNthCalledWith(1, item);
    });
});
