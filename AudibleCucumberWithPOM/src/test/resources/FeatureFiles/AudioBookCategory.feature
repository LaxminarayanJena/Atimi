#Author: LaxmiNarayanJena
@Category_Page
Feature: To validate Audible CategoryPage feature is working

  @categoryPage
  Scenario: Validate Audible Login Page
   Given I visit the HomePage "http://audible.com/" of  Audible Website
    Given I click on login button
    Then  I fill login information
    Then  I should see userdetails page
   Then I move mouse to "Browse" menu
   And click on "History" menuitem
   Then i could see "History" titles avaliable




