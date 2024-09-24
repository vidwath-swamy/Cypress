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



    Scenario: Validate adding a product and checking out 
    Given I visit the Angular webpage
    And I navigate to the shop page
    And I select these products
    And I navigate to the checkout page
    And I validate the products in the cart
    And I click on checkout
    And I select Delivery location
    And I agree with terms and conditions
    And I click on purchase option
    Then I validate the successful message

@focus
    Scenario: Validate the Terms and Conditions flow
    Given I visit the Angular webpage
    And I navigate to the shop page
    And I select these products
    And I navigate to the checkout page
    And I validate the products in the cart
    And I click on checkout
    And I click on Terms and Conditions link
    Then Validate the Terms and Conditions prompt
    And I Validate the close button
    And I click on Terms and Conditions link
    And I Validate the X button