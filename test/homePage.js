const home=require('../pageObject/homePageElement');
const data=require("../testData/data")
describe('Login to Application',() => {
    it('Login to application testcase', () =>{
        browser.maximizeWindow(); // maximize window
        browser.url('/'); // open  baseUrl Set in wdio.conf.js
        browser.pause(5000);
        home.printAllNavigationElement();
        console.log('home.UserNameTxt.isDisplayed()',home.UserNameTxt.isDisplayed())
        home.UserNameTxt.clearValue();
        home.UserNameTxt.setValue(data.username);
        home.PasswordTxt.clearValue();
        home.PasswordTxt.setValue(data.password);
        home.LoginBtn.click();

    });
});