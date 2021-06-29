$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumTraining/Virtusa/BDDFrameworkDemo/src/test/java/com/qa/features/Amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Validating an amazon application",
  "description": "",
  "id": "validating-an-amazon-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "check the search item action",
  "description": "",
  "id": "validating-an-amazon-application;check-the-search-item-action",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user is on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "select \"\u003cName\u003e\" as Category",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter \"\u003cItemName\u003e\" into search textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click the magnifier button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "get all the items displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "validating-an-amazon-application;check-the-search-item-action;",
  "rows": [
    {
      "cells": [
        "Name",
        "ItemName"
      ],
      "line": 22,
      "id": "validating-an-amazon-application;check-the-search-item-action;;1"
    },
    {
      "cells": [
        "Books",
        "Da vinci code"
      ],
      "line": 23,
      "id": "validating-an-amazon-application;check-the-search-item-action;;2"
    },
    {
      "cells": [
        "Electronics",
        "Mobile phones"
      ],
      "line": 24,
      "id": "validating-an-amazon-application;check-the-search-item-action;;3"
    },
    {
      "cells": [
        "Furniture",
        "Wooden Tables"
      ],
      "line": 25,
      "id": "validating-an-amazon-application;check-the-search-item-action;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3154300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Lauching and configuring the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_browser_is_launched()"
});
formatter.result({
  "duration": 11768385400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.enter_the_URL()"
});
formatter.result({
  "duration": 8279165800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "check the search item action",
  "description": "",
  "id": "validating-an-amazon-application;check-the-search-item-action;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user is on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "select \"Books\" as Category",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter \"Da vinci code\" into search textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click the magnifier button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "get all the items displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_page()"
});
formatter.result({
  "duration": 1339974000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 8
    }
  ],
  "location": "AmazonStepDefinition.select_as_Category(String)"
});
formatter.result({
  "duration": 1074553900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Da vinci code",
      "offset": 7
    }
  ],
  "location": "AmazonStepDefinition.enter_into_search_textbox(String)"
});
formatter.result({
  "duration": 717490600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_magnifier_button()"
});
formatter.result({
  "duration": 3684713600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.get_all_the_items_displayed()"
});
formatter.result({
  "duration": 2316004200,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 782226600,
  "status": "passed"
});
formatter.after({
  "duration": 200400,
  "status": "passed"
});
formatter.before({
  "duration": 330600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Lauching and configuring the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_browser_is_launched()"
});
formatter.result({
  "duration": 5011626100,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.enter_the_URL()"
});
formatter.result({
  "duration": 5958999200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "check the search item action",
  "description": "",
  "id": "validating-an-amazon-application;check-the-search-item-action;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user is on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "select \"Electronics\" as Category",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter \"Mobile phones\" into search textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click the magnifier button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "get all the items displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_page()"
});
formatter.result({
  "duration": 1004827900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 8
    }
  ],
  "location": "AmazonStepDefinition.select_as_Category(String)"
});
formatter.result({
  "duration": 345892300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile phones",
      "offset": 7
    }
  ],
  "location": "AmazonStepDefinition.enter_into_search_textbox(String)"
});
formatter.result({
  "duration": 1065917800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_magnifier_button()"
});
formatter.result({
  "duration": 8110956900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.get_all_the_items_displayed()"
});
formatter.result({
  "duration": 722383800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1220408900,
  "status": "passed"
});
formatter.after({
  "duration": 219300,
  "status": "passed"
});
formatter.before({
  "duration": 873300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Lauching and configuring the browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "the browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_browser_is_launched()"
});
formatter.result({
  "duration": 3379953300,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.enter_the_URL()"
});
formatter.result({
  "duration": 6208765100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "check the search item action",
  "description": "",
  "id": "validating-an-amazon-application;check-the-search-item-action;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user is on amazon page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "select \"Furniture\" as Category",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter \"Wooden Tables\" into search textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click the magnifier button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "get all the items displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_page()"
});
formatter.result({
  "duration": 837540700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Furniture",
      "offset": 8
    }
  ],
  "location": "AmazonStepDefinition.select_as_Category(String)"
});
formatter.result({
  "duration": 610683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wooden Tables",
      "offset": 7
    }
  ],
  "location": "AmazonStepDefinition.enter_into_search_textbox(String)"
});
formatter.result({
  "duration": 979223000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_magnifier_button()"
});
formatter.result({
  "duration": 5083862900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.get_all_the_items_displayed()"
});
formatter.result({
  "duration": 487483900,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1419306500,
  "status": "passed"
});
formatter.after({
  "duration": 139800,
  "status": "passed"
});
});