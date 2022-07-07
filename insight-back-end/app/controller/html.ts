/**
 *  所有的页面路由
 * @param app
 * @returns {HtmlController}
 */
 const path = require('path');
 const fs = require('fs');
 const Controller = require('egg').Controller;
 class HtmlController extends Controller {
   async robotIndex() {
     const { ctx } = this;
     ctx.response.type = 'html';
     ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html'));
   }
 }
 module.exports = HtmlController;