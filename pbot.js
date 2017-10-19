#!/usr/bin/env node
/**
 * @fileoverview An example WebDriver script.
 *
 * Before running this script, ensure that Mozilla's geckodriver is present on
 * your system PATH: <https://github.com/mozilla/geckodriver/releases>
 *
 * Usage:
 *   // Default behavior
 *   node selenium-webdriver/example/google_search.js
 *
 *   // Target Chrome locally; the chromedriver must be on your PATH
 *   SELENIUM_BROWSER=chrome node selenium-webdriver/example/google_search.js
 *
 *   // Use a local copy of the standalone Selenium server
 *   SELENIUM_SERVER_JAR=/path/to/selenium-server-standalone.jar \
 *     node selenium-webdriver/example/google_search.js
 *
 *   // Target a remote Selenium server
 *   SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
 *     node selenium-webdriver/example/google_search.js
 */

const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.decisionproblem.com/paperclips/index2.html')
    .then(_ => driver.findElement(By.id('btnMakePaperclip')))
    .then(btn => setInterval(
        function(){
            btn.click();
        }, 10));

//var q = driver.wait(driver.findElement(By.id('btnMakePaperclip')).isClickable(), 15);
//    return driver.isElementPresent(By.id('btnMakePaperclip')).isClickable();

//var counter = 0;
//var i = setInterval(function(){
//driver.wait(
//    until.elementLocated(By.id('btnMakePaperclip')), 5 * 1000).then(_ => {
//        return true;
//    return driver.isElementPresent(By.id('btnMakePaperclip')).isClickable();
//});

//    q.findElement(By.id('btnMakePaperclip')).click();

//    counter++;
//    if(counter === 100) {
//        clearInterval(i);
//    }
//}, 50);

//    .then(_ =>
//        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
//    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
