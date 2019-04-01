Feature: Google Search
  In order to gain more knowledge
  As an internet user
  I want to be able to find information through Google

  Scenario: Search finds results
    Given I have navigated to the Google Search page
    When I search for "MYOB"
    Then I see results
