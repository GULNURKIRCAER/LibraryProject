package com.Library.Pages;

import com.Library.Utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class DashboardPage extends BasePage {

    @FindBy(xpath = "(//span[@class='title'])[2]")
    public WebElement usersBtn;

    @FindBy(xpath = "//div[@class='portlet-title']/h3")
    public  WebElement subTitle;

    public DashboardPage(){
        PageFactory.initElements(Driver.get(), this);
    }



}