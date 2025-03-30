import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _328e2c88 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _9b7b2bec = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _6d191494 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _8938bc6a = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _2fae238b = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _daace6cc = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _0982c46d = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _16ad9234 = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _5929556c = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _3bbcbcc3 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _f24d3d62 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _ac2a17c0 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _6ebb3327 = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _6bb31711 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _6bc12e92 = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _6bcf4613 = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _48ba1e6c = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _d51daeb2 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _e3f8e1cc = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _1722cdbe = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _78135fcc = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _6163a022 = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _6171b7a3 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _7c37efdd = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _572b5e3a = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _0f5f130e = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _c38f77c6 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _15db4206 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _75e41c3e = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _75f233bf = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _3d35e586 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _3d19b684 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _3cfd8782 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _3ce15880 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _1950dfd8 = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _f0f418ba = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _42b34584 = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _b399d584 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _d75a2336 = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _3fdb2156 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d622a952 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _328e2c88,
    name: "404"
  }, {
    path: "/about-us",
    component: _9b7b2bec,
    name: "about-us"
  }, {
    path: "/cart",
    component: _6d191494,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _8938bc6a,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _2fae238b,
    name: "contact-us"
  }, {
    path: "/faq",
    component: _daace6cc,
    name: "faq"
  }, {
    path: "/login",
    component: _0982c46d,
    name: "login"
  }, {
    path: "/lookbook",
    component: _16ad9234,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _5929556c,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _3bbcbcc3,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _f24d3d62,
    name: "register"
  }, {
    path: "/shop",
    component: _ac2a17c0,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _6ebb3327,
    name: "vendor-dashboard"
  }, {
    path: "/cart/cart-2",
    component: _6bb31711,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _6bc12e92,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _6bcf4613,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _48ba1e6c,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _d51daeb2,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _e3f8e1cc,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _1722cdbe,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _78135fcc,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _6163a022,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _6171b7a3,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _7c37efdd,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _572b5e3a,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _0f5f130e,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _c38f77c6,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _15db4206,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _75e41c3e,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _75f233bf,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _3d35e586,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _3d19b684,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _3cfd8782,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _3ce15880,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _1950dfd8,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _f0f418ba,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _42b34584,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _b399d584,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _d75a2336,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _3fdb2156,
    name: "index"
  }, {
    path: "/product/:id?",
    component: _d622a952,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
