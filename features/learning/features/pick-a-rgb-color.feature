
Feature: Pick a RGB Color
  Try to pick the right RGB color

  Scenario Outline: Try to pick the right rgb color or not?
    Given Initialise the all colors
    When I pick <color>
    Then The color you picked is "<result>" under rgb

    Examples:
      | color | result |
      | red | found |
      | green | found |
      | yellow | not found |