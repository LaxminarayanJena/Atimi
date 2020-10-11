package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.actions.HomePageActions;
import pages.actions.LoginPageActions;
import utils.SeleniumDriver;

public class LoginPageSteps {

	LoginPageActions loginPageActions = new LoginPageActions();

	@Given("^I click on login button$")
	public void i_click_on_login_button() throws Throwable {
		loginPageActions.goToLogin();

	}

	@Then("^I fill login information$")
	public void i_fill_login_information() throws Throwable {
		loginPageActions.EnterLoginDetailsAndSignIn();
	}

	@Then("^I should see userdetails page$")
	public void i_should_see_userdetails_page() throws Throwable {

	}

}
