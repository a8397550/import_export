# 导入导出

## webpack
webpack 是用来做前端代码构建工具，它可以用来管理项目的build(编译)，它需要配置webpack.config.js文件
npm install --save-dev webpack webpack-cli

## babel 
babel 是用来做代码转换的，它可以将ES6的代码转换为es5的代码，作为预编译的工具存在
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/polyfill

@babel/cli 命令行工具
@babel/core babel的核心
@babel/preset-env 预设项设置 stage-0，stage-1，stage-2，stage-3
  stage-0~stage-3表示的是对javascript版本的支持情况
    stage-0 包含 stage-1，stage-2，stage-3 它的意思是，它对javascript标准的一些提案都最大限度支持
    stage-1 包含 stage-2，stage-3 它的意思是，它对javascript标准的一些提案支持
    stage-2 包含 stage-3 它的意思是，它对javascript标准的草案支持
    stage-3 就只有它自己了 它就比较严格了，它只支持标准
@babel/polyfill polyfill polyfill是为浏览器不支持的语法提供兼容语法的方式

javascript 标准化，它有一个标准组织，在这个组织下有一系列的公司
  由一些有权限提案的公司，进行一些，方案的提交
  审核，进入草案
  通过，进入标准

将index.js 通过babel转换为es5的代码
./node_modules/.bin/babel index.js -o app.index.js

### babel配置文件
  创建babel.config.js

## 导入导出的四种方式

ES6, AMD, CMD, COMMONJS

### es6
import 
export
export default

``` javascript
export const a = 1;
export const b = 2;
export const c = 3;
export default {a:1, b: 2, c: 3}
```

``` javascript
// 解构赋值 
const obj = {a: 1, b: 2, c: 3};
const {a,b,c} = obj;
console.log(a);
console.log(b);
console.log(c);

/*
var obj = {a: 1, b: 2, c: 3};
var a = obj.a;
var b = obj.b;
var c = obj.c;
*/
```

### amd
AMD 是推崇依赖前置。要提前导入与加载
require.js 
<script src="https://requirejs.org/docs/release/2.3.6/comments/require.js">
### cmd
CMD 是推崇依赖就近。可以按需加载

### commonjs 注意：nodejs使用这种方式
const xxx = require('moduleName');

exports.xxx = 'xxx';
module.exports = {
}
