"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @disc:浏览器实例
 * @author:yanxinaliang
 * @time：2018/6/10 15:12
 */
const selenium_webdriver_1 = require("selenium-webdriver");
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
        this.browser = new selenium_webdriver_1.Builder().forBrowser(browserType).build();
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
        return await element.takeScreenshot(scroll);
    }
}
exports.Browser = Browser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ0gsMkRBRzRCO0FBRTVCLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUNuQixnQ0FBZSxDQUFBO0lBQ2YscUNBQW9CLENBQUE7SUFDcEIsa0NBQWlCLENBQUE7SUFDakIsdUNBQXNCLENBQUE7SUFDdEIsc0RBQXFDLENBQUE7SUFDckMsZ0NBQWUsQ0FBQTtBQUNuQixDQUFDLEVBUFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFPdEI7QUFHRDtJQUVJLFlBQVksV0FBdUI7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDRCQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUNNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBVTtRQUN4QiwyR0FBMkc7UUFDM0csT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxLQUFLLENBQUMsVUFBVTtRQUNuQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ00sS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFTO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsdUJBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ00sS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQWdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsdUJBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00sS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQWdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsdUJBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ00sS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFrQixFQUFDLE1BQWU7UUFDdkQsT0FBTyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBRU8sMEJBQU8ifQ==