$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserStory4_GULNUR.feature");
formatter.feature({
  "name": "A librarian should be able to add users from users page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A librarian should be able to login with valid info.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the following information are displayed",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_following_information_are_displayed(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see following options in dashboardpage",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_user_should_see_following_options_in_dashboardpage(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A librarian should be able to create user.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Users\" module on the Library page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Users Management page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_Users_Management_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Add User\" module on the User page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates User using following information",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.creates_User_using_following_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message The user has been created. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.message_The_user_has_been_created_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A librarian should be able to close the add user window with \"close\" button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Users\" module on the Library page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Users Management page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_Users_Management_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Add User\" module on the User page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to close the add user window with close button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_close_the_add_user_window_with_close_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A librarian should be able to edit user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Users\" module on the Library page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Users Management page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_Users_Management_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to click an user info in Users Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_click_an_user_info_in_Users_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to edit info in new window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_edit_info_in_new_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to click Save changes button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_click_Save_changes_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message The user updated. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.message_The_user_updated_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UserStory5_YAVUZ.feature");
formatter.feature({
  "name": "A librarian should be able to see book records on user page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "A librarian should be able to see book records",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"Users\" module on the Library page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Users Management page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_Users_Management_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see 10 records on page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_see_10_records_on_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click records button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_click_records_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see following options",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_select_for_following_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose records options and should see records",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_choose_records_options_and_should_see_records(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UserStory7_ZUHAL.feature");
formatter.feature({
  "name": "As a student, I should be able to search books with different categories",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "As a student, I should be able to search books with different categories",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Student\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks the Book Categories dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.BooksPageStepDef.clicksTheBookCategoriesDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see following categories",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.BooksPageStepDef.choosesOneOfTheFollowingCategories(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose one category and should see the chosen category books",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.BooksPageStepDef.the_user_should_choose_one_category_and_should_see_the_chosen_category_books(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see total number of books",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.BooksPageStepDef.the_user_can_see_total_number_of_books()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat com.Library.StepDefinitions.BooksPageStepDef.the_user_can_see_total_number_of_books(BooksPageStepDef.java:62)\n\tat ✽.the user can see total number of books(file:///Users/macbookpro/idealProjects/LibraryProject/src/test/resources/features/UserStory7_ZUHAL.feature:54)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});