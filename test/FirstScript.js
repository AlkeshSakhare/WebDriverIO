describe("First Script", function(){

    it("first test",function(){
        browser.url('/');
        const pageTitle=browser.getTitle();
        console.log('browser.getTitle for 1st testcase in firstScript: ',pageTitle);
    });
});
