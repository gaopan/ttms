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
        }
      ]
    },{
      //崇正牛津國際中學課程
      name: 'Njkc',
      path: 'njkc',
      components: {
        default: () =>
          import ('@/modules/home/njkc/Njkc.vue')
      },
      redirect: '/njkc/assurance',
      children: [{
        path: 'assurance',
        name: 'Assurance',
        components: {
          default: () =>
            import ('@/modules/home/njkc/assurance/Assurance.vue')
        }
      },{
        path: 'articulation',
        name: 'Articulation',
        components: {
          default: () =>
            import ('@/modules/home/njkc/articulation/Articulation.vue')
        }
      },{
        path: 'cooperation',
        name: 'Cooperation',
        components: {
          default: () =>
            import ('@/modules/home/njkc/cooperation/Cooperation.vue')
        }
      },{
        path: 'structure',
        name: 'Structure',
        components: {
          default: () =>
            import ('@/modules/home/njkc/structure/Structure.vue')
        },
        redirect:'/njkc/structure/requirements',
        children:[{
          path: 'requirements',
          name: 'Requirements',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/requirements/Requirements.vue')
          }
        },{
          path: 'eight-year',
          name: 'EightYear',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/eight-year/EightYear.vue')
          }
        },{
          path: 'nine-year',
          name: 'NineYear',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/nine-year/NineYear.vue')
          }
        },{
          path: 'ten-year',
          name: 'TenYear',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/ten-year/TenYear.vue')
          }
        },{
          path: 'eleven-year',
          name: 'ElevenYear',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/eleven-year/ElevenYear.vue')
          }
        },{
          path: 'twelve-year',
          name: 'TwelveYear',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/twelve-year/TwelveYear.vue')
          }
        },{
          path: 'twelve-thirteen-year',
          name: 'TwelveThirteenYear',
          components: {
            default: () =>
              import ('@/modules/home/njkc/structure/twelve-thirteen-year/TwelveThirteenYear.vue')
          }
        }]
      },{
        path: 'associations',
        name: 'Associations',
        components: {
          default: () =>
            import ('@/modules/home/njkc/associations/Associations.vue')
        }
      }]
    }, {
      //入學申請
      name: 'Rxsq',
      path: 'rxsq',
      components: {
        default: () =>
          import ('@/modules/home/rxsq/Rxsq.vue')
      },
      redirect: '/rxsq/requirements',
      children: [{
          path: "requirements",
          name: "Requirements",
          components: {
            default: () =>
              import ('@/modules/home/rxsq/requirements/Requirements.vue')
          }
        },{
          path: "procedures",
          name: "Procedures",
          components: {
            default: () =>
              import ('@/modules/home/rxsq/procedures/Procedures.vue')
          }
        },{
          path: "fees",
          name: "Fees",
          components: {
            default: () =>
              import ('@/modules/home/rxsq/fees/Fees.vue')
          }
        }]
    }, {
      //崇正牛津校園
      name: 'Njxy',
      path: 'njxy',
      // redirect: '/njxy/sqzg',
      components: {
        default: () =>
          import ('@/modules/home/njxy/Njxy.vue')
      },
      redirect:'/njxy/structure',
      children: [{
          path: "structure",
          name: "Structure",
          components: {
            default: () =>
              import ('@/modules/home/njxy/structure/Structure.vue')
          }
        },{
          path: "facilities",
          name: "Facilities",
          components: {
            default: () =>
              import ('@/modules/home/njxy/facilities/Facilities.vue')
          }
        },{
          path: "surrounding",
          name: "Surrounding",
          components: {
            default: () =>
              import ('@/modules/home/njxy/surrounding/Surrounding.vue')
          }
        },{
          path: "transportation",
          name: "Transportation",
          components: {
            default: () =>
              import ('@/modules/home/njxy/transportation/Transportation.vue')
          }
        }]
    }, {
      //光榮榜與傑出學生
      name: "Honor",
      path: "honor",
      components: {
        default: () => import('@/modules/home/honor/Honor.vue')
      },
      redirect:'/honor/honorary-list',
      children:[{
          path: "honorary-list",
          name: "HonoraryList",
          components: {
            default: () =>
              import ('@/modules/home/honor/honorary-list/HonoraryList.vue')
          }
        },{
          path: "candidates",
          name: "Candidates",
          components: {
            default: () =>
              import ('@/modules/home/honor/candidates/Candidates.vue')
          }
        }]
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
