Feature: Sample Login
    @smoke
    Scenario: I login to this webpage and validate a successful record creation
    Given I visit the Angular webpage
    And I Enter the "Name"
    And I Enter the "Email"
    And I Enter the "Password"




   # @regression
  #  Scenario: Test fail
  #  Given I fail Test