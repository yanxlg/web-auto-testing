"use strict";
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
    let image = await browser.takeScreenshot();
    console.log(image);
    console.timeEnd("screenShot");
    await browser.switchTo().window("new", browser);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRztBQUNILE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztLQUM1RCxLQUFLLEVBQUUsQ0FBQztBQUVULEtBQUs7SUFDRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBQyxNQUFNLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHOUIsTUFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQztJQUUvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkE0QjJCO0FBRS9CLENBQUM7QUFFRCxVQUFVLEVBQUUsQ0FBQyJ9