package pages.actions;

import org.openqa.selenium.support.PageFactory;
import pages.locators.HomePageLocators;
import utils.SeleniumDriver;

public class HomePageActions {

	HomePageLocators homePageLocators = null;

	public HomePageActions() {
		this.homePageLocators = new HomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), homePageLocators);
	}

	public void goToDotComWebsite() {
		homePageLocators.dotcomwebsite.click();

	}
}
