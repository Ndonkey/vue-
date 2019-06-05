import axios from 'axios';
import util from './local';
import store from '../store';

class AjaxRuquest {
    constructor(){
        this.baseURL = process.env.NODE_ENV == 'development'?'http://localhost:3000':'/';
        this.timeout = 3000;
        this.queue = {}//定义队列
    }
    merge(options){}
        // let config = this.merge(options);
        return {baseURL:this.baseURL,tineout:this.timeout,...options}
    }
    setInterceptors(instance){
        // 设置请求拦截器
        instance.interceptors.request.use(
            // config => config,
            (config) => {
                this.queue[url] = url;
                if(Object.keys(this.queue).length){
                    console.log('显示loading')
                    store.commit('showloading')
                };
                config.hearders.authoraziton = 'token';
                util.getlocal('token');
                return config;
            },
            (err) => {
                Promise.reject(err);
            }
        )
        // 设置响应拦截器
        instance.interceptors.response.use(
            res => {
                delete this.queue[url]
                if(Object.keys(this.queue).length == 0){
                    // 用定时模拟1秒后响应完成
                    setTimeout(()=>{
                        store.commit('hideloading')
                        console.log('隐藏loading')
                    },1000)
                }
                return res.data;
            },
            (err) => {
                Promise.reject(err);
            }
        )
    }
    request(options){
        // 把传进来的参数和默认参数进行合并
        const instance = axios.create();
        const config = this.merge(options);
        this.setInterceptors(instance,options.url);
        return instance(config);
    }
}

export default new AjaxRuquest();
// AjaxRuquest.request({
//  urk
// })