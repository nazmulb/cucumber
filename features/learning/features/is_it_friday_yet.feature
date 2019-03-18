@smoke
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  # This is an example
  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    And I pick blue
    Then I should be told "<answer>"

    Examples:
      | day | answer |
      | Friday | TGIF |
      | Sunday | Nope |
      | anything else! | Nope |