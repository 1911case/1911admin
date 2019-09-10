### 这里是马骏分支

#### 文件目录结构
pages 页面
components 组件
style 样式
utils 公有的库和插件
router 路由文件
store 全局状态管理文件
asset  资源目录  图片  iconfont
### 预处理语言
less  
npm install less less-loader
react 默认不支持less 需要在config webpackconfig.js  把所有的sass变成less
#### UI框架  
antd less 
全局引入  
   npm install antd   
   在index.js import '/antd/dist/antd.css'
按需引入
  npm install babel-plugin-import  
  webpack.config.js babel-loder
 ['import',{'librarName':'antd','style':true}],
 注意本项目的less 版本和antd 的less   版本保持一致  2.7.3
 
### 基本配置
1.起别名
    需要在config webpackconfig.js   alias  
     'style':path.join(__dirname,'路径名')
    path.resolve(__dirname,'路径名')  也可以  
2.服务器代理
    需要在webpackDevServer.config.js 
    proxy:{
      './hehe':{
        target:'http://www.badu.com',
        changeOrigin:true,
        pathRewrite:{
          '^hehe':''
        }
      }
    },

####  公有的库
axios  二次封装
React.Component.prototype.$axios = axios
路由  
react-redux 


### npm

保证npm版本一样   node 版本一样