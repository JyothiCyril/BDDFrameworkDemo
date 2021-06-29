Feature: Validating an amazon application
Background: Lauching and configuring the browser
Given the browser is launched
Then enter the URL

@SmokeTest
Scenario: check the title of the amazon page
Given the user is on amazon page
When the title has the amazon as keyword
Then close the browser

@End2EndTest
Scenario Outline: check the search item action
Given the user is on amazon page
Then select "<Name>" as Category
Then enter "<ItemName>" into search textbox
And click the magnifier button
Then get all the items displayed
Then close the browser

Examples:
|Name         |ItemName     |
|Books        |Da vinci code|
|Electronics  |Mobile phones|
|Furniture    |Wooden Tables|

@SmokeTest
Scenario: Check the footerlinks
Given the user is on amazon page
Then get all the footer links
Then close the browser

@RegressionalTest
Scenario: Check the registration action
Given the user is on amazon page
Then move the cursor position on account and list item
Then select start here link
Then check if the user is landed on the registration page
Then enter the "jyothicyril" as user name
Then close the browser

@RepeatedInputTest
Scenario: Check the registration action
Given the user is on amazon page
Then move the cursor position on account and list item
Then select start here link
Then check if the user is landed on the registration page
Then enter the value as user name
|JyothiCyril|
|Kim Smith|
|Roger Blake|
Then close the browser