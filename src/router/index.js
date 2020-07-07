import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue"
import RoomsDetail from "@/components/RoomsDetail.vue"
import SingleRoom from "@/components/SingleRoom.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    }, {
      path: "/RoomsDetail",
      name: "RoomsDetail",
      component: RoomsDetail,
      children: [
        {
          path: ":id",
          component: SingleRoom,
        }
      ]
    }
  ]
})
