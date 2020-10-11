package steps;

import cucumber.api.java.en.Then;
import pages.actions.UserPageActions;

public class UserPageSteps {

	UserPageActions userPageActions = new UserPageActions();

	@Then("^validate footer links present$")
	public void validate_footer_links_present() throws Throwable {
		userPageActions.validatefooterlinks();

	}

}
