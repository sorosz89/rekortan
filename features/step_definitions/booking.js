'use strict';

module.exports = function () {

    this.Given(/^the rekortan booking page is opened$/, () => {
        driver.get("http://www.debrecenijegcsarnok.hu/palyafoglalas/uj.php?rekortan");
        driver.wait(() => driver.findElement(by.css('.cimsor')).isDisplayed());
        return driver.sleep(1000);
    });

    this.When(/^the datum: (.+) is added to the date field$/, date =>{
        let day = date.split(" ")[0];
        let number = date.split(" ")[1];
        let dayClass = `.${day}`;
        console.log(day);
        driver.findElement(by.css('input#datum')).click();
        driver.sleep(500);
        driver.findElement(by.xpath('//div[contains(text(),"' + number + '") and contains(@class, "' + day + '")]')).click();
        return driver.sleep(1000);
    });

    this.When(/^the Tovább button is clicked$/, () => {
        driver.findElement(by.css('.felvetel')).click();
        return driver.sleep(1000);
    });

    this.When(/^the (kezdes|vege|tevekenyseg) is clicked$/, item => {
        let selector = `select[name="${item}"]`;
        driver.findElement(by.css(selector)).click();
        return driver.sleep(1000);
    });

    this.When(/^the (.+) (kezdes|vege) time is selected$/, (time, state) => {
       let selector = `select[name="${state}"] > option[value="${time}"]`;
        driver.findElement(by.css(selector)).click();
        return driver.sleep(1000);
    });

    this.When(/^the elerhetőseg (.+) is entered$/, mail =>{
         driver.findElement(by.css('input[name="elerhetoseg"]')).sendKeys(mail);
         return driver.sleep(1000);
    })
    this.When(/^the name (.+) is entered$/, mail =>{
        driver.findElement(by.css('input[name="nev"]')).sendKeys(mail);
        return driver.sleep(1000);
    })

    this.Then(/^the details page should be visible$/, () =>{
       return expect(driver.findElement(by.css('.cimsor')).isDisplayed()).to.eventually.be.true; 
    });
  
};
