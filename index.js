const path = require('path')
const fs = require('fs')
function mkdirs(dirpath) {
    if (!fs.existsSync(path.dirname(dirpath))) {
        mkdirs(path.dirname(dirpath))
    }
    fs.mkdirSync(dirpath)
}

class HTMLReport4Jest {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }

    onRunComplete(contexts, results) {
        results.config = this._globalConfig
        results.endTime = Date.now()
        results._reporterOptions = { ...this._options }
        const data = JSON.stringify(results);
        const templatePath = path.resolve(__dirname, './dist/index.html');
        const htmlTemplate = fs.readFileSync(templatePath, 'utf-8')
        const title = 'Jest Html Report'
        const outPutContext = htmlTemplate
            .replace('$resultData', data)
            .replace('$title', title)
        const publicPath = './temp/'
        const filename = 'result.html'
        fs.existsSync(publicPath) === false && publicPath && mkdirs(publicPath)
        fs.writeFileSync(publicPath.concat(filename), outPutContext, 'utf-8')
    }
}

module.exports = HTMLReport4Jest;