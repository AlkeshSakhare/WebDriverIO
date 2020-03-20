class HomePage{

    get homePageBtn(){return $("//a[text()='Home']")}

    get UserNameTxt(){return $("//*[@name='username']")}

    get PasswordTxt(){return $("//*[@name='password']")}

    get LoginBtn(){ return $("//*[@value='Login']")}
}

module.exports=new HomePage();