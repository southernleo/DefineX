import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c9ebcff2 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _0779729f = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _58c32901 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _4ab35516 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _429ef296 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _46fabae5 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _237ce810 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6be49ac9 = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _3347b756 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _f0e37cd0 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _47df2c38 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _393aa76b = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _050d641c = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _734c65b4 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _733036b2 = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _731407b0 = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _33847bfe = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _43133188 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _07514c65 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _51422fac = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _4482a1a5 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _1b3d0012 = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _1b20d110 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _d39dafb0 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _54f6a26e = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _2c0f0063 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _2d3d531c = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _1a403012 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _4d86b049 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _4d94c7ca = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _3c0bc352 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _3c19dad3 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _3c27f254 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _3c3609d5 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _76247663 = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _16440e6e = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _1a55d98f = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _7dd5a949 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _6bf58270 = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _2499e8e1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _20d53d28 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

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
    component: _c9ebcff2,
    name: "404"
  }, {
    path: "/about-us",
    component: _0779729f,
    name: "about-us"
  }, {
    path: "/cart",
    component: _58c32901,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _4ab35516,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _429ef296,
    name: "contact-us"
  }, {
    path: "/faq",
    component: _46fabae5,
    name: "faq"
  }, {
    path: "/login",
    component: _237ce810,
    name: "login"
  }, {
    path: "/lookbook",
    component: _6be49ac9,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _3347b756,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _f0e37cd0,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _47df2c38,
    name: "register"
  }, {
    path: "/shop",
    component: _393aa76b,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _050d641c,
    name: "vendor-dashboard"
  }, {
    path: "/cart/cart-2",
    component: _734c65b4,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _733036b2,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _731407b0,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _33847bfe,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _43133188,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _07514c65,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _51422fac,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _4482a1a5,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _1b3d0012,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _1b20d110,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _d39dafb0,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _54f6a26e,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _2c0f0063,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _2d3d531c,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _1a403012,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _4d86b049,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _4d94c7ca,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _3c0bc352,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _3c19dad3,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _3c27f254,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _3c3609d5,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _76247663,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _16440e6e,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _1a55d98f,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _7dd5a949,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _6bf58270,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _2499e8e1,
    name: "index"
  }, {
    path: "/product/:id?",
    component: _20d53d28,
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
