import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import VueCookies from 'vue-cookies';
// import special_exercises from '../view/special_exercises/special_exercises.vue'
// import Index from '../view/index/index.vue'


// const routes=Array<import('vue-router').RouteRecordRaw>[
// 	{
// 		path: '/',
// 		name: 'index',
// 		component: Index
// 	},
// 	{
// 		path: '/special_exercises',
// 		name: 'special_exercises',
// 		component:special_exercises
// 	}

// ]
const router = createRouter({
	history:createWebHistory(import.meta.env.BASE_URL),
	routes
	
})
//路由守卫
router.beforeEach((to,from,next)=>{
  // if(to.matched.length===0){
  //   next('/404')
  // }
  if(VueCookies.get("user")){
	if(to.path=="/"){
		next('/index')
	}
    next()
  }else{
    if(to.path==='/'){
      next()
    }else {
      next('/')
    }
  }
})
export default router;