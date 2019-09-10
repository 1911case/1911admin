import React from 'react';
import {Button} from 'antd'
function App(props) {  //组件标签里面的东西需要用props接受 children
  return (
    <div className="App">
     
       {props.children}
       {/* 把router里面的路由放到app里面 ，实现功能单一化 */}
    </div>
  );
}

export default App;
