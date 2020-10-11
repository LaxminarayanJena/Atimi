package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPageLocators {

	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "Sign In")
	public WebElement signIn;

	@FindBy(how = How.NAME, using = "email")
	public WebElement email;

	@FindBy(how = How.NAME, using = "password")
	public WebElement password;

	@FindBy(how = How.ID, using = "signInSubmit")
	public WebElement signInSubmit;

}
