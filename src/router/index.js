import Vue from 'vue'
import VueRouter from 'vue-router'
import entrada from "../components/entrada.vue";
import Inicio from "../components/inicio"
import contenido from "../components/contenido";
Vue.use(VueRouter)

const routes = [
  {
     path: '/',
     name: 'inicio',
     component: Inicio
  },
 {
     path: '/entrada',
     name: 'entrada',
     component : entrada,
    
    children: [
      {
       path: '/contenido',
       name: 'contenido',
       component: contenido,
      },
    ],
}
]


  const router = new VueRouter({
    mode: "history",
  base: process.env.BASE_URL,
    routes
})

export default router