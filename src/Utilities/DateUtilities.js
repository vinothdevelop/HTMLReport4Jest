/* eslint-disable prettier/prettier */
export default class DateUtilities {
    convertMillisecondsToTime(milliSeconds) {
        if (milliSeconds && !isNaN(milliSeconds)) {
            const seconds = milliSeconds / 1000;
            const minutes = seconds / 60;
            const hours = minutes / 60;
            if (Math.floor(hours) > 0) {
                return `${Math.floor(hours)} hrs${
                    Math.floor(minutes % 60)
                        ? ` : ${ Math.floor(minutes % 60) } mins`
                        : ''
                    }`;
            }else if (Math.floor(minutes) > 0) {
                return `${Math.floor(minutes)} mins${
                    Math.floor(seconds % 60)
                        ? ` : ${ Math.floor(seconds % 60) } secs`
                        : ''
                    }`;
            }else if (Math.floor(seconds) > 0) {
                return `${Math.floor(seconds) } secs`;
            }else 
                {return `${milliSeconds } ms`;}
            
        } 
            return '';
        
    }
}
