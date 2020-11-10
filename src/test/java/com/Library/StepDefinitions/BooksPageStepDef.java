package com.Library.StepDefinitions;

import com.Library.Utilities.BrowserUtils;
import com.Library.Utilities.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import javax.sound.midi.Soundbank;
import java.util.ArrayList;
import java.util.List;

public class BooksPageStepDef {

    @And("clicks the Book Categories dropdown")
    public void clicksTheBookCategoriesDropdown() {

        Driver.get().findElement(By.id("book_categories")).click();
        BrowserUtils.waitFor(2);
    }


    @And("the user should see following categories")
    public void choosesOneOfTheFollowingCategories(List<String> categories) {

        List<WebElement> actualOptions=Driver.get().findElements(By.xpath("//select[@id='book_categories']/option"));
        List<String> actualBookCategories = new ArrayList<>();
        for (WebElement option : actualOptions) {
            actualBookCategories.add(option.getText());
        }
        Assert.assertEquals(categories,actualBookCategories);
    }
    int counter = 0;
    @Then("the user should choose one category and should see the chosen category books")
    public void the_user_should_choose_one_category_and_should_see_the_chosen_category_books(List<String> categories) {

        for (int i = 1; i <= categories.size(); i++) {
            Driver.get().findElement(By.xpath("//option[@value='" + i + "']")).click();
            BrowserUtils.waitFor(2);
            String categoryText = Driver.get().findElement(By.xpath("//option[@value='" + i + "']")).getText();
            Driver.get().findElement(By.xpath("//select[@name='tbl_books_length']")).click();
            Driver.get().findElement(By.xpath("//option[@value='500']")).click();
            BrowserUtils.waitFor(2);
            List<WebElement> list1 = Driver.get().findElements(By.xpath("//tbody/tr"));
            for (int j = 1; j <= list1.size() ; j++) {
                if (categoryText.equals(Driver.get().findElement(By.xpath("(//tbody/tr[" + j + "]/td)[5]")).getText())) {
                    counter++;
                }
            }
            System.out.println("there are "+counter+" books on "+categoryText+"category");
        }
    }
    @And("the user can see total number of books")
    public void the_user_can_see_total_number_of_books(){
        Driver.get().findElement(By.xpath("//option[@value='null']")).click();
        BrowserUtils.waitFor(2);
        String counter2 = Integer.toString(counter);
        System.out.println(counter2);
        Assert.assertTrue(Driver.get().findElement(By.id("tbl_books_info")).getText().contains(counter2));
    }
}

