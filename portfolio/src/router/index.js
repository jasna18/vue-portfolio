import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from '../components/layout/DefaultLayout.vue'
import HomePage from '../page/HomePage.vue'

const routes = [
    {
        path:"/",
        component:DefaultLayout,
        children:[
            {
            path:"",
            name:"home",
            component: HomePage
            },
        ]
    },
];
  
    

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router