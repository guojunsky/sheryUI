
/**
 * 小程序打包
 * 支持页面组件打包
 * 原生组件方式
 */



require('shelljs/global');
const webpack = require('webpack');
const fs = require('fs');
const { resolve } = require('path');
const r = url => resolve(__dirname, url); 

const webpackConfig = require('./webpack.config');
const minaConfig = require(r('./minap.config'));
const assetsPath = r('../dist');
const componentsPath = './components';

var renderConfig = webpackConfig;

/**
 * 获取入口 支持分包
 * @param {*} pages 
 */
function getEntry(config, entrys, root = './'){
   Object.assign(entrys, config.pages.reduce((en, i) => {
    en[i] = resolve(process.cwd(), root, `${i}.vue`)
    return en;
  }, {}));
  if(Array.isArray(config.subPackages) && config.subPackages.length>0 ){
     config.subPackages.forEach((it)=>{
          getEntry(it, entrys, it.root);
     })
  }
}

const entrys = {};
getEntry(minaConfig.json, entrys, './');


// 组件编译
if(Array.isArray(minaConfig.components) && minaConfig.components.length>0){
    Object.assign(entrys, minaConfig.components.reduce((p,n)=>{
    p[n] = resolve(process.cwd(), './', `${n}.vue`)
    return p;
   }, {}))
}

renderConfig.entry = entrys;
renderConfig.entry.app = minaConfig.app

renderConfig.output = {
  path: r('../dist'),
  filename: '[name].js'
}

var compiler = webpack(renderConfig);

//复写packageJSON 文件
fs.writeFileSync(r('../dist/app.json'), JSON.stringify(minaConfig.json), 'utf8');

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, (err, stats) => {
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: true,
    chunks: true,
    chunkModules: true
  }) + '\n\n')
});

