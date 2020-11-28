Feature:As a user, I should be able to see tables with default info

  Scenario Outline: login as a given user <role>
    Given the user is on the login page
    When the user logs in using following credentials
      | username | <role>     |
      | password | <Password> |
      | title    | <page>     |
    Then the user should be able to login
    Then the user clicks on "Books" module on the Dashboard page
    Then table should have following column names:
      | Actions     |
      | ISBN        |
      | Name        |
      | Author      |
      | Category    |
      | Year        |
      | Borrowed By |

    Examples:
      | role                | Password | page      |
      | student20@library   | KH8sN9WC | books     |
      | librarian22@library | bJRnAAyp | dashboard |

