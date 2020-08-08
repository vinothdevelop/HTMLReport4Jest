const path = require('path');
const fs = require('fs');
function mkdirs(dirpath) {
    if (!fs.existsSync(path.dirname(dirpath))) {
        mkdirs(path.dirname(dirpath));
    }
    fs.mkdirSync(dirpath);
}

class HTMLReport4Jest {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        results.endTime = Date.now();
        results.reporterOptions = { ...this._options };
        const data = JSON.stringify(results);
        const templatePath = path.resolve(__dirname, './dist/index.html');
        const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
        results.reporterOptions.title = results.reporterOptions.title
            ? results.reporterOptions.title
            : 'Jest Html Report';
        const outputContext = htmlTemplate
            .replace('%RESULTDATA%', data)
            .replace('%TITLE%', results.reporterOptions.title);
        const publicPath = results.reporterOptions.reportPath
            ? results.reporterOptions.reportPath
            : './temp/';
        const filename = results.reporterOptions.reportFileName
            ? results.reporterOptions.reportFileName
            : 'result.html';
        fs.existsSync(publicPath) === false && publicPath && mkdirs(publicPath);
        fs.writeFileSync(publicPath.concat(filename), outputContext, 'utf-8');
    }
}

module.exports = HTMLReport4Jest;
