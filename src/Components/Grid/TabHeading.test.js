import '@testing-library/jest-dom';
import React from 'react';
import TabHeading from './TabHeading';
import { render, fireEvent } from '@testing-library/react';
describe('Expand result tab heading test', () => {
    test('Should be expanded when expandResults is true', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                expandResults={true}
                item={item}
                onShowModel={function () {}}
            ></TabHeading>,
        );
        expect(container.firstChild.firstChild.checked).toBe(true);
        expect(
            window.getComputedStyle(container.firstChild.lastChild).display,
        ).toEqual('block');
    });

    test('Should be able to toggle when expandResults is true', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                expandResults={true}
                item={item}
                onShowModel={function () {}}
            ></TabHeading>,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(container.firstChild.firstChild.checked).toBe(false);
    });

    test('Should be collapsed when expandResults is false', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                expandResults={false}
                item={item}
                onShowModel={function () {}}
            ></TabHeading>,
        );
        expect(container.firstChild.firstChild.checked).toBe(false);
    });

    test('Should be able to toggle when expandResults is false', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                expandResults={false}
                item={item}
                onShowModel={function () {}}
            ></TabHeading>,
        );
        fireEvent.click(container.firstChild.firstChild);
        expect(container.firstChild.firstChild.checked).toBe(true);
    });

    test('Should be collapsed when expandResults is null', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                expandResults={null}
                item={item}
                onShowModel={function () {}}
            ></TabHeading>,
        );
        expect(container.firstChild.firstChild.checked).toBe(false);
    });

    test('Should be collapsed when expandResults is undefined', () => {
        const item = {
            title: 'Test parent',
            id: '1',
            children: [{ title: 'Test child', id: '2' }],
        };
        const { container } = render(
            <TabHeading
                expandResults={undefined}
                item={item}
                onShowModel={function () {}}
            ></TabHeading>,
        );
        expect(container.firstChild.firstChild.checked).toBe(false);
    });
});
