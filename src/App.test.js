import '@testing-library/jest-dom';
import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
const data = require('./data/nested.json');
const sampleData = require('./data/sample.json');
describe('Page Information', () => {
    test('Should contain minimal information', () => {
        window.resultData = data;
        const { container } = render(<App></App>);
        expect(
            container.querySelector('.infoWrapper').childNodes.length,
        ).toEqual(4);
    });
    test('Should contain project level information', () => {
        const infoData = { ...data };
        const reporterOptions = {
            information: [{ title: 'Title', value: 'Value', type: 'string' }],
        };
        infoData.reporterOptions = reporterOptions;
        window.resultData = infoData;
        const { container } = render(<App></App>);
        expect(
            container.querySelector('.infoWrapper').childNodes.length,
        ).toEqual(6);
    });
    test('Should contain project level information', () => {
        const infoData = { ...sampleData };
        window.resultData = infoData;
        const { container } = render(<App></App>);
        expect(
            container.querySelector('.infoWrapper').childNodes.length,
        ).toEqual(8);
    });
    test('Should contain open handle count', () => {
        const infoData = { ...sampleData };
        infoData.openHandles = ['handle'];
        window.resultData = infoData;
        const { container } = render(<App></App>);
        expect(
            container.querySelector('.infoWrapper').childNodes.length,
        ).toEqual(10);
    });
});
