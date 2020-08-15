import '@testing-library/jest-dom';
import React from 'react';
import ParentNode from './ParentNode';
import { render, fireEvent, screen } from '@testing-library/react';
describe('Expand Menu Test', () => {
    test('Should contain expanded class when expandMenuItems is true', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                expandMenuItems={true}
                item={item}
                onTreeNodeClick={function () {}}
            ></ParentNode>,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(true);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(true);
    });

    test('Should be collapsible when expandMenuItems is true', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                expandMenuItems={true}
                item={item}
                onTreeNodeClick={function () {}}
            ></ParentNode>,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should not contain expanded class when expandMenuItems is false', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                expandMenuItems={false}
                item={item}
                onTreeNodeClick={function () {}}
            ></ParentNode>,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should not contain expanded class when expandMenuItems is undefined', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                expandMenuItems={undefined}
                item={item}
                onTreeNodeClick={function () {}}
            ></ParentNode>,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should not contain expanded class when expandMenuItems is null', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                expandMenuItems={null}
                item={item}
                onTreeNodeClick={function () {}}
            ></ParentNode>,
        );
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(false);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(false);
    });

    test('Should be expandable when expandMenuItems is false', () => {
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        const { container } = render(
            <ParentNode
                expandMenuItems={false}
                item={item}
                onTreeNodeClick={function () {}}
            ></ParentNode>,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(
            container.firstChild.firstChild.classList.contains('caret-down'),
        ).toBe(true);
        expect(
            container.firstChild.lastChild.classList.contains('active'),
        ).toBe(true);
    });

    test('Should be expandable when expandMenuItems is false', () => {
        const mockCallback = jest.fn();
        const item = {
            title: 'Menu parent',
            children: [{ title: 'Menu child' }],
        };
        render(
            <ParentNode
                expandMenuItems={false}
                item={item}
                onTreeNodeClick={mockCallback}
            ></ParentNode>,
        );
        fireEvent.click(screen.getByText('Menu parent'));
        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenNthCalledWith(1, item);
    });
});
