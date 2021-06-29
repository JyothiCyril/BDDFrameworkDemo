package com.qa.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features="D:\\SeleniumTraining\\Virtusa\\BDDFrameworkDemo\\src\\test\\java\\com\\qa\\features\\Amazon.feature",
		glue="com.qa.stepdefinition",
		strict=true,
		format= {"pretty","html:test-output"},
		monochrome=true,
		tags= {"@End2EndTest"}

		)


// "@SmokeTest" --> all the scenario labeled smoke test will be executed
//~@SmokeTest --> except smoke test all other will be executed
// "@RegressionalTest","@End2EndTest" --> RegressionTest and End2EndTest will executed
// "@RegressionalTest,@SmokeTest" --> either regressional or smoke will be executed.

public class AmazonTestRunner {

}
