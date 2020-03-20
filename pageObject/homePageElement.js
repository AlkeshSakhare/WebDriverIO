class HomePage{

    gethomePageBtn(){return $("//a[text()='Home']")}

    getUserNameTxt(){return $("//*[@name='username']")}

    getPasswordTxt(){return $("//*[@name='password']")}

    getLoginBtn(){ return $("//*[@value='Login']")}
}

module.exports=new HomePage();