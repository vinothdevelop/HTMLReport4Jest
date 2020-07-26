import DateUtilities from './DateUtilities'
describe('Timeformatting', () => {
    test('Should return empty for null', () => {
        let data = null;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('');
    });

    test('Should return empty for undefined', () => {
        let data = undefined;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('');
    });

    test('Should return empty for invlid integer', () => {
        let data = 'a';
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('');
    });

    test('Should return milliseconds', () => {
        let data = 1;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 ms');
    });

    test('Should return max milliseconds', () => {
        let data = 999;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('999 ms');
    });

    test('Should return seconds', () => {
        let data = 1000;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 secs');
    });

    test('Should return seconds as floor', () => {
        let data = 1999;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 secs');
    });

    test('Should return minutes', () => {
        let data = 60000;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 mins');
    });

    test('Should return minutes and seconds', () => {
        let data = 65000;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 mins : 5 secs');
    });

    test('Should return hours', () => {
        let data = 1000 * 60 * 60;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 hrs');
    });

    test('Should return hours and minutes', () => {
        let data = 1000 * 61 * 60;
        let result = new DateUtilities().convertMillisecondsToTime(data);
        expect(result).toEqual('1 hrs : 1 mins');
    });
})