package com.lyndsey.littlecreatures.little_creatures_backend;

import org.junit.platform.suite.api.ConfigurationParameter;
import org.junit.platform.suite.api.IncludeEngines;
import org.junit.platform.suite.api.SelectClasspathResource;
import org.junit.platform.suite.api.Suite;

import static io.cucumber.junit.platform.engine.Constants.GLUE_PROPERTY_NAME;

@Suite
@IncludeEngines("cucumber")
@SelectClasspathResource("com/lyndsey/littlecreatures/little_creatures_backend")
@ConfigurationParameter(key = GLUE_PROPERTY_NAME, value = "com.lyndsey.littlecreatures.little_creatures_backend")
public class RunCucumberTest {
}