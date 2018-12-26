import TypeChecker from '../utils/type-checker.js'

let routerTable = {
  //This is for html5 history mode enablement
  // mode: 'history',
  routes: [{
    //首页
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
      //香港崇正中学
      path: 'czzx',
      name: 'Czzx',
      components: {
        default: () =>
          import ('@/modules/home/czzx/Czzx.vue')
      },
      redirect: '/czzx/establishment',
      children: 
      [
        {
          path: "establishment",
          components: {
            default: () =>
              import ('@/modules/home/czzx/establishment/Establishment.vue')
          }
        },{
          name: "Achievement",
          path: "achievement",
          components: {
            default: () =>
              import ('@/modules/home/czzx/achievement/Achievement.vue')
          }
        },{
          name: "Culture",
          path: "culture",
          components: {
            default: () =>
              import ('@/modules/home/czzx/culture/Culture.vue')
          }
        },{
          name: "Governance",
          path: "governance",
          components: {
            default: () =>
              import ('@/modules/home/czzx/governance/Governance.vue')
          }
        }, 
      ]
    }, {
      // 英国牛津国际公学
      path: 'njgx',
      name: 'Njgx',
      components: {
        default: () =>
          import ('@/modules/home/njgx/Njgx.vue')
      },
      redirect: '/njgx/history',
      children: 
      [
        {
          path: 'history',
          name: 'History',
          components: {
            default: () =>
              import ('@/modules/home/njgx/history/History.vue')
          }
        },{
          path: 'objective',
          name: 'Objective',
          components: {
            default: () =>
              import ('@/modules/home/njgx/objective/Objective.vue')
          }
        },{
          path: 'programme',
          name: 'Programme',
          components: {
            default: () =>
              import ('@/modules/home/njgx/programme/Programme.vue')
          }
        },{
          path: 'achievement',
          name: 'Achievement',
          components: {
            default: () =>
              import ('@/modules/home/njgx/achievement/Achievement.vue')
          }
        },
      ]
    },{
      //崇正牛津國際中學課程
      name: 'Njkc',
      path: 'njkc',
      components: {
        default: () =>
          import ('@/modules/home/njkc/Njkc.vue')
      },
      // redirect: '/njkc/low',
      children: []
    }, {
      //入學申請
      name: 'Rxsq',
      path: 'rxsq',
      // redirect: '/rxsq/sqzg',
      components: {
        default: () =>
          import ('@/modules/home/rxsq/Rxsq.vue')
      },
      children: []
    }, {
      //崇正牛津校園
      name: 'Njxy',
      path: 'njxy',
      // redirect: '/njxy/sqzg',
      components: {
        default: () =>
          import ('@/modules/home/njxy/Njxy.vue')
      },
      children: []
    }, {
      //光榮榜與傑出學生
      name: "Honor",
      path: "honor",
      components: {
        default: () => import('@/modules/home/honor/Honor.vue')
      }
    }, {
      //聯繫方法與圖片分享
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
