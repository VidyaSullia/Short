package com.resources;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class BaseCls {

public static WebDriver driver;
public static void launch(String url) {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\KaVi\\eclipse-workspace\\Junit\\Data\\driver\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get(url);
	driver.manage().window().maximize();
	

}
public static void verifyUrl(String text) {
	if(driver.getCurrentUrl().contains(text)) {
		System.out.println("true");
	}
	else {
		System.out.println("false");
	}
}
public static void verifyTitle(String text) {
	if(driver.getTitle().contains(text)) {
		System.out.println("true");
	}
	else {
		System.out.println("false");
	}
}
public static void close() {
driver.quit();

}
public static void type(WebElement e, String s) {
	e.sendKeys(s);
	if(e.getAttribute("value").equals(s)) {
		System.out.println(true);
	}
	else {
		System.out.println("false");
	}

}
public void btn(WebElement e) {
	e.click();

}
public static void moveTo(WebElement e, WebElement e1, WebElement e2) {
	Actions a=new Actions(driver);
	a.moveToElement(e).perform();
	a.moveToElement(e1).perform();
	e2.click();
	
}

}
