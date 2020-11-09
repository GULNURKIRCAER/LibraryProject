#As a librarian, I should be able to see book records on user page
#
#
#AC:  1. default 10 records
#2. Show records for <count> options
#Examples:
#| count |
#| 5        |
#| 10      |
#| 15      |
#| 50      |
#| 100    |

@login
Feature: A librarian should be able to see book records on user page
  @login @wip
  Scenario:
    Given the user is on the login page
    When  the user enters the "Librarian" information
    Then  the Library page should be displayed
    When  the user clicks on "Users" module on the Library page
    Then  the Users Management page should be displayed
