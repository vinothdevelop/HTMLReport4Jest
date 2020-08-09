export default class DateUtilities {
    convertMillisecondsToTime(milliSeconds) {
        if (milliSeconds && !isNaN(milliSeconds)) {
            const seconds = milliSeconds / 1000;
            const minutes = seconds / 60;
            const hours = minutes / 60;
            if (Math.floor(hours) > 0) {
                return `${Math.floor(hours)} hrs${
                    Math.floor(minutes % 60)
                        ? ` : ${Math.floor(minutes % 60)} mins`
                        : ''
                }`;
            } else if (Math.floor(minutes) > 0) {
                return `${Math.floor(minutes)} mins${
                    Math.floor(seconds % 60)
                        ? ` : ${Math.floor(seconds % 60)} secs`
                        : ''
                }`;
            } else if (Math.floor(seconds) > 0) {
                return `${Math.floor(seconds)} secs`;
            } else {
                return `${milliSeconds} ms`;
            }
        }
        return '';
    }
    formatDate(date) {
        if (date) {
            date = new Date(date);
            const ye = new Intl.DateTimeFormat('en', {
                year: 'numeric',
            }).format(date);
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(
                date,
            );
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
                date,
            );
            return `${da}-${mo}-${ye}`;
        } else {
            return '';
        }
    }

    formatDateTime(date) {
        if (date) {
            date = new Date(date);
            const time = new Intl.DateTimeFormat('en', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
            }).format(date);
            return `${this.formatDate(date)} ${time}`;
        } else {
            return '';
        }
    }
}
