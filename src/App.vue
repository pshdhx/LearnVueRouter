<template>
  <div id="app">
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'pshdhx',age:24,height:1.65 }}">档案</router-link>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>  -->
    <!-- keepalive避免每次组件切换销毁 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lisi',
    }
  },
  methods:{
    homeClick(){
      this.$router.push('/home');
    },
    aboutClick(){
      this.$router.replace('/about');
    }
  }
}
</script>

<style>
  .router-link-active{ 
    color:red;
  }
  .active{
    color:yellow;
  }

</style>
