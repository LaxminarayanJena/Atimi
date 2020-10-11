package pages.actions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import pages.locators.HomePageLocators;
import pages.locators.LoginPageLocators;
import pages.locators.UserPageLocators;
import utils.SeleniumDriver;

public class UserPageActions {

	UserPageLocators userPageLocators = null;

	public UserPageActions() {
		this.userPageLocators = new UserPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), userPageLocators);
	}

	public void validatefooterlinks() {

		List<WebElement> blocklinks = userPageLocators.block.findElements(By.tagName("a"));
		System.out.println("no of links inside block only  are: " + blocklinks.size());
		for (WebElement blocklink : blocklinks) {
			System.out.println(blocklink.getText());
			// System.out.println(blocklink.getAttribute("href"));
		}

	}

}
