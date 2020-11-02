package com.Library.Pages;

import com.Library.Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id="inputEmail")
    public WebElement inputEmail;

    @FindBy(id="inputPassword")
    public WebElement password;

    @FindBy(xpath= "//button[@type='submit']")
    public WebElement submit;

    @FindBy(id = "inputEmail-error")
    public WebElement alert;

    public void login(String userNameStr, String passwordStr) {
        this.inputEmail.sendKeys(userNameStr);
        this.password.sendKeys(passwordStr);
        this.submit.click();

    }
}