#Author: LaxmiNarayanJena
@Home_Page
Feature: To validate Audible HomePage feature is working

  @homePage
  Scenario: Validate Audible Home Page
    Given I visit the HomePage "http://audible.com/" of  Audible Website
    Then  I could see "Try Audible Premium Plus free" button
    And   I could see "Browse" button
    And   the page title should be "Audible.com | Unlock a listen for every moment"





