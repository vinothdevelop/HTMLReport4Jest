### Jest Html reporter

Jest reporter to generate hierarchical html report

### Installation

---

```shell
  npm install htmlreport4jest --save-dev
```

### Usage

---

Configure Jest to process the test results by adding the following entry to the Jest config (jest.config.json or jest.config.js):

```json
"jest": {
  ...,
  "reporters": [
    "default",
    "htmlreport4jest"
  ],
  ...
}

```

Executing the jest tests with above configuration will create a `result.html` under temp folder inside the project root. Test report can be configured with below options.

### Available Options

The options below are specific to the reporter.

| Option Name   | Type    | Default                  | Description                                                                                                                                                                                                                                                                                          |
| :------------ | :------ | :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`  | string  | 'Jest Html Report'                       | Title of the generated html report                                                                                                                                                                                                                                                                                |
| `reportPath`    | string  | './temp/' | Generated html file will be stored under the given path                                                                                                                                                                                                                                |
| `reportFileName`      | string | 'result.html'                    | Name of the html report to be generated     |
| `hideMenu`      | boolen | false                    | Hides filter menu                                                         

#### example add config options

```json
...,
"reporters": [
  "default",
  ["htmlreport4jest", {
    "title": 'Jest Html Report',
    "reportPath": './temp/',
    "reportFileName": 'result.html',
    "hideMenu": true
  }]
]
```