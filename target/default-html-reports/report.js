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
  "name": "the user should see following options",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.DashboardPageSepDef.the_user_should_see_following_options(java.util.List\u003cjava.lang.String\u003e)"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"btn btn-primary\"\u003e...\u003c/button\u003e is not clickable at point (553, 581). Other element would receive the click: \u003ctd class\u003d\"old day\"\u003e...\u003c/td\u003e\n  (Session info: headless chrome\u003d86.0.4240.183)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:58839}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4ae59965651b44ac77571e67127b562a\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.Library.StepDefinitions.UsersPageStepDef.creates_User_using_following_information(UsersPageStepDef.java:38)\n\tat ✽.creates User using following information(file:///Users/macbookpro/idealProjects/LibraryProject/src/test/resources/features/UserStory4_GULNUR.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "message The user has been created. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.message_The_user_has_been_created_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
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
});