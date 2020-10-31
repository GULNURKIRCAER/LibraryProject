package com.Library.Pages;

import com.Library.Utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class BorrowingBooksPage extends BasePage{

    public BorrowingBooksPage() {
        PageFactory.initElements(Driver.get(), this);
    }




}