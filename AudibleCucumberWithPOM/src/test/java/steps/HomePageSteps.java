package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.actions.HomePageActions;
import utils.SeleniumDriver;

public class HomePageSteps {

	HomePageActions homePageActions = new HomePageActions();

	@Given("^I visit the HomePage \"([^\"]*)\" of  Audible Website$")
	public void i_visit_the_HomePage_of_Audible_Website(String webSiteURL) throws Throwable {
		SeleniumDriver.openPage(webSiteURL);
		homePageActions.goToDotComWebsite();
	}

	@Then("^I could see \"([^\"]*)\" button$")
	public void i_could_see_button(String arg1) throws Throwable {

	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String arg1) throws Throwable {

	}

}
