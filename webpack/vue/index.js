import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import index from './views/index.vue'
import inicio from './views/templates/inicio/inicio.vue'

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
            path:"*",
            redirect:"/inicio",
        }
    ]
});

const app = new Vue({
    router,
    render: createEle => createEle(index)

}).$mount('#app');