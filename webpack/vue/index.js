import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import index from './views/index.vue'
import inicio from './views/templates/inicio/inicio.vue'
import dashboard from './views/templates/inicio/dashboard.vue'
import routerVW from './views/templates/inicio/routerVW.vue'
import pedidos from './views/templates/inicio/pedidos.vue'

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect: "/inicio",

        },
        {
            path:'/inicio',
            name:"inicio",
            component: inicio,
        },
        {
            path:'/dashboard',
            name:"routerVW",
            component: routerVW,
            children:[
                {
                    path:'/',
                    name:"dashboard",
                    component:dashboard,
                },
                {
                    path:'pedidos',
                    name:"pedidos",
                    component:pedidos,
                }
            ]
        },
        {
            path:"*",
            redirect:"/inicio",
        }
    ]
});

const app = new Vue({
    router,
    render: createEle => createEle(index)

}).$mount('#app');