class HomePage{

    get homePageBtn(){return $("//a[text()='Home']")}

    get UserNameTxt(){return $("//*[@name='username']")}

    get PasswordTxt(){return $("//*[@name='password']")}

    get LoginBtn(){ return $("//*[@value='Login']")}

    get allNavigationElements(){
        return $$("//*[@id='navbar-collapse']/ul/li/a");
    }

    printAllNavigationElement(){
      return  this.allNavigationElements.filter(element =>{
          console.log(element.getText());
      });
    }
}

module.exports=new HomePage();