package com.Library.Pages;

import com.Library.Utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class BooksPage extends BasePage{

    public BooksPage() {
        PageFactory.initElements(Driver.get(), this);
    }
}
