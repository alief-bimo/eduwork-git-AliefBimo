Feature: Search on ZeroBank website

    As a user i want to use the search functionality
    to find the content that i want

    Scenario: using keyword "money" on the search bar
        Given I already on ZeroBank homepage
        When I enter the keyword "money" on the search bar
        Then I should see the search result that contains the word "money"


    