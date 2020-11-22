const path = require('path');
const fs = require('fs');
import { AggregatedResult, TestResult } from '@jest/test-result';
import { Circus, Config } from '@jest/types';
import { Test, Context, ReporterOnStartOptions } from '@jest/reporters';
function mkdirs(dirpath: string) {
    if (!fs.existsSync(path.dirname(dirpath))) {
        mkdirs(path.dirname(dirpath));
    }
    fs.mkdirSync(dirpath);
}

type HtmlReporter4JestOptions = {
    title?: string;
    reportPath?: string;
    reportFileName?: string;
};

declare module '@jest/test-result' {
    interface AggregatedResult {
        endTime: number;
        reporterOptions: HtmlReporter4JestOptions & Config.DefaultOptions;
    }
}

class HTMLReport4Jest {
    private _globalConfig: Config.GlobalConfig;
    private _options: Config.DefaultOptions;

    constructor(
        globalConfig: Config.GlobalConfig,
        options: Config.DefaultOptions,
    ) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(context: Set<Context>, result: AggregatedResult) {
        console.log(context);
        result.endTime = Date.now();
        result.reporterOptions = { ...this._options };
        const data = JSON.stringify(result);
        const templatePath = path.resolve(__dirname, './dist/index.html');
        const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
        result.reporterOptions.title = result.reporterOptions.title
            ? result.reporterOptions.title
            : 'Jest Html Report';
        const outputContext = htmlTemplate
            .replace('%RESULTDATA%', data)
            .replace('%TITLE%', result.reporterOptions.title);
        const publicPath = result.reporterOptions.reportPath
            ? result.reporterOptions.reportPath
            : './temp/';
        const filename = result.reporterOptions.reportFileName
            ? result.reporterOptions.reportFileName
            : 'result.html';
        fs.existsSync(publicPath) === false && publicPath && mkdirs(publicPath);
        fs.writeFileSync(publicPath.concat(filename), outputContext, 'utf-8');
    }
}

module.exports = HTMLReport4Jest;
