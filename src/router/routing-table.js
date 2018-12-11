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
        },
        {
          path: 'academic',
          name: 'Academic',
          components: {
            default: () =>
              import ('@/modules/home/njgx/academic/Academic.vue')
          }
        },
        {
          path: 'career',
          name: 'Career',
          components: {
            default: () =>
              import ('@/modules/home/njgx/career/Career.vue')
          }
        },
        {
          path: 'development',
          name: 'Development',
          components: {
            default: () =>
              import ('@/modules/home/njgx/development/Development.vue')
          }
        },
        {
          path: 'sport',
          name: 'Sport',
          components: {
            default: () =>
              import ('@/modules/home/njgx/sport/Sport.vue')
          }
        },
        {
          path: 'ambassador',
          name: 'Ambassador',
          components: {
            default: () =>
              import ('@/modules/home/njgx/ambassador/Ambassador.vue')
          }
        }
      ]
    }, {
      path: 'czzx',
      name: 'Czzx',
      components: {
        default: () =>
          import ('@/modules/home/czzx/Czzx.vue')
      },
      redirect: '/czzx/cxzl',
      children: [{
        name: "CxzlTch",
        path: "cxzl",
        components: {
          default: () =>
            import ('@/modules/home/czzx/cxzl/Cxzl.vue')
        }
      }, {
        name: "CzzhTch",
        path: "czzh",
        components: {
          default: () =>
            import ('@/modules/home/czzx/czzh/Czzh.vue')
        }
      }, {
        name: "SheshiTch",
        path: "sheshi",
        components: {
          default: () =>
            import ('@/modules/home/czzx/sheshi/Sheshi.vue')
        }
      }, {
        name: "XueshuTch",
        path: "xueshu",
        components: {
          default: () =>
            import ('@/modules/home/czzx/xueshu/Xueshu.vue')
        }
      }, {
        name: "LinianTch",
        path: "linian",
        components: {
          default: () =>
            import ('@/modules/home/czzx/linian/Linian.vue')
        }
      }, {
        name: "ZiliaoTch",
        path: "ziliao",
        components: {
          default: () =>
            import ('@/modules/home/czzx/ziliao/Ziliao.vue')
        }
      }]
    }, {
      name: 'Kcgl',
      path: 'kcgl',
      components: {
        default: () =>
          import ('@/modules/home/kcgl/Kcgl.vue')
      },
      redirect: '/kcgl/low',
      children: [{
        name: 'KcglTch Low',
        path: 'low',
        components: {
          default: () =>
            import ('@/modules/home/kcgl/low/Low.vue')
        }
      }, {
        name: 'KcglTch High',
        path: 'high',
        components: {
          default: () =>
            import ('@/modules/home/kcgl/high/High.vue')
        }
      }, {
        name: 'ZxkcTch High',
        path: 'zxkc',
        components: {
          default: () =>
            import ('@/modules/home/kcgl/zxkc/Zxkc.vue')
        }
      }]
    }, {
      name: 'Sblc',
      path: 'sblc',
      redirect: '/sblc/sqzg',
      components: {
        default: () =>
          import ('@/modules/home/sblc/Sblc.vue')
      },
      children: [{
        name: 'Sqlc',
        path: 'sqlc',
        components: {
          default: () =>
            import ('@/modules/home/sblc/sqlc/Sqlc.vue')
        }
      }, {
        name: 'Bmfy',
        path: 'bmfy',
        components: {
          default: () =>
            import ('@/modules/home/sblc/bmfy/Bmfy.vue')
        }
      }, {
        name: 'Sqzg',
        path: 'sqzg',
        components: {
          default: () =>
            import ('@/modules/home/sblc/sqzg/Sqzg.vue')
        }
      }, {
        name: 'Kcsf',
        path: 'kcsf',
        components: {
          default: () =>
            import ('@/modules/home/sblc/kcsf/Kcsf.vue')
        }
      }]
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
