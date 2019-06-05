<template>
  <div class="login">
    <div>
      <i-input :value.sync="user" placeholder="请输入用户名" style="width: 300px"></i-input>
      <i-input :value.sync="pass" placeholder="请输入密码" style="width: 300px"></i-input>
    </div>
    <i-button @click="login" type="success">登录</i-button>
  </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
  name:'login',
  data(){
    return{
      user:"1234",
      pass:"2222"
    }
  },
  methods:{
    ...mapActions(['tologin']),
    login(){
      //登录
      this.tologin({user:this.user,pass:this.pass})
    }
  }
}
</script>
