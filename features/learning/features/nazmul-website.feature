@smoke
Feature: Nazmul Website

  Scenario: View profile page and search
    Given I visit nazmul website
    When I click my profile link
    And I search for "Mac"
    Then I see title "Mac | Search Results | Nazmul Website"