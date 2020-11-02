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
formatter.step({
  "name": "the user clicks on \"Users\" module on the Library page",
  "keyword": "When "
});
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:64046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 917889c8b6b29e068f91ad250d7d4bc2\n*** Element info: {Using\u003did, value\u003dinputEmail}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getAttribute(Unknown Source)\n\tat com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(LoginPageStepDef.java:52)\n\tat ✽.the user enters the \"Librarian\" information(file:///Users/macbookpro/idealProjects/LibraryProject/src/test/resources/features/UserStory4_GULNUR.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
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
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "location": "com.Library.StepDefinitions.UsersPageStepDef.creates_User_using_following_information(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:64046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 917889c8b6b29e068f91ad250d7d4bc2\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.Library.StepDefinitions.Hooks.tearDown(Hooks.java:20)\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:64046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 917889c8b6b29e068f91ad250d7d4bc2\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page(LoginPageStepDef.java:20)\n\tat ✽.the user is on the login page(file:///Users/macbookpro/idealProjects/LibraryProject/src/test/resources/features/UserStory4_GULNUR.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "name": "the user clicks on \"Add User\" module on the User page",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_clicks_on_module_on_the_Dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to close the add user window with \"close\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_close_the_add_user_window_with_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:64046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 917889c8b6b29e068f91ad250d7d4bc2\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.Library.StepDefinitions.Hooks.tearDown(Hooks.java:20)\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:64046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 917889c8b6b29e068f91ad250d7d4bc2\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.Library.StepDefinitions.LoginPageStepDef.the_user_is_on_the_login_page(LoginPageStepDef.java:20)\n\tat ✽.the user is on the login page(file:///Users/macbookpro/idealProjects/LibraryProject/src/test/resources/features/UserStory4_GULNUR.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters the \"Librarian\" information",
  "keyword": "When "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Library page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.LoginPageStepDef.the_Library_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_click_an_user_info_in_Users_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to edit info in new window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_edit_info_in_new_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to click Save changes button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.the_user_should_be_able_to_click_Save_changes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "message The user updated. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Library.StepDefinitions.UsersPageStepDef.message_The_user_updated_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Macbooks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:18bb:8045:4316:f389%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/rv/bcv8j7l94yq...}, goog:chromeOptions: {debuggerAddress: localhost:64046}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 917889c8b6b29e068f91ad250d7d4bc2\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.Library.StepDefinitions.Hooks.tearDown(Hooks.java:20)\n",
  "status": "failed"
});
});