## vue结合jwt

1.npm install iview --save
2.请求没完成之前有遮罩   请求完成之后隐藏
3.每次请求都会传入一个url  发请求时我们用队列存储这个url  每次响应回来之后我们删除url一次  url不在有了表示所有请求结束了

## 使用
cd mock | node app.js 运行服务端
运行 npm run serve 启动客户端