package com.Library.StepDefinitions;

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

public class LoginPageStepDef {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().get(ConfigurationReader.get("url"));

    }
    @When("the user enters the Librarian information")
    public void the_user_enters_the_Librarian_information() {

        String username = ConfigurationReader.get("library_username");
        String password = ConfigurationReader.get("library_password");

        LoginPage loginPage = new LoginPage();
        loginPage.inputEmail.sendKeys(username);
        loginPage.password.sendKeys(password);

        if(loginPage.inputEmail.getAttribute("value").equals(username) || loginPage.password.getAttribute("value").equals(password)) {
            Driver.get().findElement(By.name("submit")).click();
        }else  if(!loginPage.inputEmail.getAttribute("value").equals(username) || !loginPage.password.getAttribute("value").equals(password)){
            Assert.assertTrue(loginPage.alert.isDisplayed());
        }

        BrowserUtils.waitFor(1);

    }

    @Then("the Library page should be displayed")
    public void the_Library_page_should_be_displayed() {

        BrowserUtils.waitFor(3);

        String actualTitle = Driver.get().getTitle();

        Assert.assertEquals("Library",actualTitle);

    }
    @When("the user enters the Student information")
    public void the_user_enters_the_Student_information()  {

        String username = ConfigurationReader.get("student1_username");
        String password = ConfigurationReader.get("student1_password");

//        String username = ConfigurationReader.get("student2_username");
//        String password = ConfigurationReader.get("student2_password");

//        String username = ConfigurationReader.get("student3_username");
//        String password = ConfigurationReader.get("student3_password");

        LoginPage loginPage = new LoginPage();

        loginPage.login(username,password);

    }
    @When("the user enters the {string} information")
    public void the_user_enters_the_information(String userType) {

        String userName=null;
        String password=null;
        if (userType.equals("Student")){
            userName = ConfigurationReader.get("student1_username");
            password = ConfigurationReader.get("student1_password");
        } else {
            userName = ConfigurationReader.get("library_username");
            password = ConfigurationReader.get("library_password");
        }
        LoginPage loginPage = new LoginPage();
        loginPage.inputEmail.sendKeys(userName);
        loginPage.password.sendKeys(password + Keys.ENTER);
        BrowserUtils.waitFor(1);
    }
}