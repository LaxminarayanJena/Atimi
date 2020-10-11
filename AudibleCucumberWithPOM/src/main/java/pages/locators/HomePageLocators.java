package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePageLocators {

	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "go to audible.com")
	public WebElement dotcomwebsite;

}
