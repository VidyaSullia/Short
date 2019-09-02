package com.stepDefinition;

import com.objectRepository.Locator;
import com.resources.BaseCls;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AmazonStep extends BaseCls {
	
	
	@Given("^User verify url and title$")
	public void user_verify_url_and_title()  {
	 verifyUrl("amazon");
	 verifyTitle("Online");  
	   
	}

	@Given("^User enter username and password \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_username_and_password_and(String us, String ps)  {
		Locator l=new Locator();
	    btn(l.getBtnSign()); 
	    type(l.getTxtEmail(), us);
	    btn(l.getBtnContinue());
	    type(l.getTxtPass(), ps);
	    btn(l.getBtnSubmit());
	   
	}

	@When("^User select the product for purchase$")
	public void user_select_the_product_for_purchase()  {
	   Locator loc=new Locator();
	   moveTo(loc.getMouShop(), loc.getMouHome(), loc.getMouGarden());
	   btn(loc.getImgClick());
	   btn(loc.getImgBonsai());
	   
	}

	@Then("^User add product to cart$")
	public void user_add_product_to_cart()  {
	   Locator lr=new Locator();
	   btn(lr.getBtnSelect());
	   
	   
	}

}
