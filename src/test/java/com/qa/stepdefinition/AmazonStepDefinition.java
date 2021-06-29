package com.qa.stepdefinition;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.qa.pages.AmazonPages;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class AmazonStepDefinition {
	
	WebDriver driver;
	AmazonPages AmazonOR;
	
	@Before
	public void setUp() {
		System.out.println("Starting the code...");
	}
	
	@After
	public void tearDown() {
		System.out.println("Stopping the code....");
	}
	
	
	
	@Given("^the browser is launched$")
	public void the_browser_is_launched() {
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		AmazonOR = new AmazonPages(driver);
	}

	@Then("^enter the URL$")
	public void enter_the_URL() {
		driver.get("https://www.amazon.in/");
	}


	
	@Given("^the user is on amazon page$")
	public void the_user_is_on_amazon_page() {		
		
		boolean displayed = AmazonOR.getAmazonLogo().isDisplayed();
		Assert.assertEquals(true, displayed);
		System.out.println("the user is on amazon page");
		
		
	}

	@When("^the title has the amazon as keyword$")
	public void the_title_has_the_amazon_as_keyword() {
		boolean contains = driver.getTitle().contains("amazon");
		Assert.assertEquals(true, contains);
		System.out.println("the title has the amazon as keyword");
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}

	@Then("^select books as Category$")
	public void select_books_as_Category(){
		AmazonOR.getCategory().selectByVisibleText("Books");
	}

	@Then("^enter da vinci code into search textbox$")
	public void enter_da_vinci_code_into_search_textbox() {
		AmazonOR.getSearchTextField().sendKeys("Da vinci code");
		
	}
	
	@Then("^select \"([^\"]*)\" as Category$")
	public void select_as_Category(String Name){
		AmazonOR.getCategory().selectByVisibleText(Name);
		
	}

	@Then("^enter \"([^\"]*)\" into search textbox$")
	public void enter_into_search_textbox(String ItemName){
		AmazonOR.getSearchTextField().sendKeys(ItemName);
		
	}


	@Then("^click the magnifier button$")
	public void click_the_magnifier_button() {
		AmazonOR.getSearchButton().click();
	}

	@Then("^get all the items displayed$")
	public void get_all_the_items_displayed() {
		List<WebElement> items = AmazonOR.getItems();
		for(WebElement item:items) {
			System.out.println(item.getText());
		}
	}

	@Then("^get all the footer links$")
	public void get_all_the_footer_links(){
		List<WebElement> footerLinks = AmazonOR.getFooterLinks();
		for(WebElement link:footerLinks) {
			System.out.println(link.getText());
		}
		
	}

	
	@Then("^move the cursor position on account and list item$")
	public void move_the_cursor_position_on_account_and_list_item() {
		WebElement ele = AmazonOR.getAccountandLists();
		Actions act = new Actions(driver);
		act.moveToElement(ele).build().perform();
	}

	@Then("^select start here link$")
	public void select_start_here_link() {
		AmazonOR.getRegistrationLink().click();
		
	}

	@Then("^check if the user is landed on the registration page$")
	public void check_if_the_user_is_landed_on_the_registration_page() {
		boolean contains = driver.getTitle().contains("Registration");
		Assert.assertEquals(true, contains);
		System.out.println("user is landed on the registration page");
	}

	@Then("^enter the jyothicyril as user name$")
	public void enter_the_jyothicyril_as_user_name() throws InterruptedException {
		AmazonOR.getUNameTxtField().sendKeys("JyothiCyril");
		Thread.sleep(2000);
		
	}


	@Then("^enter the \"([^\"]*)\" as user name$")
	public void enter_the_as_user_name(String UName) throws InterruptedException {
		AmazonOR.getUNameTxtField().sendKeys(UName);
		Thread.sleep(2000);
	}

	
	@Then("^enter the value as user name$")
	public void enter_the_value_as_user_name(DataTable UserName) throws InterruptedException {
		
		List<String> Uname = UserName.asList(String.class);
		for(String item:Uname) {
			AmazonOR.getUNameTxtField().clear();
			AmazonOR.getUNameTxtField().sendKeys(item);
			Thread.sleep(2000);
		}
		
	}


}
