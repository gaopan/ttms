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
    redirect: '/tch',
    children: [{
      path: 'tch',
      name: 'HomeTch',
      components: {
        default: () =>
          import ('@/modules/home/tch/Home.vue')
      },
      redirect: '/tch/index',
      children: [{
        path: 'index',
        name: 'HomeTchIndex',
        components: {
          default: () =>
            import ('@/modules/home/tch/index/Index.vue')
        }
      }, {
        path: 'njgx',
        name: 'NjgxTch',
        components: {
          default: () =>
            import ('@/modules/home/tch/njgx/Njgx.vue')
        },
        redirect: '/tch/njgx/vision',
        children: [{
            path: 'vision',
            name: 'VisionTch',
            components: {
              default: () =>
                import ('@/modules/home/tch/njgx/vision/Vision.vue')
            }
          },
          {
            path: 'academic',
            name: 'AcademicTch',
            components: {
              default: () =>
                import ('@/modules/home/tch/njgx/academic/Academic.vue')
            }
          },
          {
            path: 'career',
            name: 'CareerTch',
            components: {
              default: () =>
                import ('@/modules/home/tch/njgx/career/Career.vue')
            }
          },
          {
            path: 'development',
            name: 'DevelopmentTch',
            components: {
              default: () =>
                import ('@/modules/home/tch/njgx/development/Development.vue')
            }
          },
          {
            path: 'sport',
            name: 'SportTch',
            components: {
              default: () =>
                import ('@/modules/home/tch/njgx/sport/Sport.vue')
            }
          },
          {
            path: 'ambassador',
            name: 'AmbassadorTch',
            components: {
              default: () =>
                import ('@/modules/home/tch/njgx/ambassador/Ambassador.vue')
            }
          }
        ]
      }, {
        path: 'czzx',
        name: 'CzzxTch',
        components: {
          default: () =>
            import ('@/modules/home/tch/czzx/Czzx.vue')
        },
        redirect: '/tch/czzx/cxzl',
        children: [{
          name: "CxzlTch",
          path: "cxzl",
          components: {
            default: () =>
              import ('@/modules/home/tch/czzx/cxzl/Cxzl.vue')
          }
        }, {
          name: "CzzhTch",
          path: "czzh",
          components: {
            default: () =>
              import ('@/modules/home/tch/czzx/czzh/Czzh.vue')
          }
        }, {
          name: "SheshiTch",
          path: "sheshi",
          components: {
            default: () =>
              import ('@/modules/home/tch/czzx/sheshi/Sheshi.vue')
          }
        }, {
          name: "XueshuTch",
          path: "xueshu",
          components: {
            default: () =>
              import ('@/modules/home/tch/czzx/xueshu/Xueshu.vue')
          }
        }, {
          name: "LinianTch",
          path: "linian",
          components: {
            default: () =>
              import ('@/modules/home/tch/czzx/linian/Linian.vue')
          }
        }, {
          name: "ZiliaoTch",
          path: "ziliao",
          components: {
            default: () =>
              import ('@/modules/home/tch/czzx/ziliao/Ziliao.vue')
          }
        }]
      }, {
        name: 'KcglTch',
        path: 'kcgl',
        components: {
          default: () =>
            import ('@/modules/home/tch/kcgl/Kcgl.vue')
        },
        children: [{
          name: 'KcglTch Low',
          path: 'low',
          components: {
            default: () =>
              import ('@/modules/home/tch/kcgl/low/Low.vue')
          }
        }, {
          name: 'KcglTch High',
          path: 'high',
          components: {
            default: () =>
              import ('@/modules/home/tch/kcgl/high/High.vue')
          }
        }]
      }, {
        name: 'SblcTch',
        path: 'sblc',
        redirect: '/tch/sblc/sqzl',
        components: {
          default: () =>
            import ('@/modules/home/tch/sblc/Sblc.vue')
        },
        children: [{
          //   name: 'Bmfy',
          //   path: 'bmfy',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/tch/sblc/bmfy/Bmfy.vue')
          //   }
          // }, {
          //   name: 'Kcsf',
          //   path: 'kcsf',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/tch/sblc/kcsf/Kcsf.vue')
          //   }
          // }, {
          //   name: 'Msap',
          //   path: 'msap',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/tch/sblc/msap/Msap.vue')
          //   }
          // }, {
          //   name: 'Sqzl',
          //   path: 'sqzl',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/tch/sblc/sqzl/Sqzl.vue')
          //   }
          name: 'SqlcTch',
          path: 'sqlc',
          components: {
            default: () =>
              import ('@/modules/home/tch/sblc/sqlc/Sqlc.vue')
          }
        }, {
          name: 'FyTch',
          path: 'fy',
          components: {
            default: () =>
              import ('@/modules/home/tch/sblc/fy/Fy.vue')
          }
        }]
      }, {
        name: 'QtsxTch',
        path: 'qtsx',
        redirect: '/tch/qtsx/xf',
        components: {
          default: () =>
            import ('@/modules/home/tch/qtsx/Qtsx.vue')
        },
        children: [{
          name: 'XfTch',
          path: 'xf',
          components: {
            default: () =>
              import ('@/modules/home/tch/qtsx/xf/Xf.vue')
          }
        }, {
          name: 'JhrTch',
          path: 'jhr',
          components: {
            default: () =>
              import ('@/modules/home/tch/qtsx/jhr/Jhr.vue')
          }
        }, {
          name: 'JtTch',
          path: 'jt',
          components: {
            default: () =>
              import ('@/modules/home/tch/qtsx/jt/Jt.vue')
          }
        }, {
          name: 'SsTch',
          path: 'ss',
          components: {
            default: () =>
              import ('@/modules/home/tch/qtsx/ss/Ss.vue')
          }
        }, {
          name: 'ZsTch',
          path: 'zs',
          components: {
            default: () =>
              import ('@/modules/home/tch/qtsx/zs/Zs.vue')
          }
        }]
      }, {
        name: 'ZxkcTch',
        path: 'zxkc',
        redirect: '/tch/zxkc/Dxkc',
        components: {
          default: () =>
            import ('@/modules/home/tch/zxkc/Zxkc.vue')
        },
        children: [{
          name: 'DxkcTch',
          path: 'dxkc',
          components: {
            default: () =>
              import ('@/modules/home/tch/zxkc/dxkc/Dxkc.vue')
          }
        }, {
          name: 'XqzxTch',
          path: 'xqzx',
          components: {
            default: () =>
              import ('@/modules/home/tch/zxkc/xqzx/Xqzx.vue')
          }
        }, {
          name: 'YxsyTch',
          path: 'yxsy',
          components: {
            default: () =>
              import ('@/modules/home/tch/zxkc/yxsy/Yxsy.vue')
          }
        }, {
          name: 'YyjxTch',
          path: 'yyjx',
          components: {
            default: () =>
              import ('@/modules/home/tch/zxkc/yyjx/Yyjx.vue')
          }
        }]
      }]
    }, {
      path: 'sch',
      name: 'HomeSch',
      components: {
        default: () =>
          import ('@/modules/home/sch/Home.vue')
      },
      redirect: '/sch/index',
      children: [{
        path: 'index',
        name: 'HomeTchIndex',
        components: {
          default: () =>
            import ('@/modules/home/sch/index/Index.vue')
        }
      }, {
        path: 'njgx',
        name: 'NjgxSch',
        components: {
          default: () =>
            import ('@/modules/home/sch/njgx/Njgx.vue')
        },
        redirect: '/sch/njgx/vision',
        children: [{
            path: 'vision',
            name: 'VisionSch',
            components: {
              default: () =>
                import ('@/modules/home/sch/njgx/vision/Vision.vue')
            }
          },
          {
            path: 'academic',
            name: 'AcademicSch',
            components: {
              default: () =>
                import ('@/modules/home/sch/njgx/academic/Academic.vue')
            }
          },
          {
            path: 'career',
            name: 'CareerSch',
            components: {
              default: () =>
                import ('@/modules/home/sch/njgx/career/Career.vue')
            }
          },
          {
            path: 'development',
            name: 'DevelopmentSch',
            components: {
              default: () =>
                import ('@/modules/home/sch/njgx/development/Development.vue')
            }
          },
          {
            path: 'sport',
            name: 'SportSch',
            components: {
              default: () =>
                import ('@/modules/home/sch/njgx/sport/Sport.vue')
            }
          },
          {
            path: 'ambassador',
            name: 'AmbassadorSch',
            components: {
              default: () =>
                import ('@/modules/home/sch/njgx/ambassador/Ambassador.vue')
            }
          }
        ]
      }, {
        path: 'czzx',
        name: 'CzzxSch',
        components: {
          default: () =>
            import ('@/modules/home/sch/czzx/Czzx.vue')
        },
        redirect: '/sch/czzx/cxzl',
        children: [{
          name: "CxzlSch",
          path: "cxzl",
          components: {
            default: () =>
              import ('@/modules/home/sch/czzx/cxzl/Cxzl.vue')
          }
        }, {
          name: "CzzhSch",
          path: "czzh",
          components: {
            default: () =>
              import ('@/modules/home/sch/czzx/czzh/Czzh.vue')
          }
        }, {
          name: "SheshiSch",
          path: "sheshi",
          components: {
            default: () =>
              import ('@/modules/home/sch/czzx/sheshi/Sheshi.vue')
          }
        }, {
          name: "XueshuSch",
          path: "xueshu",
          components: {
            default: () =>
              import ('@/modules/home/sch/czzx/xueshu/Xueshu.vue')
          }
        }, {
          name: "LinianSch",
          path: "linian",
          components: {
            default: () =>
              import ('@/modules/home/sch/czzx/linian/Linian.vue')
          }
        }, {
          name: "ZiliaoSch",
          path: "ziliao",
          components: {
            default: () =>
              import ('@/modules/home/sch/czzx/ziliao/Ziliao.vue')
          }
        }]
      }, {
        name: 'KcglSch',
        path: 'kcgl',
        components: {
          default: () =>
            import ('@/modules/home/sch/kcgl/Kcgl.vue')
        },
        children: [{
          name: 'KcglSch Low',
          path: 'low',
          components: {
            default: () =>
              import ('@/modules/home/sch/kcgl/low/Low.vue')
          }
        }, {
          name: 'KcglSch High',
          path: 'high',
          components: {
            default: () =>
              import ('@/modules/home/sch/kcgl/high/High.vue')
          }
        }]
      }, {
        name: 'SblcSch',
        path: 'sblc',
        redirect: '/sch/sblc/sqzl',
        components: {
          default: () =>
            import ('@/modules/home/sch/sblc/Sblc.vue')
        },
        children: [{
          //   name: 'Bmfy',
          //   path: 'bmfy',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/sch/sblc/bmfy/Bmfy.vue')
          //   }
          // }, {
          //   name: 'Kcsf',
          //   path: 'kcsf',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/sch/sblc/kcsf/Kcsf.vue')
          //   }
          // }, {
          //   name: 'Msap',
          //   path: 'msap',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/sch/sblc/msap/Msap.vue')
          //   }
          // }, {
          //   name: 'Sqzl',
          //   path: 'sqzl',
          //   components: {
          //     default: () =>
          //       import ('@/modules/home/sch/sblc/sqzl/Sqzl.vue')
          //   }
          name: 'SqlcSch',
          path: 'sqlc',
          components: {
            default: () =>
              import ('@/modules/home/sch/sblc/sqlc/Sqlc.vue')
          }
        }, {
          name: 'FySch',
          path: 'fy',
          components: {
            default: () =>
              import ('@/modules/home/sch/sblc/fy/Fy.vue')
          }
        }]
      }, {
        name: 'QtsxSch',
        path: 'qtsx',
        redirect: '/sch/qtsx/xf',
        components: {
          default: () =>
            import ('@/modules/home/sch/qtsx/Qtsx.vue')
        },
        children: [{
          name: 'XfSch',
          path: 'xf',
          components: {
            default: () =>
              import ('@/modules/home/sch/qtsx/xf/Xf.vue')
          }
        }, {
          name: 'JhrSch',
          path: 'jhr',
          components: {
            default: () =>
              import ('@/modules/home/sch/qtsx/jhr/Jhr.vue')
          }
        }, {
          name: 'JtSch',
          path: 'jt',
          components: {
            default: () =>
              import ('@/modules/home/sch/qtsx/jt/Jt.vue')
          }
        }, {
          name: 'SsSch',
          path: 'ss',
          components: {
            default: () =>
              import ('@/modules/home/sch/qtsx/ss/Ss.vue')
          }
        }, {
          name: 'ZsSch',
          path: 'zs',
          components: {
            default: () =>
              import ('@/modules/home/sch/qtsx/zs/Zs.vue')
          }
        }]
      }, {
        name: 'ZxkcSch',
        path: 'zxkc',
        redirect: '/sch/zxkc/Dxkc',
        components: {
          default: () =>
            import ('@/modules/home/sch/zxkc/Zxkc.vue')
        },
        children: [{
          name: 'DxkcSch',
          path: 'dxkc',
          components: {
            default: () =>
              import ('@/modules/home/sch/zxkc/dxkc/Dxkc.vue')
          }
        }, {
          name: 'XqzxSch',
          path: 'xqzx',
          components: {
            default: () =>
              import ('@/modules/home/sch/zxkc/xqzx/Xqzx.vue')
          }
        }, {
          name: 'YxsySch',
          path: 'yxsy',
          components: {
            default: () =>
              import ('@/modules/home/sch/zxkc/yxsy/Yxsy.vue')
          }
        }, {
          name: 'YyjxSch',
          path: 'yyjx',
          components: {
            default: () =>
              import ('@/modules/home/sch/zxkc/yyjx/Yyjx.vue')
          }
        }]
      }]
    }]

  }]
}

export default routerTable


/*
{
      path: '/index',
      name: 'HomeIndex',
      components: {
        default: () => import('@/modules/home/index/Index.vue')
      }
    }, {
      path: '/vision',
      name: 'Vision',
      components: {
        default: () => import('@/modules/home/vision/Vision.vue')
      }
    }, {
      path: '/academic',
      name: 'Academic',
      components: {
        default: () => import('@/modules/home/academic/Academic.vue')
      }
    }, {
      path: '/fee',
      name: 'Fee',
      components: {
        default: () => import('@/modules/home/fee/Fee.vue')
      }
    }, {
      path: '/career',
      name: 'Career',
      components: {
        default: () => import('@/modules/home/career/Career.vue')
      }
    }, {
      path: '/development',
      name: 'Development',
      components: {
        default: () => import('@/modules/home/development/Development.vue')
      }
    }, {
      path: '/sport',
      name: 'Sport',
      components: {
        default: () => import('@/modules/home/sport/Sport.vue')
      }
    }, {
      path: '/ambassador',
      name: 'Ambassador',
      components: {
        default: () => import('@/modules/home/ambassador/Ambassador.vue')
      }
    }, {
      path: '/honor',
      name: 'Honor',
      components: {
        default: () => import('@/modules/home/honor/Honor.vue')
      }
    }
*/
