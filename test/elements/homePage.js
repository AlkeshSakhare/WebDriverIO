const home=require('../../pageObject/homePageElement');

describe('Login to Application',() => {
    it('Login to application testcase', () =>{
        browser.maximizeWindow(); // maximize window
        browser.url('/'); // open  baseUrl Set in wdio.conf.js
        home.printAllNavigationElement();
        console.log('home.UserNameTxt.isDisplayed()',home.UserNameTxt.isDisplayed())
        home.UserNameTxt.clearValue();
        home.UserNameTxt.setValue('aabb1122');
        home.PasswordTxt.clearValue();
        home.PasswordTxt.setValue('aabb1122');
        home.LoginBtn.click();

    });
});