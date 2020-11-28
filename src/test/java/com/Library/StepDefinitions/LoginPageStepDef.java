package com.Library.StepDefinitions;

import com.Library.Pages.DashboardPage;
import com.Library.Pages.LoginPage;
import com.Library.Utilities.BrowserUtils;
import com.Library.Utilities.ConfigurationReader;
import com.Library.Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.junit.Ignore;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import java.util.Map;

public class LoginPageStepDef {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }
    @Then("the Library page should be displayed")
    public void the_Library_page_should_be_displayed() {
        BrowserUtils.waitFor(3);
        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Library",actualTitle);
    }
    @When("the user enters the {string} information")
    public void the_user_enters_the_information(String userType) {

        String userName = null;
        String password = null;
        if (userType.equals("Student")) {
            userName = ConfigurationReader.get("student1_username");
            password = ConfigurationReader.get("student1_password");
        } else {
            userName = ConfigurationReader.get("library_username");
            password = ConfigurationReader.get("library_password");
        }
        LoginPage loginPage = new LoginPage();
        loginPage.inputEmail.sendKeys(userName);
        loginPage.password.sendKeys(password);
        BrowserUtils.waitFor(2);

        if(loginPage.inputEmail.getAttribute("value").equals(userName) || loginPage.password.getAttribute("value").equals(password)) {
            loginPage.submit.click();
        }else  if(!loginPage.inputEmail.getAttribute("value").equals(userName) || !loginPage.password.getAttribute("value").equals(password)){
            Assert.assertTrue(loginPage.alert.isDisplayed());
        }
    }
    @When("the user logs in using following credentials")
    public void the_user_logs_in_using_following_credentials(Map<String,String> userInfo) {

        new LoginPage().login(userInfo.get("username"),userInfo.get("password"));//log in icin gerekli olanlar sadece

        BrowserUtils.waitFor(3);
        String actualPage = Driver.get().getCurrentUrl();//artik dashboard sayfasindayiz

        String expectedPage = userInfo.get("title");

        Assert.assertTrue(actualPage.contains(expectedPage));

//        System.out.println("expectedPage = " + expectedPage);
//        System.out.println("actualPage = " + actualPage);
    }

    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {
        BrowserUtils.waitFor(3);

        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Library",actualTitle);
    }
    @Then("the user should be able to logout")
    public void the_user_should_be_able_to_logout() {

        new DashboardPage().userName.click();
        new DashboardPage().logOutLink.click();
    }

    @Then("the Login - Library page should be displayed")
    public void the_Login_Library_page_should_be_displayed() {
        BrowserUtils.waitFor(3);

        String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("Login - Library",actualTitle);

    }



}