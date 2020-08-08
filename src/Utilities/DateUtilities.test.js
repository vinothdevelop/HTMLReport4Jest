import DateUtilities from './DateUtilities';
describe('Timeformatting', () => {
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
