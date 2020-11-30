
Feature: A Student should be able to see several modules once login.
@login
  Background:
    Given the user is on the login page
    When  the user enters the "Student" information
    Then  the Library page should be displayed

  Scenario:A Students should have access to 2 modules.
    Then the user should see following modules in Library page
      |Books          |
      |Borrowing Books|

