package com.Library.StepDefinitions;

import com.Library.Pages.DashboardPage;
import com.Library.Utilities.BrowserUtils;
import com.Library.Utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class DashboardPageSepDef {

    @Then("the following information are displayed")
    public void the_following_information_are_displayed(List<String> info) {
        BrowserUtils.waitFor(2);

        List<WebElement> actualOptions = Driver.get().findElements(By.xpath("//h6[@class='text-muted']"));
        List<String> columnsValues = new ArrayList<>();
        for (int i = 0; i < actualOptions.size(); ++i) {
            columnsValues.add(actualOptions.get(i).getText());
        }
        Assert.assertEquals(info, columnsValues);
    }
    @Then("the user should see following options in dashboardpage")
    public void the_user_should_see_following_options_in_dashboardpage(List<String> menuOptions) {
        BrowserUtils.waitFor(2);

        List<WebElement> actualOptions = Driver.get().findElements(By.xpath("//span[@class='title']"));
        List<String> columnsValues = new ArrayList<>();
        for (int i = 0; i < actualOptions.size(); ++i) {
            columnsValues.add(actualOptions.get(i).getText());
        }
        Assert.assertEquals(menuOptions, columnsValues);
    }
    @When("the user clicks on {string} module on the Dashboard page")
    public void the_user_clicks_on_module_on_the_Dashboard_page(String string) {
       if(string.equals("Users")) {
           new DashboardPage().usersBtn.click();
       }else  if(string.equals("Books")) {
           new DashboardPage().booksBtn.click();
       }else
        BrowserUtils.waitFor(3);
    }
    @Then("the Users Management page should be displayed")
    public void the_Users_Management_page_should_be_displayed() {
        Assert.assertTrue(new DashboardPage().subTitle.getText().equals("User Management"));
    }
    @Then("the user should see following modules in Library page")
    public void the_user_should_see_following_modules_in_Library_page(List<String> menuOptions) {
        BrowserUtils.waitFor(2);

        List<WebElement> actualOptions = Driver.get().findElements(By.xpath("//span[@class='title']"));
        List<String> columnsValues = new ArrayList<>();
        for (int i = 0; i < actualOptions.size(); ++i) {
            columnsValues.add(actualOptions.get(i).getText());
        }
        Assert.assertEquals(menuOptions, columnsValues);
    }
    @Then("table should have following column names:")
    public void table_should_have_following_column_names(List<String> menuOptions) {
        BrowserUtils.waitFor(2);

        List<WebElement> actualOptions = Driver.get().findElements(By.xpath("//thead/tr[@role='row']/th"));
        List<String> columnsValues = new ArrayList<>();
        for (int i = 0; i < actualOptions.size(); ++i) {
            columnsValues.add(actualOptions.get(i).getText());
        }
        Assert.assertEquals(menuOptions, columnsValues);
    }



}
