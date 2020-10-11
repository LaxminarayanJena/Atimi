#Author: LaxmiNarayanJena
@Login_Page
Feature: To validate Audible LoginPage feature is working

  @loginPage
  Scenario: Validate Audible Login Page
   Given I visit the HomePage "http://audible.com/" of  Audible Website
    Given I click on login button
    Then  I fill login information
    Then  I should see userdetails page




