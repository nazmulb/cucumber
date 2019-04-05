@smoke
Feature: Nazmul Website Admin

  Scenario: View admin page and try to login
    Given I navigate to the "nazmul website admin" page
    When I try to login
    Then I see title "Log In — WordPress.com"