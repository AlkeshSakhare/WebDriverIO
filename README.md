# WebDriverIO QuickStart Guide

Webdriver IO Installation:

1. Java
2. Node.js installation
3. NPM installation
4. open terminal/command line:
    node -v
    npm -v

5. install VSC editor

6. webdriver setup and installation commands:

    npm init

    npm install webdriverio --save-dev

    npm install @wdio/cli

    .\node_modules\.bin\wdio config

    npm install chai --save-dev

    npm install chai-webdriverio --save-dev

    npm install local-runner --save-dev

7.Configuration

    Goto wdio.conf.js file and change 

        line 12 to  path: '/wd/hub',

        line 23 to   './test/**/*.js'

     Goto package.json file and change 

         line 7 to "test": "node_modules/.bin/wdio run wdio.conf.js"

     add below lines
     beforeTest:function(){
        const chai = require('chai')
        const chaiWebdriver = require('chai-webdriverio').default
        chai.use(chaiWebdriver(browser))

        global.assert = chai.assert
        global.should = chai.should
        global.expect = chai.expect
    },    

8.To Run test

    npm test


/*

Tips:

1.Every time new session will be created for each script

2.If there are multiple testcases i.e it() block then same session will be use to execute testcase

*/


/*

Creating Test Suites:

1.Open wdio.config.js and write below specs

`suites:{
  SuiteName:[
    './test/elements/*.js'
  ],
  waits:[
    './test/wait/*.js'
  ]
},`

2.Open package.json file and write below inside scripts object

    "SuiteName": "C:/Users/Alkesh/WebDriverIO/node_modules/.bin/wdio run wdio.conf.js --suite SuiteName"

3.To run specific suite run below command

npm run --suite SuiteName

*/


/*

Generate allure report

1.run command to install allure commandline tool : npm install -g allure-commandline --save-dev

2.run command : npm install @wdio/allure-reporter --save-dev

3.add below code

`reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],`

4.run command : allure generate [allure_output_dir] && allure open
    
Note : to clean existing report use command : allure generate --clean  && allure open

*/