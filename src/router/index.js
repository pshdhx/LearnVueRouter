import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

//import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
const Home =()=>import('../components/Home')
//const Home1 =  ()=>import('../components/Home') //懒加载 不同的组件打包成不同的js
const News = ()=> import('../components/HomeNews')
const Message = ()=>import('../components/HomeMessage')
const Profile = ()=>import('../components/Profile')
const routes = [
  {
    path:'/',
    redirect:'/home',
    
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页',
    },
    children:[
/*       {
        path:'/',
        redirect:'news'
      },
 */      {
        path:'news',
        component:News
      },
      {
        path:'message',
        component:Message
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于',
    },
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户',
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案',
    },
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  //设置活跃路由样式属性
  linkActiveClass:'active'
})
//全局导航守卫 这是前置钩子
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title   // to from next的顺序不能错
  next()  //必须得调用next，因为重写了；

})

//后置钩子
router.afterEach((to,from)=>{

})

export default router
