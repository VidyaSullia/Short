package com.objectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.resources.BaseCls;

public class Locator extends BaseCls {
	public Locator() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//span[contains(text(),'Hello')]")
    private WebElement btnSign;
	
	@FindBy(id="ap_email")
    private WebElement txtEmail;
	
	@FindBy(id="continue")
    private WebElement btnContinue;
	
	@FindBy(id="ap_password")
    private WebElement txtPass;
	
	@FindBy(id="signInSubmit")
    private WebElement btnSubmit;
	
	@FindBy(xpath="//span[text()='Shop by']")
    private WebElement mouShop;
	
	@FindBy(xpath="//span[contains(text(),'Home, Kitchen')]")
    private WebElement mouHome;
	
	@FindBy(xpath="//span[contains(text(),'Garden')]")
    private WebElement mouGarden;
	
	@FindBy(xpath="//img[@alt=\"Live Plants\"]")
    private WebElement imgClick;
	
	@FindBy(xpath="//img[@alt=\"Bonsai\"]")
    private WebElement imgBonsai;
	
	@FindBy(xpath="(//div[@class=\"a-section octopus-pc-item-hue-shield octopus-pc-item-image-background-v3\"])[13]")
    private WebElement btnSelect;
	
	@FindBy(id="add-to-cart-button")
	private WebElement btnCart;

	
	public WebElement getBtnSign() {
		return btnSign;
	}

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getBtnContinue() {
		return btnContinue;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getBtnSubmit() {
		return btnSubmit;
	}

	public WebElement getMouShop() {
		return mouShop;
	}

	public WebElement getMouHome() {
		return mouHome;
	}

	public WebElement getMouGarden() {
		return mouGarden;
	}

	public WebElement getImgClick() {
		return imgClick;
	}

	public WebElement getImgBonsai() {
		return imgBonsai;
	}

	public WebElement getBtnSelect() {
		return btnSelect;
	}

	public WebElement getBtnCart() {
		return btnCart;
	}
	
	
}
