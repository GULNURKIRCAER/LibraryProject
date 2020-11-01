package com.Library.Pages;

import com.Library.Utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UsersPage extends BasePage {

    public UsersPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @When("the user clicks on {string} module on the User page")
    public void the_user_clicks_on_module_on_the_Dashboard_page(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }




    @When("creates User using following information")
    public void creates_User_using_following_information(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new io.cucumber.java.PendingException();
    }
    @Then("message The user has been created. should be displayed")
    public void message_The_user_has_been_created_should_be_displayed() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the user should be able to close the add user window with {string} button")
    public void the_user_should_be_able_to_close_the_add_user_window_with_button(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("the user should be able to click an user info in Users Page")
    public void the_user_should_be_able_to_click_an_user_info_in_Users_Page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }




    @Then("the user should be able to edit info in new window")
    public void the_user_should_be_able_to_edit_info_in_new_window() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("the user should be able to click Save changes button")
    public void the_user_should_be_able_to_click_Save_changes_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("message The user updated. should be displayed")
    public void message_The_user_updated_should_be_displayed() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }



}