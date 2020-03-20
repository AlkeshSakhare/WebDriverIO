describe("First Script", function(){

    it("first test",function(){
        browser.maximizeWindow(); // maximize window
        browser.url('/'); // open  baseUrl Set in wdio.conf.js 
        const pageTitle=browser.getTitle(); // get page title
        console.log('browser.getTitle for 1st testcase in firstScript: ',pageTitle);
        var elementText=browser.findElement('name', 'username');
        console.log('Element Get Text', browser.getElementText(elementText));

    });
});
