<<<<<<< HEAD
@wip
Feature:As a student, I should be able to search books with different categories
  @EUG3-154 @EUG3-144
  Scenario: As a student, I should be able to search books with different categories
    When a student logs in with valid credentials
    And clicks the Book Categories dropdown
    And chooses one of the following categories
      | Action and Adventure    |
      | Anthology               |
      | Classic                 |
      | Comic and Graphic Novel |
      | Crime and Detective     |
      | Drama                   |
      | Fable                   |
      | Fairy Tale              |
      | Fan-Fiction             |
      | Fantasy                 |
      | Historical Fiction      |
      | Horror                  |
      | Science Fiction         |
      | Biography/Autobiography |
      | Humor                   |
      | Romance                 |
      | Short Story             |
      | Essay                   |
      | Memoir                  |

    Then he should see only the books that belong to the chosen category on the table

=======

#As a students, I should be able to serach books with different categories.
>>>>>>> master
