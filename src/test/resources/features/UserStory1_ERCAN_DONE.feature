Feature:As a user, I should be able to login to the library app.
@login
  Scenario Outline: login as a given user <role>
    Given the user is on the login page
    When the user logs in using following credentials
      | username | <role>     |
      | password | <Password> |
      | title    | <page>     |
    Then the user should be able to login

    Examples:
      | role                | Password | page      |
      | student20@library   | KH8sN9WC | books     |
      | librarian22@library | bJRnAAyp | dashboard |


