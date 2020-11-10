<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserStory5_YAVUZ.feature");
formatter.feature({
  "name": "A librarian should be able to see book records on user page",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserStory4_GULNUR.feature");
formatter.feature({
  "name": "A librarian should be able to add users from users page.",
>>>>>>> master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
<<<<<<< HEAD
formatter.scenario({
  "name": "A librarian should be able to see book records",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
=======
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
>>>>>>> master
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
<<<<<<< HEAD
=======
formatter.scenario({
  "name": "A librarian should be able to add users with all valid info.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the user should see following options",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
>>>>>>> master
formatter.step({
  "name": "the user clicks on \"Users\" module on the Library page",
  "keyword": "When "
});
<<<<<<< HEAD
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
=======
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the Users page should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "the user should see 10 records on page",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_see_10_records_on_page()"
=======
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "the user should click records button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_click_records_button()"
=======
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "the user should see following options",
=======
formatter.scenario({
  "name": "A librarian should be able to add users with all valid info.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Add User\" module on the User page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "creates User using following information",
>>>>>>> master
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
<<<<<<< HEAD
=======
    {},
>>>>>>> master
    {}
  ],
  "keyword": "And "
});
<<<<<<< HEAD
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_select_for_following_options(java.util.List\u003cjava.lang.String\u003e)"
=======
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "message The user has been created. should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
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
=======
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
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
=======
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
  "name": "the user clicks on \"Add User\" module on the User page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should be able to close the add user window with \"close\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "the user should be able to click an user info in Users Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should be able to edit info in new window",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should be able to click Save changes button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "message The user updated. should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
>>>>>>> master
formatter.after({
  "status": "passed"
});
});