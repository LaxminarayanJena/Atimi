package pages.actions;

import org.openqa.selenium.support.PageFactory;
import pages.locators.HomePageLocators;
import pages.locators.LoginPageLocators;
import utils.SeleniumDriver;

public class LoginPageActions {

	LoginPageLocators loginPageLocators = null;

	public LoginPageActions() {
		this.loginPageLocators = new LoginPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), loginPageLocators);
	}

	public void goToLogin() {
		loginPageLocators.signIn.click();

	}

	public void EnterLoginDetailsAndSignIn() {
		loginPageLocators.email.sendKeys("ldfdf@gmail.com");
		loginPageLocators.password.sendKeys("12fhdfhdf”);
		loginPageLocators.signInSubmit.click();
	}
}
