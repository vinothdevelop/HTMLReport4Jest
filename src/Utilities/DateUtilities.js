export default class DateUtilities {
    constructor() { }
    convertMillisecondsToTime(milliSeconds) {
        if (milliSeconds && !isNaN(milliSeconds)) {
            let seconds = (milliSeconds / 1000);
            let minutes = (seconds / 60);
            let hours = (minutes / 60);
            if (Math.floor(hours) > 0)
                return Math.floor(hours) + " hrs" + (Math.floor(minutes % 60) ? " : " + Math.floor(minutes % 60) + " mins" : '');
            else if (Math.floor(minutes) > 0)
                return Math.floor(minutes) + " mins" + (Math.floor(seconds % 60) ? " : " + Math.floor(seconds % 60) + " secs" : '');
            else if (Math.floor(seconds) > 0)
                return Math.floor(seconds) + " secs";
            else
                return milliSeconds + " ms"
        }
        else
            return '';
    }
}
