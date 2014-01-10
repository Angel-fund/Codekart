
/**
 * ===================================================
 * 欢迎使用node前后端一体开发框架 codekart ！
 * ===================================================
 *
 * 这是一个开源框架，你可以任意修改和使用它（包括但不限于技术研究与分享、开源项目或者商业产品）。
 *
 * 本框架最初来自 君鉴网(jojoin.com) 的开发实战和积累，如今你可以在下面的地址找到它并下载和学习使用：
 * ┌───────────────────────────┐
 * │项目地址：https://github.com/myworld4059/codekart
 * │wiki 地址：https://github.com/myworld4059/codekart/wiki
 * └───────────────────────────┘
 *
 * 也欢迎你联系本框架的作者，提出建议或者bug，进行技术交流：
 * ┌───────────────────────────┐
 * │作者：杨捷
 * │邮箱：myworld4059@163.com
 * │QQ  ：446342398
 * └───────────────────────────┘
 *
 */




/**
 * 加载全局函数
 */
require('./framework/function.js');



/**
 * 加载url路由规则
 */
load.config('route');




//取消下面的注释，可以修改默认端口配置
//config.port.http = 81;
//config.port.websocket = 82;


/**
 * 启动web服务器
 */
load.core('server').run(); //





/*
 var path = '/'.split('/');
 console.log(path);




var tmpl = load.tool('tmpl');

var render = tmpl('<div>  " "  [#=abc#]</div>');

console.log(render);

console.log(render({abc:123}));


 */



















