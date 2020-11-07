import com.Library.Pages.LoginPage;
import com.Library.Utilities.ConfigurationReader;
import com.Library.Utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ZuhalsStepDefs {
    @When("a student logs in with valid credentials")
    public void aStudentLogsInWithValidCredentials() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        String username = ConfigurationReader.get("student1_username");
        String password = ConfigurationReader.get("student1_password");
        Driver.get().findElement(By.xpath("//label[.='Email address']")).sendKeys(username);
        Driver.get().findElement(By.xpath("//label[.='Password']")).sendKeys(password);
        new LoginPage().submit.click();
    }

    @And("clicks the Book Categories dropdown")
    public void clicksTheBookCategoriesDropdown() {
        Driver.get().findElement(By.id("#book_categories")).click();
    }
    int counter = 0;
    @And("chooses one of the following categories")
    public void choosesOneOfTheFollowingCategories(List<WebElement> categories) {
        for (int i = 1; i < categories.size(); i++) {
            Driver.get().findElement(By.xpath("//option[@value='" + i +"']")).click();
            Driver.get().findElement(By.xpath("//select[@name='tbl_books_length']")).click();
            Driver.get().findElement(By.xpath("//option[@value='500']")).click();
            List<WebElement> list1 = Driver.get().findElements(By.xpath("//tbody/tr"));
            for (int j = 0; j < list1.size()-2; j++) {
                if (categories.get(j).getText().equals(Driver.get().findElement(By.xpath("(//tbody/tr[" + j + "]/td)[5]")).getText())){
                    counter++;
                }
            }
        }
    }
    @Then("he should see only the books that belong to the chosen category on the table")
    public void heSheShouldSeeOnlyTheBooksThatBelongToTheChosenCategoryOnTheTable() {

        String counter2 = Integer.toString(counter);
        Assert.assertTrue(Driver.get().findElement(By.id("tbl_books_info")).getText().contains(counter2));
    }
}