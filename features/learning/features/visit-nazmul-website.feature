@smoke
Feature: Visit Nazmul Website

  Scenario: View nazmul profile page and search
    Given I visit nazmul website
    When I click my profile link
    And I search for "Mac"
    Then I see title "Mac | Search Results | Nazmul Website"