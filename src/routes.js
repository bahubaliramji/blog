import {createWebHistory,createRouter} from 'vue-router'
import RoutesC from './components/RoutesC.vue'
import ProfilePage from './components/ProfilePage.vue'
import LoginPage from './components/LoginPage.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:RoutesC
    },
    {
        name:'Login',
        path:'/login',
        component:LoginPage
    },
    {
        name:'Profile',
        path:'/profile/:name',
        component:ProfilePage
    },
    {
        name:'NotFound',
        path:'/:pathMarch(.*)*',
        component:PageNotFound
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;