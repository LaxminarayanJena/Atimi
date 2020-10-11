package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UserPageLocators {

	@FindBy(how = How.XPATH, using = "//div[@id='bottom-1']//div[@id='']")
	public WebElement block;

}
