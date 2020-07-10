import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import about from "@/components/about.vue"
import SingleRoom from "@/components/SingleRoom.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    }, {
      path: "/about",
      name: "about",
      component: about
    }, {
      path: "/SingleRoom/:id",
      name: "SingleRoom",
      component: SingleRoom,
    }
  ]
})
