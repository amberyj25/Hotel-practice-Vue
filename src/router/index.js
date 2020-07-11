import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import About from "@/components/About.vue"
import Sale from "@/components/Sale.vue"
import SingleRoom from "@/components/SingleRoom.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    }, {
      path: "/About",
      name: "About",
      component: About
    }, {
      path: "/Sale",
      name: "Sale",
      component: Sale,
    }, {
      path: "/SingleRoom/:id",
      name: "SingleRoom",
      component: SingleRoom,
    }
  ]
})
