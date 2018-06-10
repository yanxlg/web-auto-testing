/**
 * @disc:浏览器实例
 * @author:yanxinaliang
 * @time：2018/6/10 15:12
 */
import {
    Builder, By, ThenableWebDriver,
    WebElement
} from 'selenium-webdriver';

export enum BrowserType{
    CHROME='chrome',
    EDGE='MicrosoftEdge',
    FIREFOX='firefox',
    IE='internet explorer',
    INTERNET_EXPLORER='internet explorer',
    SAFARI='safari'
}


class Browser{
    private browser:ThenableWebDriver;
    constructor(browserType:BrowserType){
        this.browser = new Builder().forBrowser(browserType).build();
    }
    public async open(url:string){
        // await this.browser.actions().keyDown(Key.CONTROL).sendKeys("t").keyUp(Key.CONTROL).perform();// 创建一个新标签页
        return await this.browser.get(url);
    }
    public async screenShot(){
        return await this.browser.takeScreenshot();
    }
    public async findElementByID(id:string){
        return this.browser.findElement(By.id(id));
    }
    public async findElementByClass(className:string){
        return this.browser.findElement(By.className(className));
    }
    public async findElementsByClass(className:string){
        return this.browser.findElements(By.className(className));
    }
    public async elementShot(element:WebElement,scroll?:boolean){
        return await element.takeScreenshot(scroll);
    }
    public async quit(){
        return await this.browser.quit();
    }
}

export {Browser};