#!/usr/bin/env node
const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.decisionproblem.com/paperclips/index2.html')
    .then(_ => {
        // Make paperclips loop
        let btnMakeClip = driver.findElement(By.id('btnMakePaperclip'));
        let loop = function() {
            btnMakeClip.click().then(loop);
        };
        process.nextTick(loop);
});
