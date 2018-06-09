/**
 * @disc:贾平功能测试
 * @author:yanxinaliang
 * @time：2018/6/9 14:59
 */
const webdriver = require('selenium-webdriver');
console.time("screenShot");
const browser = new webdriver.Builder().forBrowser('firefox')
.build();

async function screenShot() {
    await browser.get('http://www.baidu.com');
    let image=await browser.takeScreenshot();
    console.log(image);
    console.timeEnd("screenShot");
    
    
    await browser.switchTo().window("new",browser);
    
    /*
    console.time("shot1");
    await browser.get('https://segmentfault.com/a/1190000008677697');
    image=await browser.takeScreenshot();
    console.log(image);
    console.timeEnd("shot1");
    
    
    console.time("shot2");
    await browser.get('https://www.cnblogs.com/fnng/p/5854875.html');
    image=await browser.takeScreenshot();
    console.log(image);
    console.timeEnd("shot2");
    
    
    console.time("shot3");
    await browser.get('http://imgbase64.duoshitong.com/');
    image=await browser.takeScreenshot();
    console.log(image);
    console.timeEnd("shot3");
    
    
    console.time("shot4");
    await browser.get('https://www.cnblogs.com/zxm2016-6/p/6762424.html');
    image=await browser.takeScreenshot();
    console.log(image);
    console.timeEnd("shot4");*/
    
}

screenShot();