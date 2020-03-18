# WebDriverIO

Webdriver IO Installation:

1. Java
2. Node.js installation
3. NPM installation
4. open terminal/command line:
node -v
npm -v

4. install VSC editor

5. webdriver setup and installation commands:
  npm init
  npm install webdriverio --save-dev
  npm install @wdio/cli
  .\node_modules\.bin\wdio config
  npm install chai --save-dev
  npm install chai-webdriverio --save-dev
  npm install local-runner --save-dev

6.Configuration
    Goto wdio.conf.js file and change 
    line 12 to  path: '/wd/hub',
    line 23 to   './test/**/*.js'

   Goto package.json file and change 
   line 7 to "test": "node_modules/.bin/wdio run wdio.conf.js"

7.To Run test
  npm test


/*
Tips:

1.Every time new session will be created for each script

2.If there are multiple testcases i.e it() block then same session will be use to execute testcase
*/