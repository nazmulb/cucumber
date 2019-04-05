@smoke
Feature: Nazmul Website

  Scenario: View profile page and search
    Given I navigate to the "nazmul website" page
    When I click my profile link
    And I search for "Mac2"
    Then I see title "Mac | Search Results | Nazmul Website"