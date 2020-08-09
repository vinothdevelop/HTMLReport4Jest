import DateUtilities from './DateUtilities';
describe('Time formatting', () => {
    test('Should return empty for null', () => {
        const data = null;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('');
    });

    test('Should return empty for undefined', () => {
        const data = undefined;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('');
    });

    test('Should return empty for invlid integer', () => {
        const data = 'a';
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('');
    });

    test('Should return milliseconds', () => {
        const data = 1;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 ms');
    });

    test('Should return max milliseconds', () => {
        const data = 999;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('999 ms');
    });

    test('Should return seconds', () => {
        const data = 1000;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 secs');
    });

    test('Should return seconds as floor', () => {
        const data = 1999;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 secs');
    });

    test('Should return minutes', () => {
        const data = 60000;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 mins');
    });

    test('Should return minutes and seconds', () => {
        const data = 65000;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 mins : 5 secs');
    });

    test('Should return hours', () => {
        const data = 1000 * 60 * 60;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 hrs');
    });

    test('Should return hours and minutes', () => {
        const data = 1000 * 61 * 60;
        const result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 hrs : 1 mins');
    });
});

describe('Date formatting', () => {
    test('format date string', () => {
        const data = '2020-08-08T12:04:14.473Z';
        expect(new DateUtilities().formatDate(data)).toEqual('08-Aug-2020');
    });
    test('return empty string when null', () => {
        expect(new DateUtilities().formatDate(null)).toEqual('');
    });
    test('return empty string when undefined', () => {
        expect(new DateUtilities().formatDate(undefined)).toEqual('');
    });
});

describe('DateTime formatting', () => {
    test('format datetime string', () => {
        const data = new Date(2012, 11, 20, 3, 0, 0, 200);
        expect(new DateUtilities().formatDateTime(data)).toEqual(
            '20-Dec-2012 03:00:00',
        );
    });
    test('format datetime from timestamp string', () => {
        const data = 1596888263337;
        expect(new DateUtilities().formatDateTime(data)).toEqual(
            '08-Aug-2020 17:34:23',
        );
    });
    test('return empty string when null', () => {
        expect(new DateUtilities().formatDateTime(null)).toEqual('');
    });
    test('return empty string when undefined', () => {
        expect(new DateUtilities().formatDateTime(undefined)).toEqual('');
    });
});
