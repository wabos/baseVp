import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HoC1 from '@/components/HoC1';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path:'hc',
          component:HoC1
        }
      ]
    },
    {
      path:'/aaa',
      component:HoC1
    }
  ]
})
