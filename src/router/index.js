import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DealsView from '../views/DealsView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import WhatsNewView from '../views/WhatsNewView.vue'
import AccountView from '../views/AccountView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/DealsView',
      name: 'DealsView',
      component: DealsView
    },
    {
      path: '/DeliveryView',
      name: 'DeliveryView',
      component: DeliveryView
    },
    {
      path: '/WhatsNewView',
      name: 'WhatsNewView',
      component: WhatsNewView
    },
    {
      path: '/AccountView',
      name: 'AccountView',
      component: AccountView
    },
    {
      path: '/CartView',
      name: 'CartView',
      component: CartView
    }
  ]
})

export default router
