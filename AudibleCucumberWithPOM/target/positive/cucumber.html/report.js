$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AudioBookCategory.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: LaxmiNarayanJena"
    }
  ],
  "line": 3,
  "name": "To validate Audible CategoryPage feature is working",
  "description": "",
  "id": "to-validate-audible-categorypage-feature-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Category_Page"
    }
  ]
});
formatter.before({
  "duration": 7451666961,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate Audible Login Page",
  "description": "",
  "id": "to-validate-audible-categorypage-feature-is-working;validate-audible-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@categoryPage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I visit the HomePage \"http://audible.com/\" of  Audible Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill login information",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see userdetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I move mouse to \"Browse\" menu",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on \"History\" menuitem",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "i could see \"History\" titles avaliable",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://audible.com/",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.i_visit_the_HomePage_of_Audible_Website(String)"
});
formatter.result({
  "duration": 9405223469,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 2595155756,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_fill_login_information()"
});
formatter.result({
  "duration": 7354226761,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_should_see_userdetails_page()"
});
formatter.result({
  "duration": 86435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browse",
      "offset": 17
    }
  ],
  "location": "CategoryPageSteps.i_move_mouse_to_menu(String)"
});
formatter.result({
  "duration": 1579772276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "History",
      "offset": 10
    }
  ],
  "location": "CategoryPageSteps.click_on_menuitem(String)"
});
formatter.result({
  "duration": 734049516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "History",
      "offset": 13
    }
  ],
  "location": "CategoryPageSteps.i_could_see_titles_avaliable(String)"
});
formatter.result({
  "duration": 389945967,
  "status": "passed"
});
formatter.after({
  "duration": 371898955,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: LaxmiNarayanJena"
    }
  ],
  "line": 3,
  "name": "To validate Audible HomePage feature is working",
  "description": "",
  "id": "to-validate-audible-homepage-feature-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Home_Page"
    }
  ]
});
formatter.before({
  "duration": 2861519750,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate Audible Home Page",
  "description": "",
  "id": "to-validate-audible-homepage-feature-is-working;validate-audible-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@homePage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I visit the HomePage \"http://audible.com/\" of  Audible Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I could see \"Try Audible Premium Plus free\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I could see \"Browse\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the page title should be \"Audible.com | Unlock a listen for every moment\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://audible.com/",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.i_visit_the_HomePage_of_Audible_Website(String)"
});
formatter.result({
  "duration": 7193710849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Try Audible Premium Plus free",
      "offset": 13
    }
  ],
  "location": "HomePageSteps.i_could_see_button(String)"
});
formatter.result({
  "duration": 205677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Browse",
      "offset": 13
    }
  ],
  "location": "HomePageSteps.i_could_see_button(String)"
});
formatter.result({
  "duration": 114927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audible.com | Unlock a listen for every moment",
      "offset": 26
    }
  ],
  "location": "HomePageSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 119846,
  "status": "passed"
});
formatter.after({
  "duration": 711895309,
  "status": "passed"
});
formatter.uri("LoginScreenPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: LaxmiNarayanJena"
    }
  ],
  "line": 3,
  "name": "To validate Audible LoginPage feature is working",
  "description": "",
  "id": "to-validate-audible-loginpage-feature-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Login_Page"
    }
  ]
});
formatter.before({
  "duration": 1613065708,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate Audible Login Page",
  "description": "",
  "id": "to-validate-audible-loginpage-feature-is-working;validate-audible-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@loginPage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I visit the HomePage \"http://audible.com/\" of  Audible Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill login information",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see userdetails page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://audible.com/",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.i_visit_the_HomePage_of_Audible_Website(String)"
});
formatter.result({
  "duration": 5712635267,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 3648535651,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_fill_login_information()"
});
formatter.result({
  "duration": 5276474860,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_should_see_userdetails_page()"
});
formatter.result({
  "duration": 149540,
  "status": "passed"
});
formatter.after({
  "duration": 284317198,
  "status": "passed"
});
formatter.uri("UserPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: LaxmiNarayanJena"
    }
  ],
  "line": 3,
  "name": "To validate Audible UserPage feature is working",
  "description": "",
  "id": "to-validate-audible-userpage-feature-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@User_Page"
    }
  ]
});
formatter.before({
  "duration": 2031194972,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate Audible Login Page",
  "description": "",
  "id": "to-validate-audible-userpage-feature-is-working;validate-audible-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@userPage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I visit the HomePage \"http://audible.com/\" of  Audible Website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill login information",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see userdetails page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "validate footer links present",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://audible.com/",
      "offset": 22
    }
  ],
  "location": "HomePageSteps.i_visit_the_HomePage_of_Audible_Website(String)"
});
formatter.result({
  "duration": 4566933551,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 2128097292,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_fill_login_information()"
});
formatter.result({
  "duration": 6899302189,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_should_see_userdetails_page()"
});
formatter.result({
  "duration": 51090,
  "status": "passed"
});
formatter.match({
  "location": "UserPageSteps.validate_footer_links_present()"
});
formatter.result({
  "duration": 817462371,
  "status": "passed"
});
formatter.after({
  "duration": 417662948,
  "status": "passed"
});
});