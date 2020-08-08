import '@testing-library/jest-dom';
import React from 'react';
import TabContent from './TabContent';
import { render } from '@testing-library/react';
import DateUtilities from './../../Utilities/DateUtilities';
test('Should contain formated time', () => {
    const data = {
        title: 'Test Title',
        duration: 25,
        status: 'passed',
        failureMessages: [],
    };
    const { container } = render(
        <TabContent onShowModel={function () {}} item={data}></TabContent>,
    );
    expect(
        container.textContent.indexOf(
            new DateUtilities().convertMillisecondsToTime(25),
        ),
    ).toBeGreaterThan(0);
});
