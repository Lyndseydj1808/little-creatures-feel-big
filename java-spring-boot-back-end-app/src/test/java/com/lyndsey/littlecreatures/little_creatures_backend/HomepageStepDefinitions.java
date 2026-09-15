package com.lyndsey.littlecreatures.little_creatures_backend;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.assertj.core.api.Assertions.assertThat;

public class HomepageStepDefinitions {
    private WebDriver driver;

    @Given("I open the app")
    public void i_open_the_app() {
        driver = new ChromeDriver();
        driver.get("http://localhost:5173/");
    }

    @Then("I should see the homepage title")
    public void i_should_see_the_homepage_title() {
        assertThat(driver.getTitle()).isEqualTo("Little Creatures Feel Big!");
        driver.quit();
    }
}