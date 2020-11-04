package com.Library.StepDefinitions;

import com.Library.Pages.LoginPage;
import com.Library.Pages.UsersPage;
import com.Library.Utilities.BrowserUtils;
import com.Library.Utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.Map;

public class UsersPageStepDef {

    @When("the user clicks on {string} module on the User page")
    public void the_user_clicks_on_module_on_the_Dashboard_page(String string) {

        new UsersPage().addUsersBtn.click();

    }

    @When("creates User using following information")
    public void creates_User_using_following_information(Map<String, String> table) {
        BrowserUtils.waitFor(2);

        new UsersPage().fullName.sendKeys(table.get("Full Name"));
        new UsersPage().password.sendKeys(table.get("Password"));
        new UsersPage().email.sendKeys(table.get("Email"));

        new UsersPage().userGroup.click();
        Driver.get().findElement(By.xpath("//select[@id='user_group_id']/option[2]")).click();
        new UsersPage().status.click();
        Driver.get().findElement(By.xpath("//select[@id='status']/option[1]")).click();

        new UsersPage().startDate.clear();
        new UsersPage().startDate.sendKeys(table.get("Start Date"));
        new UsersPage().endDate.clear();
        new UsersPage().endDate.sendKeys(table.get("End Date"));
        new UsersPage().address.sendKeys(table.get("Address"));
        new UsersPage().saveBtn.click();

        BrowserUtils.waitFor(3);

    }
    @Then("message The user has been created. should be displayed")
    public void message_The_user_has_been_created_should_be_displayed() {

        Assert.assertTrue(new UsersPage().allert.isDisplayed());
    }
    @When("the user should be able to close the add user window with close button")
    public void the_user_should_be_able_to_close_the_add_user_window_with_close_button() {

        BrowserUtils.waitFor(1);
        new UsersPage().cancelBtn.click();
    }
    @Then("the user should be able to click an user info in Users Page")
    public void the_user_should_be_able_to_click_an_user_info_in_Users_Page() {

        new UsersPage().oneRow.click();
    }
    @Then("the user should be able to edit info in new window")
    public void the_user_should_be_able_to_edit_info_in_new_window() {
        BrowserUtils.waitFor(2);

        new UsersPage().startDate.clear();
        new UsersPage().startDate.sendKeys("2020-11-09");

    }
    @Then("the user should be able to click Save changes button")
    public void the_user_should_be_able_to_click_Save_changes_button() {
        BrowserUtils.waitFor(1);
        new UsersPage().saveBtn.click();
    }
    @Then("message The user updated. should be displayed")
    public void message_The_user_updated_should_be_displayed() {
        BrowserUtils.waitFor(1);

        Assert.assertTrue(new UsersPage().allert.getText().equals("The user updated."));

        BrowserUtils.waitFor(1);

    }

}
