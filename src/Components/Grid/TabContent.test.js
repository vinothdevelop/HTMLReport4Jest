import React from 'react';
import TabContent from './TabContent';
import { render, fireEvent } from '@testing-library/react';
import DateUtilities from './../../Utilities/DateUtilities';
test('Should contain formated time', () => {
    const data = {
        title: 'Test Title',
        duration: 25,
        status: 'passed',
        failureMessages: [],
    };
    const { container } = render(
        <TabContent item={data} onShowModel={() => {}} />,
    );
    expect(
        container.textContent.indexOf(
            new DateUtilities().convertMillisecondsToTime(25),
        ),
    ).toBeGreaterThan(0);
});
test('Should call function on icon click', () => {
    const FakeFun = jest.fn();
    const data = {
        title: 'Test Title',
        duration: 25,
        status: 'passed',
        failureMessages: [],
    };
    const { container } = render(
        <TabContent item={data} onShowModel={FakeFun} />,
    );
    fireEvent.click(container.lastChild.firstChild);
    expect(FakeFun).toHaveBeenCalledTimes(1);
    expect(FakeFun).toHaveBeenNthCalledWith(1, data);
});
