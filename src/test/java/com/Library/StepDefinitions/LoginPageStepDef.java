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

public class LoginPageStepDef {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        String url = ConfigurationReader.get("url");

        Driver.get().get(url);

    }
    @When("the user enters the Librarian information")
    public void the_user_enters_the_Librarian_information()  {

        Driver.get().findElement(By.xpath("//label[@for='inputEmail']")).sendKeys("librarian22@library");
        Driver.get().findElement(By.xpath("//label[@for='inputPassword']")).sendKeys("bJRnAAyp");

        Driver.get().findElement(By.name("submit")).click();
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

        Driver.get().get(ConfigurationReader.get("url"));

        switch (userType.toLowerCase()){
            case "Librarian":
                the_user_enters_the_Librarian_information();
                break;
            case "Student":
                the_user_enters_the_Student_information();
                break;
            default:
                System.out.println("There is not any user in system such as "+userType);

        }
    }
}