$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserStory5_YAVUZ.feature");
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
});