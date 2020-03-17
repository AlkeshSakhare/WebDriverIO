describe("First Script", function(){

    it("first test",function(){
        browser.url('/');
        const pageTitle=browser.getTitle();
        console.log('browser.getTitle',pageTitle);
        browser.pause(5000);
    });
});
