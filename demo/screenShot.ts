/**
 * @disc:截图
 * @author:yanxinaliang
 * @time：2018/6/10 16:16
 */
import {Browser, BrowserType} from '../src/Browser';


const instance=new Browser(BrowserType.FIREFOX);
async function screenShot() {
    await instance.open('http://www.baidu.com');
    
    const elements = await  instance.findElementsByClass("mnav");
    for(let i=0;i<elements.length;i++){
        console.time("element"+i);
        const image=await instance.elementShot(elements[i]);
        console.log(image);
        console.timeEnd("element"+i);
    }
    
}

screenShot();