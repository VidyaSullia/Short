$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazon.feature");
formatter.feature({
  "line": 2,
  "name": "User check the amazon shopping functionality",
  "description": "",
  "id": "user-check-the-amazon-shopping-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User Login amazon website and order products",
  "description": "",
  "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enter username and password \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User select the product for purchase",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User add product to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products;;1"
    },
    {
      "cells": [
        "8553077283",
        "WeAreHappy"
      ],
      "line": 15,
      "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products;;2"
    },
    {
      "cells": [
        "vidyashreedhara@gmail.com",
        "kavidya5"
      ],
      "line": 16,
      "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17071880977,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User verify login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User verify url and title",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStep.user_verify_url_and_title()"
});
formatter.result({
  "duration": 1108612342,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Login amazon website and order products",
  "description": "",
  "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 7,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enter username and password \"8553077283\" and \"WeAreHappy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User select the product for purchase",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User add product to cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8553077283",
      "offset": 34
    },
    {
      "val": "WeAreHappy",
      "offset": 51
    }
  ],
  "location": "AmazonStep.user_enter_username_and_password_and(String,String)"
});
formatter.result({
  "duration": 10956148445,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStep.user_select_the_product_for_purchase()"
});
formatter.result({
  "duration": 15687388096,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStep.user_add_product_to_cart()"
});
formatter.result({
  "duration": 1942408754,
  "status": "passed"
});
formatter.before({
  "duration": 18730709146,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User verify login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User verify url and title",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonStep.user_verify_url_and_title()"
});
formatter.result({
  "duration": 65393075,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Login amazon website and order products",
  "description": "",
  "id": "user-check-the-amazon-shopping-functionality;user-login-amazon-website-and-order-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 7,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enter username and password \"vidyashreedhara@gmail.com\" and \"kavidya5\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User select the product for purchase",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User add product to cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vidyashreedhara@gmail.com",
      "offset": 34
    },
    {
      "val": "kavidya5",
      "offset": 66
    }
  ],
  "location": "AmazonStep.user_enter_username_and_password_and(String,String)"
});
formatter.result({
  "duration": 11842324089,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStep.user_select_the_product_for_purchase()"
});
formatter.result({
  "duration": 15215782241,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStep.user_add_product_to_cart()"
});
formatter.result({
  "duration": 1943086794,
  "status": "passed"
});
});