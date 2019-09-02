package com.stepDefinition;

import com.resources.BaseCls;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseCls {
	@Before
	public void launching() {
		launch("http://www.amazon.iN");

	}

	@After
	public void closing() {
		close();

	}

}
