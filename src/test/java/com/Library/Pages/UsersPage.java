package com.Library.Pages;

import com.Library.Utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class UsersPage extends BasePage {

    public UsersPage() {
        PageFactory.initElements(Driver.get(), this);
    }




}