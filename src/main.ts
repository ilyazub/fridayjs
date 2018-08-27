import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import Event from './pages/Event.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            name: 'Event',
            path: '/events/:id',
            component: Event,
            props: true,
        }
    ],
});

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App }
});
