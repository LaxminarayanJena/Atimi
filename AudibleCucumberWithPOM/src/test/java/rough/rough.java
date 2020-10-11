package rough;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class rough {

	public static void main(String[] args) throws InterruptedException {
		String chromedriverlocation = (System.getProperty("user.dir") + "/src/test/resources/executables/chromedriver");
		System.setProperty("webdriver.chrome.driver", chromedriverlocation);
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);

		driver.get("https://www.audible.com/");
		driver.findElement(By.partialLinkText("go to audible.com")).click();
		driver.findElement(By.partialLinkText("Sign In")).click();
		driver.findElement(By.name("email")).sendKeys("lnarayan.jena05@gmail.com");
		driver.findElement(By.name("password")).sendKeys("123laptop784");
		driver.findElement(By.id("signInSubmit")).click();
		WebElement block = driver.findElement(By.xpath("//div[@id='bottom-1']//div[@id='']"));
		List<WebElement> blocklinks = block.findElements(By.tagName("a"));
		System.out.println("no of links inside block only  are: " + blocklinks.size());
		for (WebElement blocklink : blocklinks) {
			System.out.println(blocklink.getText());
			// System.out.println(blocklink.getAttribute("href"));
		}
		WebElement menu = driver.findElement(By.xpath("//*[contains(text(),'Browse')]"));
		Actions action = new Actions(driver);
		action.moveToElement(menu).perform();
		driver.findElement(By.linkText("History")).click();
		String text = driver.findElement(By.xpath("//*[text()='History']//following::span[1]")).getText();
		System.out.println(text);
		driver.quit();

	}
}
