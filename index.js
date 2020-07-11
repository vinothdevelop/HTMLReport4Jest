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
        console.log(data);
    }
}

module.exports = HTMLReport4Jest;