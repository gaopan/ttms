import TypeChecker from '../utils/type-checker.js'

let routerTable = {
  //This is for html5 history mode enablement
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: () =>
        import ('@/modules/home/Home.vue')
    },
    redirect: '/index',
    children: [{
      name: 'Home Index',
      path: 'index',
      components: {
        default: () =>
          import ('@/modules/home/index/Index.vue')
      }
    },  {
      path: 'czzx',
      name: 'Czzx',
      components: {
        default: () =>
          import ('@/modules/home/czzx/Czzx.vue')
      },
      redirect: '/czzx/cxzl',
      children: []
    }, {
      path: 'njgx',
      name: 'Njgx',
      components: {
        default: () =>
          import ('@/modules/home/njgx/Njgx.vue')
      },
      redirect: '/njgx/vision',
      children: [{
          path: 'vision',
          name: 'Vision',
          components: {
            default: () =>
              import ('@/modules/home/njgx/vision/Vision.vue')
          }
        }
      ]
    },{
      name: 'Njkc',
      path: 'njkc',
      components: {
        default: () =>
          import ('@/modules/home/njkc/Njkc.vue')
      },
      // redirect: '/njkc/low',
      children: []
    }, {
      name: 'Rxsq',
      path: 'rxsq',
      // redirect: '/rxsq/sqzg',
      components: {
        default: () =>
          import ('@/modules/home/rxsq/Rxsq.vue')
      },
      children: []
    }, {
      name: "Honor",
      path: "honor",
      components: {
        default: () => import('@/modules/home/honor/Honor.vue')
      }
    }, {
      name: "Contact",
      path: "contact",
      components: {
        default: () => import('@/modules/home/contact/Contact.vue')
      }
    }, {
      name: "Search",
      path: "search",
      components: {
        default: () => import('@/modules/home/search/Search.vue')
      }
    }, {
      name: "Images",
      path: "images",
      components: {
        default: () => import('@/modules/home/latest-images/LatestImages.vue')
      }
    }, {
      name: "Yycg",
      path: "yycg",
      components: {
        default: () => import('@/modules/home/yycg/Yycg.vue')
      }
    }, {
      name: "Czgc",
      path: "czgc",
      components: {
        default: () => import('@/modules/home/czgc/Czgc.vue')
      }
    }/*, {
      name: "Xxtx",
      path: "form",
      components: {
        default: () => import('@/modules/home/form/form.vue')
      }
    }, {
      name: "Djxx",
      path: "child-info",
      components: {
        default: () => import('@/modules/home/child-info/child-info.vue')
      }
    }*/]
  }]
}

export default routerTable
