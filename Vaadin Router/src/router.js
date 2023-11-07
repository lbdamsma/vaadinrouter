import { Router } from '@vaadin/router'

const outlet = document.getElementById('outlet')

const routes = [
  { path: '/', component: 'home-view' },
  { path: '/about', component: 'about-view' },
  { path: '/contact', component: 'contact-view' }
];

const router = new Router(outlet)
router.setRoutes(routes)
