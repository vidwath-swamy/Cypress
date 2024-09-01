Feature: Sample Login
    @smoke
    Scenario: I login to this webpage and validate a successful record creation
    Given I visit the Angular webpage
    And I enter the Name "<username>"
    And I enter the Email "<mailid>"
    And I enter the Password "<Password>"
    And I enable the Checkbox
    And I select the Gender "<SampleGender>"
    And I select the Employment Status "<Employment>"
    And I select the Date of birth "<DOB>"
    And I submit the form
    Then I validate the successful Submit
    
    Examples:
    |username   |mailid              |Password      |SampleGender |Employment  |DOB          |
    |port       |port@abc.com        |sample1       |Female       |Student     |1996-08-08   |
    |Vidwath    |vidwath@xyz.com     |sample2       |Male         |Employed    |1992-04-14   |




   # @regression
  #  Scenario: Test fail
  #  Given I fail Test