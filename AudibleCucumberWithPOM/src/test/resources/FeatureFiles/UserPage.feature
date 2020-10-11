#Author: LaxmiNarayanJena
@User_Page
Feature: To validate Audible UserPage feature is working

  @userPage
  Scenario: Validate Audible Login Page
   Given I visit the HomePage "http://audible.com/" of  Audible Website
    Given I click on login button
    Then  I fill login information
    Then  I should see userdetails page
    Then validate footer links present




