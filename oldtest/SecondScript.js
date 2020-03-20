describe("Second Script",()=>{
    it('first test case',()=>{
        browser.url('http://yahoo.com');
        console.log('browser.getTitle for 1st testcase in secondScript: ', browser.getTitle());      
    });

    it('second test case',()=>{
        browser.url('http://Google.co.in');
        console.log('browser.getTitle for 2nd testcase in secondScript: ', browser.getTitle());
      
    });
});