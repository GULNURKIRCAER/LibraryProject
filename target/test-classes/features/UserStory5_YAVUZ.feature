@login
Feature: A librarian should be able to see book records on user page

  Scenario:A librarian should be able to see book records
    Given the user is on the login page
    When  the user enters the "Librarian" information
    Then  the Library page should be displayed
    When  the user clicks on "Users" module on the Library page
    Then  the Users Management page should be displayed
    And   the user should see 10 records on page
    And   the user should click records button
    And   the user should see following options
      | 5   |
      | 10  |
      | 15  |
      | 50  |
      | 100 |
      | 200 |
      | 500 |
    Then the user should choose records options and should see records
      | 5   |
      | 10  |
      | 15  |
      | 50  |
      | 100 |
      | 200 |
      | 500 |
