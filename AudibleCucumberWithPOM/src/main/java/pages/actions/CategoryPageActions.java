package pages.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CategoryPageLocators;
import utils.SeleniumDriver;

public class CategoryPageActions {

	CategoryPageLocators categoryPageLocators = null;

	public CategoryPageActions() {
		this.categoryPageLocators = new CategoryPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), categoryPageLocators);
	}

	public void HoverMenu() {

		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(categoryPageLocators.menu).perform();
	}

	public void ClickChildMenu() {
		categoryPageLocators.history.click();
	}

	public void CountTitles() {

		String text = categoryPageLocators.text.getText();
		System.out.println(text);
	}

}
