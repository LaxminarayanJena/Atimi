package steps;

import cucumber.api.java.en.Then;
import pages.actions.CategoryPageActions;
import pages.actions.UserPageActions;

public class CategoryPageSteps {

	CategoryPageActions categoryPageActions = new CategoryPageActions();

	@Then("^I move mouse to \"([^\"]*)\" menu$")
	public void i_move_mouse_to_menu(String arg1) throws Throwable {
		categoryPageActions.HoverMenu();
	}

	@Then("^click on \"([^\"]*)\" menuitem$")
	public void click_on_menuitem(String arg1) throws Throwable {
		categoryPageActions.ClickChildMenu();
	}

	@Then("^i could see \"([^\"]*)\" titles avaliable$")
	public void i_could_see_titles_avaliable(String arg1) throws Throwable {
		categoryPageActions.CountTitles();
	}

}
