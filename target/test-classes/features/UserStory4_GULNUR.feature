
@login
Feature: A librarian should be able to add users from users page.

  Background:
    Given the user is on the login page
    When  the user enters the "Librarian" information
    Then  the Library page should be displayed

  Scenario:A librarian should be able to login with valid info.
    Then  the following information are displayed
      | Users          |
      | Books          |
      | Borrowed Books |
    Then the user should see following options
      | Dashboard |
      | Users     |
      | Books     |

  Scenario:A librarian should be able to create user.
    When  the user clicks on "Users" module on the Library page
    Then  the Users Management page should be displayed
    When  the user clicks on "Add User" module on the User page
    And   creates User using following information
      | Full Name  | XYZ Student                               |
      | Password   | xyzBC                                    |
      | Email      | xyzSON@yahoo.com                         |
      | User Group | Students                                  |
      | Status     | Active                                    |
      | Start Date | 2020-11-11                                |
      | End Date   | 2020-11-29                                |
      | Address    | 100 November Road,Liverpool,England,L62SH |
    Then  message The user has been created. should be displayed

  Scenario:A librarian should be able to close the add user window with "close" button
    When  the user clicks on "Users" module on the Library page
    Then  the Users Management page should be displayed
    When  the user clicks on "Add User" module on the User page
    And   the user should be able to close the add user window with close button

  Scenario:A librarian should be able to edit user info
    When  the user clicks on "Users" module on the Library page
    Then  the Users Management page should be displayed
    Then the user should be able to click an user info in Users Page
    Then the user should be able to edit info in new window
    Then the user should be able to click Save changes button
    Then message The user updated. should be displayed
