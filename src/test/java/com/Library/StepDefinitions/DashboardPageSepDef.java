package com.Library.StepDefinitions;

import com.Library.Pages.DashboardPage;
import com.Library.Utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class DashboardPageSepDef {
    @When("the user clicks on {string} module on the Library page")
    public void the_user_clicks_on_module_on_the_Dashboard_page(String string) {
        new DashboardPage().usersBtn.click();
        BrowserUtils.waitFor(3);
    }
    @Then("the Users Management page should be displayed")
    public void the_Users_Management_page_should_be_displayed() {
        Assert.assertTrue(new DashboardPage().subTitle.getText().equals("User Management"));
    }
}
