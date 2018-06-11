"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @disc:浏览器实例
 * headless 模式浏览
 * @author:yanxinaliang
 * @time：2018/6/10 15:12
 */
const selenium_webdriver_1 = require("selenium-webdriver");
const firefox_1 = require("selenium-webdriver/firefox");
var BrowserType;
(function (BrowserType) {
    BrowserType["CHROME"] = "chrome";
    BrowserType["EDGE"] = "MicrosoftEdge";
    BrowserType["FIREFOX"] = "firefox";
    BrowserType["IE"] = "internet explorer";
    BrowserType["INTERNET_EXPLORER"] = "internet explorer";
    BrowserType["SAFARI"] = "safari";
})(BrowserType = exports.BrowserType || (exports.BrowserType = {}));
class Browser {
    constructor(browserType) {
        const option = new firefox_1.Options();
        option.headless();
        this.browser = new selenium_webdriver_1.Builder().forBrowser(browserType).setFirefoxOptions(option).build();
    }
    async open(url) {
        // await this.browser.actions().keyDown(Key.CONTROL).sendKeys("t").keyUp(Key.CONTROL).perform();// 创建一个新标签页
        return await this.browser.get(url);
    }
    async screenShot() {
        return await this.browser.takeScreenshot();
    }
    async findElementByID(id) {
        return this.browser.findElement(selenium_webdriver_1.By.id(id));
    }
    async findElementByClass(className) {
        return this.browser.findElement(selenium_webdriver_1.By.className(className));
    }
    async findElementsByClass(className) {
        return this.browser.findElements(selenium_webdriver_1.By.className(className));
    }
    async elementShot(element, scroll) {
        return element.takeScreenshot(scroll);
    }
    async executeScript(script) {
        return this.browser.executeScript(script);
    }
    async quit() {
        return await this.browser.quit();
    }
}
exports.Browser = Browser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7R0FLRztBQUNILDJEQUc0QjtBQUM1Qix3REFBbUQ7QUFFbkQsSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ25CLGdDQUFlLENBQUE7SUFDZixxQ0FBb0IsQ0FBQTtJQUNwQixrQ0FBaUIsQ0FBQTtJQUNqQix1Q0FBc0IsQ0FBQTtJQUN0QixzREFBcUMsQ0FBQTtJQUNyQyxnQ0FBZSxDQUFBO0FBQ25CLENBQUMsRUFQVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU90QjtBQUdEO0lBRUksWUFBWSxXQUF1QjtRQUMvQixNQUFNLE1BQU0sR0FBUyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUNuQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDRCQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0YsQ0FBQztJQUNNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBVTtRQUN4QiwyR0FBMkc7UUFDM0csT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxLQUFLLENBQUMsVUFBVTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ00sS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFTO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsdUJBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ00sS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQWdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsdUJBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00sS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQWdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ00sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFrQixFQUFDLE1BQWU7UUFDdkQsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ00sS0FBSyxDQUFDLElBQUk7UUFDYixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0NBQ0o7QUFFTywwQkFBTyJ9