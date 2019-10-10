const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    runtimeCompiler: true,
    //允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: (config) => {
        //命名 
        config.resolve.alias
        .set('styles', resolve('src/assets/styles'))
        //打包文件带hash
        config.output.filename('[name].[hash].js').end(); 
    },
    devServer: {
        open: true, //配置自动启动浏览器
        proxy: {// 配置跨域处理 可以设置多个
        '/api': {
            target: 'xxxx',
            ws: true,
            changeOrigin: true
        },
        }
    }
}