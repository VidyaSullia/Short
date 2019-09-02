@tag
Feature: User check the amazon shopping functionality

  Background: User verify login page
    Given User verify url and title

  @tag2
  Scenario Outline: User Login amazon website and order products
    Given User enter username and password "<username>" and "<password>"
    When User select the product for purchase
    Then User add product to cart

    Examples: 
      | username   | password   |
      | 8553077283 | WeAreHappy |
      | vidyashreedhara@gmail.com | kavidya5   |

      
  