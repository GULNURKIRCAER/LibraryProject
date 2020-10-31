package com.Library.Pages;

import com.Library.Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }
    @FindBy(xpath="//label[@for='inputEmail']")
    public WebElement inputEmail;

    @FindBy(xpath="//label[@for='inputPassword']")
    public WebElement password;

    @FindBy(xpath= "//button[@type='submit']")
    public WebElement submit;

    public void login(String userNameStr, String passwordStr) {
        this.inputEmail.sendKeys(userNameStr);
        this.password.sendKeys(passwordStr);
        this.submit.click();

    }
}