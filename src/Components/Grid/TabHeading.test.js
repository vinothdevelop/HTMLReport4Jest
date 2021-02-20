import '@testing-library/jest-dom';
import React from 'react';
import TabHeading from './TabHeading';
import { render, fireEvent } from '@testing-library/react';
describe('Expand result tab heading test', () => {
    test('Should be expanded when isResultExpanded is true', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading isResultExpanded item={item} onShowModel={() => {}} />,
        );
        expect(container.firstChild.firstChild.checked).toBe(true);
        expect(
            window.getComputedStyle(container.firstChild.lastChild).display,
        ).toEqual('block');
    });

    test('Should be able to toggle when isResultExpanded is true', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading isResultExpanded item={item} onShowModel={() => {}} />,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(container.firstChild.firstChild.checked).toBe(false);
    });

    test('Should be collapsed when isResultExpanded is false', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                isResultExpanded={false}
                item={item}
                onShowModel={() => {}}
            />,
        );
        expect(container.firstChild.firstChild.checked).toBe(false);
    });

    test('Should be able to toggle when isResultExpanded is false', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                isResultExpanded={false}
                item={item}
                onShowModel={() => {}}
            />,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(container.firstChild.firstChild.checked).toBe(true);
    });

    test('Should be collapsed when isResultExpanded is null', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                isResultExpanded={null}
                item={item}
                onShowModel={() => {}}
            />,
        );
        expect(container.firstChild.firstChild.checked).toBe(false);
    });

    test('Should be collapsed when isResultExpanded is undefined', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                isResultExpanded={undefined}
                item={item}
                onShowModel={() => {}}
            />,
        );
        expect(container.firstChild.firstChild.checked).toBe(false);
    });
});
