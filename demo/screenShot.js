"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @disc:截图
 * @author:yanxinaliang
 * @time：2018/6/10 16:16
 */
const Browser_1 = require("../src/Browser");
const instance = new Browser_1.Browser(Browser_1.BrowserType.FIREFOX);
async function screenShot() {
    await instance.open('http://www.baidu.com');
    const elements = await instance.findElementsByClass("mnav");
    for (let i = 0; i < elements.length; i++) {
        console.time("element" + i);
        const image = await instance.elementShot(elements[i]);
        console.log(image);
        console.timeEnd("element" + i);
    }
}
screenShot();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuU2hvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjcmVlblNob3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztHQUlHO0FBQ0gsNENBQW9EO0FBR3BELE1BQU0sUUFBUSxHQUFDLElBQUksaUJBQU8sQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELEtBQUs7SUFDRCxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUU1QyxNQUFNLFFBQVEsR0FBRyxNQUFPLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQztRQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBQyxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQztBQUVMLENBQUM7QUFFRCxVQUFVLEVBQUUsQ0FBQyJ9