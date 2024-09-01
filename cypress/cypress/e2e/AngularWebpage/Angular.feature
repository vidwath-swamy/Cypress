Feature: Sample Login
    @smoke
    Scenario: I login to this webpage and validate a successful record creation
    Given I visit the Angular webpage
    And I Enter the Name "<username>"
    And I Enter the Email "<mailid>"
    And I Enter the Password "<Password>"
    
    Examples:
    |username   |mailid              |Password      |
    |port       |port@abc.com        |sample1       |
    |Vidwath    |vidwath@xyz.com     |sample2       |




   # @regression
  #  Scenario: Test fail
  #  Given I fail Test