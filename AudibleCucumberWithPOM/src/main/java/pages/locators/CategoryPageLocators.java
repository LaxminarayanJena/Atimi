package pages.locators;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CategoryPageLocators {

	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Browse')]")
	public WebElement menu;

	@FindBy(how = How.LINK_TEXT, using = "History")
	public WebElement history;

	@FindBy(how = How.XPATH, using = "//*[text()='History']//following::span[1]")
	public WebElement text;

}
