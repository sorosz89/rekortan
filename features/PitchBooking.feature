Feature: Rekortan booking
As a user
I want to book
So that I can apply for a game

  Scenario: REKORTAN - Searching for jobs
    Given the rekortan booking page is opened
    When the datum: thu 12 is added to the date field
    And the Tovább button is clicked
    Then the details page should be visible

    When the kezdes is clicked
    And the 16:30 kezdes time is selected
    And the vege is clicked
    And the 18:30 vege time is selected
    And the name Lovasi Andras is entered
    And the elerhetőseg lovasi.andras@gmail.com is entered
#   And the tevekenysseg is clicked
#   And the Lábtengó is selected

  
