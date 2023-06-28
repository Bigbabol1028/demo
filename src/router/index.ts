import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Admin_Owner',
    name: 'Admin_Owner',
    component: () => import('../menu/Admin_Owner.vue')
  },
  {
    path: '/IDs_Keys',
    name: 'IDs_Keys',
    component: () => import('../menu/IDs_Keys.vue')
  },
  {
    path: '/Services',
    name: 'Services',
    component: () => import('../menu/Services.vue')
  },
  {
    path: '/Stats',
    name: 'Stats',
    component: () => import('../menu/Stats.vue')
  },
  {
    path: '/Metaverse',
    name: 'Metaverse',
    component: () => import('../menu/Metaverse.vue')
  },
  {
    path: '/Account',
    name: 'Account',
    component: () => import('../menu/Account.vue')
  },
  {
    path: '/Activity',
    name: 'Activity',
    component: () => import('../menu/Activity.vue')
  },
  {
    path: '/Branding',
    name: 'Branding',
    component: () => import('../menu/Branding.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
