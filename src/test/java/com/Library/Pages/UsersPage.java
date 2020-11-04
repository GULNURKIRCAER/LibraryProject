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

    @FindBy(xpath = "//div[@class='portlet-title']/span/a")
    public WebElement addUsersBtn;

    @FindBy(name = "full_name")
    public WebElement fullName;

    @FindBy(name = "password")
    public WebElement password;

    @FindBy(name = "email")
    public WebElement email;

    @FindBy(id = "user_group_id")
    public WebElement userGroup;

    @FindBy(id = "status")
    public WebElement status;

    @FindBy(name = "start_date")
    public WebElement startDate;

    @FindBy(name = "end_date")
    public WebElement endDate;

    @FindBy(name = "address")
    public WebElement address;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement saveBtn;

    @FindBy(xpath = "//button[@type='cancel']")
    public WebElement cancelBtn;

    @FindBy(xpath = "//div[@class='toast-message']")
    public WebElement allert;

    @FindBy(xpath = "(//a[@class='btn btn-primary btn-sm'])[6]")
    public WebElement oneRow;






}