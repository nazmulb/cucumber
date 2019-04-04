@smoke
Feature: Visit Nazmul Website

  Scenario: View nazmul profile page title
    Given I visit nazmul website
    When I click my profile link
    Then I see title "Mac | Search Results | Nazmul Website"