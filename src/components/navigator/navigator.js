import shared from "@/shared.js"
import UserServices from '@/services/user-services.js'
import ProcessSelectionService from '@/services/process-selection-services.js'
import CustomerSelectionService from '@/services/customer-selection-services.js'
import MiniLoader from '@/components/loader/MiniLoader.vue'
import userApi from '@/api/admin/user.js'
import NotyOpeartion from '@/utils/noty-operation.js'
import Account from '@/api/account.js'
import CookiesManager from '@/utils/cookies-manager.js'
import CustomerApi from '@/api/admin/company.js'
import RaasNotificationApi from '@/api/raas/notification.js'
import Vue from 'vue'
import Store from '@/store'
import pagesizeStore from "@/utils/pagesize-store.js"
import TypeChecker from '@/utils/type-checker.js'
import CompanyApi from '@/api/admin/company.js'

let Images = require.context('@/assets/', false, /\.(png|jpg)$/);
let eventHub = shared.eventHub;
let env = process.env.NODE_ENV;

export default {
  name: 'navigator',
  data() {
    return {
      totalMenus: [],
      currentConsole: {},
      displayedMenus: [],
      toggleOn: null,
      CustomerUrl: {},
      cust: {},
      unReadNum: 0,
      customers: null,
      raasCustomerIds: null,
      onlyOneConsole: true,
      dmSelfAdaption: false,
      showSmallStyle: false,
      showIssue: env == 'stg' || env == 'development' || env == 'tfdev' || env == 'tfstg' || env == 'dev',
      fnRefreshNums: null,
      showRole: 'NON_Approver'
    }
  },

  computed: {
    greeting() {
      let user = this.$store.getters.userProfile.userFe,
        greeting = user.firstName;
      if (user.lastName) {
        greeting += ' ' + user.lastName;
      }
      return greeting;
    },
    navConsoleRouters() {
      return this.consoleRouters[this.$data.currentConsole.name];
    }
  },

  mounted() {
    window.onresize = () => {
      return (() => {
        let boxWidth = window.innerWidth;
        this.fnForSelfAdaption();
        eventHub.$emit("windows-width-change", boxWidth);
      })()
    }
  },

  watch: {
    $route(data) {
      this.$data.currentConsole = this.getCurrentConsole();
      this.fnForSelfAdaption();
    }
  },

  methods: {
    imgUrl(path) {
      return Images('./' + path);
    },
    navToIdea(event) {
      //Azhaziq: 28/3/2018 - Defect 4749, set the button to blur again after click
      event.target.blur();
      window.open('https://dxcleap.ideas.aha.io/ideas ');
    },
    navToIssue(event) {
      //Azhaziq: 28/3/2018 - Defect 4749, set the button to blur again after click
      event.target.blur();
      window.open('https://ec4t01881.itcs.entsvcs.net/plugins/tracker/?tracker=51&func=new-artifact');
    },
    navToSupport(currentConsoleInfo) {
      var supportHistroy = this.$route.path.toString();
      Store.dispatch("setSupportHistory", {
        locationHistory: supportHistroy
      });
      this.$router.push('/support');
    },
    navToUserPro(){
      this.$router.push('/user-profile-module');
    },
    navToNotifycation: function() {
      this.$router.push('/notification');
    },
    navTo(path, data) {
      let transformedPath = '',
        arr = ['rpa-setup', 'rpa-workload', 'robot-running-strategy'];
      switch (path) {
        case '/marketing':
          let baseUrl = process.env.baseUrl;
          if (baseUrl == "https://dev2.dxc-apa.net" || baseUrl == "https://qa.dxc-apa.net" ||
            baseUrl == "https://dev.dxc-apa.net" || baseUrl == "https://stg.dxc-apa.net" ||
            baseUrl == "https://www.demo.dxc-apa.net" || window.location.origin == "https://demo.dxc-apa.net" ||
            baseUrl == "https://www.dxc-apa.com" || "https://www.eu.dxc-apa.com") {
            window.open(baseUrl + '/marketing/');
          } else {
            window.open('https://engagecx.info/apa/');
          }
          break;
        case '/pursuit':
          let params = {
            id: this.$store.getters.userProfile.userFe.id,
            email: this.$store.getters.userProfile.userFe.email,
            token: this.$store.getters.userProfile.accessToken
          }
          let check = `check?id=${params.id}&email=${params.email}&token=${params.token}`;
          let url = `https://engagecx.info/pursuit-api/api/v1/${check}`;
          window.open(url);
          break;

        case '/pd/pexplorer':
          if (this.$store.getters.processSelection != null) {
            transformedPath = path + '/pflow';
          } else {
            transformedPath = '/pd/selection';
          }
          break;

        case '/logout':
          let userInfo = this.$store.getters.userProfile;
          let auth = userInfo.authType + ' ' + userInfo.accessToken;
          Account.logout(auth);
          UserServices.clearCurrentUser();
          ProcessSelectionService.clearProcessSelection();
          CustomerSelectionService.clearCustomerSelection();
          transformedPath = '/passport';
          // added by hong-yu.chen@hpe.com——init pageSize
          pagesizeStore.initAllPageSize();
          break;

        default:
          transformedPath = path;
          break;
      };
      this.$router.push(transformedPath);
    },
    getCurrentConsole() {
      let cConsole = null;
      if (this.$route.path.indexOf('/admin') === 0) {
        //for smartlook
        // this.fnGetSmartLookData();
        this.onlyOneConsole = false;
        cConsole = {
          name: 'admin',
          visibility: true,
          displayedName: 'Admin Console',
          showRouters: true,
          showSmart: true,
          haveLine: true,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else if (this.$route.path.indexOf('/pd') === 0) {
        if (this.$route.path.indexOf('/pd/selection') == -1) {
          this.onlyOneConsole = false;
          let cusId = this.$store.getters.processSelection.customerId;
          this.fnGetCusLogo(cusId);
          cConsole = {
            name: 'pd',
            displayedName: "Process Discovery",
            visibility: false,
            showRouters: true,
            showSmart: false,
            showCusPic: true,
            showTwoButtons: true,
            showSupport: true,
            underSuppPage: false
          };
        } else {
          this.onlyOneConsole = true;
          cConsole = {
            displayedName: 'Process Selection',
            visibility: true,
            showRouters: false,
            showSmart: false,
            haveLine: false,
            showTwoButtons: true,
            showSupport: true,
            underSuppPage: false
          }
        }
      } else if (this.$route.path.indexOf('/cc') === 0) {
        cConsole = {
          name: 'cc',
          displayedName: 'Command Center',
          visibility: true,
          showRouters: false,
          showSmart: false,
          haveLine: false,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else if (this.$route.path.indexOf('/lr/consumption') === 0 && this.$route.path.indexOf('notification') == -1) {
        cConsole = {
          name: 'lrcp',
          displayedName: 'RaaS Management Console',
          visibility: true,
          showRouters: true,
          showSmart: false,
          haveLine: true,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
        if (this.$route.path.indexOf('notification') !== -1) {
          cConsole.name = '';
        }
      } else if (this.$route.path.indexOf('notification') !== -1) {
        this.onlyOneConsole = true;
        cConsole = {
          displayedName: 'Notification',
          visibility: true,
          showRouters: true,
          showSmart: false,
          haveLine: true,
          showTwoButtons: false,
          showSupport: false,
          underSuppPage: false
        };
      } else if (this.$route.path.indexOf('support') !== -1) {
        this.onlyOneConsole = true;
        cConsole = {
          displayedName: 'Support',
          visibility: true,
          showRouters: true,
          showSmart: false,
          haveLine: true,
          showTwoButtons: false,
          showSupport: true,
          underSuppPage: true
        };
      } else if (this.$route.path.indexOf('/lr/customers/') === 0 && this.$route.params.customerId) {
        this.onlyOneConsole = false;
        //this.fnGetDisplayedMenus();
        this.fnGetCusLogo(this.$route.params.customerId);
        cConsole = {
          name: 'lrct',
          displayedName: 'RaaS Operation Console',
          visibility: true,
          showRouters: true,
          showSmart: false,
          haveLine: true,
          showCusPic: true,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else if (this.$route.path.indexOf('/lr/customers') === 0) {
        this.onlyOneConsole = true;
        //this.fnGetDisplayedMenus();
        cConsole = {
          name: 'lr',
          displayedName: 'RaaS',
          visibility: true,
          showRouters: false,
          showSmart: false,
          haveLine: false,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else if (this.$route.path.indexOf('/health-check') === 0) {
        this.onlyOneConsole = true;
        cConsole = {
          name: 'hc',
          displayedName: 'Support',
          visibility: true,
          showRouters: true,
          showSmart: false,
          haveLine: true,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else if (this.$route.path.indexOf('/content-management') === 0) {
        this.onlyOneConsole = false;
        cConsole = {
          name: 'cm',
          visibility: true,
          displayedName: 'Content Management Console',
          showRouters: true,
          showSmart: true,
          haveLine: true,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else if(this.$route.path.indexOf('/user-profile-module') === 0){
        cConsole = {
          visibility: true,
          displayedName: 'User Profile',
          showRouters: true,
          showSmart: true,
          haveLine: false,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      } else {
        cConsole = {
          name: 'default',
          visibility: false,
          showRouters: true,
          showSmart: false,
          showTwoButtons: true,
          showSupport: true,
          underSuppPage: false
        };
      }
      return cConsole;
    },
    getDisplayedMenus(menuNames) {
      let res = [];
      if (!menuNames) return res;
      menuNames.forEach((name) => { this.totalMenus[name] && res.push(this.totalMenus[name]); });
      return res
    },
    integrateSmartlook() {
      let vm = this;
      this.toggleOn = !this.toggleOn;
      var userId = this.$store.getters.userProfile.userFe.id;
      userApi.informSmartLook(userId, this.toggleOn).then(res => {
        if (vm.toggleOn == true) {
          NotyOpeartion.notifySuccess({ text: 'Smartlook is opened!' });
        } else {
          NotyOpeartion.notifySuccess({ text: 'Smartlook is closed!' });
        }
      })
    },
    fnRequestUnreadNum: function() {
      setTimeout(() => {
        this.fnGetUnreadNum();
      }, 500)
    },
    fnGetUnreadNum: function() {
      let vm = this,
        role = this.$store.getters.userProfile.userFe.roleType;
      if (role == 'LEAP_RaaS_Admin' || role == 'LEAP_Admin') {
        RaasNotificationApi.getUnreadAccount()
          .then(function(data) {
            if (data.data.object.count > 90) {
              vm.unReadNum = '90+';
            } else {
              vm.unReadNum = data.data.object.count;
            }
          }, function(err) {
            $.noty.closeAll();
            NotyOpeartion.notifyError({ text: 'Failed to get unread data!' })
          });
      } else {
        let _fetchUnreadAccount = function(custIds) {
          RaasNotificationApi.getUnreadAccount({ customerIds: custIds })
            .then(function(data) {
              if (data.data.object.count > 90) {
                vm.unReadNum = '90+';
              } else {
                vm.unReadNum = data.data.object.count;
              }
            }, function(err) {
              $.noty.closeAll();
              NotyOpeartion.notifyError({ text: 'Failed to get unread data!' })
            })
        };
        if (vm.raasCustomerIds != null) {
          _fetchUnreadAccount.call(vm, vm.raasCustomerIds);
          return;
        }
        let _getRaasCustomerIds = function(customers) {
          let customerListArr = [];
          let theCustomers = customers.filter((customer) => {
            return customer.serviceTypes && customer.serviceTypes.includes("RAAS_Service");
          });
          theCustomers.forEach((res) => {
            customerListArr.push(res.id);
          });
          return vm.raasCustomerIds = customerListArr;
        };
        if (vm.customers != null) {
          _fetchUnreadAccount(_getRaasCustomerIds(vm.customers));
          return;
        }
        CustomerApi.getCustomers().then((res) => {
          _fetchUnreadAccount(_getRaasCustomerIds(res.data));
        });
      }
    },
    fnRemoveLeapRaas: function() {
      let vm = this;
      let role = this.$store.getters.userProfile.userFe.roleType;
      if (role == "LEAP_Admin" || role == "LEAP_RaaS_Admin") return;
      let removeLeapRaas = function() {
        this.displayedMenus.every((menu, i) => {
          if (menu.name == "lr") {
            this.displayedMenus.splice(i, 1);
            return false;
          }
          return true;
        });
      };
      if (role == "Customer_RaaS_Operator" || "Customer_Leadership" || "LEAP_RaaS_Operator") {
        CustomerApi.getCustomers().then((res) => {
          let vm = this,
            customers = vm.customers = res.data;
          let theCustomers = customers.filter((customer) => {
            return customer.serviceTypes && customer.serviceTypes.includes("RAAS_Service");
          });
          if (theCustomers.length == 0) {
            removeLeapRaas();
          };
        })
      } else {
        removeLeapRaas();
      };
    },
    fnGetSmartLookData: function() {
      let role = this.$store.getters.userProfile.userFe.roleType;
      if (role == 'LEAP_Admin') {
        var userId = this.$store.getters.userProfile.userFe.id;
        userApi.getUserSmartLook(userId).then(res => {
          let vm = this;
          vm.toggleOn = res.data;
        })
      }
    },
    fnRemoveRecipeAndOnboardingNav: function(role, conRouData) {
      let pdList = conRouData;
      if (role == 'Customer_General_Participant' || role == 'LEAP_Support' || role == 'LEAP_Sales') {
        pdList.pd.splice(1, 1);
        pdList.pd.splice(2, 1);
      };
      this.consoleRouters = pdList;
    },
    fnRemoveSystemConfig: function(conRouData){
      let pdList = conRouData;
      pdList.admin.splice(3, 1);
      this.consoleRouters = pdList;
    },
    fnGetCusLogo: function(customerId) {
      let vm = this;
      CustomerApi.getCustomer(customerId).then(function(res) {
        if (res.data.logoUrl) {
          CustomerApi.getCustomerLogoUrl(res.data.logoUrl).then(function(logoRes) {
            Vue.set(vm.cust, "logoUrl", logoRes.data);
          })
        }
      })
    },
    fnForSelfAdaption: function() {
      let boxWidth = window.innerWidth;
      this.showSmallStyle = boxWidth < 768 ? true : false;
      if (this.$route.path.indexOf('/pd') !== -1 && this.$route.path.indexOf('/pd/selection') == -1 || this.$route.path.indexOf('/admin') !== -1) {
        this.dmSelfAdaption = boxWidth < 1200 ? true : false;
      } else {
        this.dmSelfAdaption = boxWidth < 1050 ? true : false;
      }
    },
    fnGoToMainPage: function() {
      let currentPath = this.$route.path;
      if (currentPath.indexOf('/pd') !== -1) {
        this.$router.push('/pd/selection');
      } else if (currentPath.indexOf('/admin') !== -1) {
        this.$router.push('/admin');
      } else if (currentPath.indexOf('/lr') !== -1) {
        this.$router.push('/lr');
      } else if (currentPath.indexOf('/health-check') !== -1) {
        this.$router.push('/health-check');
      } else if (currentPath.indexOf('/content-management') !== -1) {
        this.$router.push('/content-management');
      }
    },
    stopPropagation: function() {
      event.stopPropagation();
    }
  },
  created() {
    let role = this.$store.getters.userProfile.userFe.roleType,
    conRouData = getConsoleRouters();

    this.fnRefreshNums = window.setInterval(() => {
      if (this.$route.path.indexOf('/notification') < 0) {
        this.fnGetUnreadNum();
      }
    }, 30000);
    this.fnGetUnreadNum();
    eventHub.$on('unread-notis-changed', this.fnRequestUnreadNum);
    this.fnForSelfAdaption();
    this.totalMenus = getTotalMenus();
  
    let allUserAccesses = getUserAccess(),
    subRolesArr = this.$store.getters.userProfile.userFe.subroles;

    if(role == "LEAP_Practitioner" || role == "Customer_Account_Owner"){
      judgeShow.call(this);
      this.fnRemoveSystemConfig(conRouData);
      this.$data.currentConsole = this.getCurrentConsole();
    }else{
      this.fnRemoveRecipeAndOnboardingNav(role, conRouData);
      this.$data.currentConsole = this.getCurrentConsole();
      let allConsoles = allUserAccesses[role];
      this.$data.displayedMenus = this.getDisplayedMenus(allConsoles);
      if (!this.$store.getters.userProfile.isLeapSupport) {
        this.fnRemoveLeapRaas();
      };
    };
    
    function judgeShow(){
      var arr = [], vm = this ;
      console.log('subRolesArr', subRolesArr);
      if(subRolesArr && subRolesArr.length !==0 ){
        subRolesArr.forEach((ele)=>{
          arr.push(ele.subrole);
        });
        if(arr.indexOf('LEAP_Account_Owner') !== -1 || arr.indexOf('Customer_Account_Owner') !== -1){
          var index = null;
          if(arr.indexOf('LEAP_Account_Owner') !== -1){
            index = arr.indexOf('LEAP_Account_Owner');
          }else{
            index = arr.indexOf('Customer_Account_Owner');
          }
          var cusId = subRolesArr[index].customerId;
          let userInfo = this.$store.getters.userProfile;
          let auth = userInfo.authType + ' ' + userInfo.accessToken;
          CompanyApi.getCustomerAddToken(cusId, auth).then((res)=>{
            if(res.data.actingApprover !== null){
              role = "Approver"
            }else{
              role = "NON_Approver";
            };
            let allConsoles = allUserAccesses[role];
            this.$data.displayedMenus = this.getDisplayedMenus(allConsoles);
            if (!this.$store.getters.userProfile.isLeapSupport) {
              this.fnRemoveLeapRaas();
            };
          });
        }else{
          role = "NON_Approver";
          let allConsoles = allUserAccesses[role];
          this.$data.displayedMenus = this.getDisplayedMenus(allConsoles);
          if (!this.$store.getters.userProfile.isLeapSupport) {
            this.fnRemoveLeapRaas();
          };
        }
      }else{
        role = "NON_Approver";
        this.$data.currentConsole = this.getCurrentConsole();
        let allConsoles = allUserAccesses[role];
        this.$data.displayedMenus = this.getDisplayedMenus(allConsoles);
        if (!this.$store.getters.userProfile.isLeapSupport) {
          this.fnRemoveLeapRaas();
        };
      }
    };

    function getConsoleRouters() {
      return {
        default: [],
        pd: [{
          path: '/pd/pexplorer',
          name: 'ProcessExplorer',
          displayedName: 'PROCESS EXPLORER'
        }, {
          path: '/pd/recipes',
          name: 'Recipes',
          displayedName: 'RECIPES'
        }, {
          path: '/pd/whiteboard',
          name: 'Whiteboard',
          displayedName: 'WHITEBOARD'
        }, {
          path: '/pd/onboarding',
          name: 'Onboarding',
          displayedName: 'ONBOARDING'
        }, {
          path: '/pd/designer',
          name: 'dataDesigner',
          displayedName: 'DATA DESIGNER'
        }],
        admin: [{
          path: '/admin/company',
          name: 'AdminCompany',
          displayedName: 'COMPANY'
        }, {
          path: '/admin/process',
          name: 'AdminProcess',
          displayedName: 'PROCESS'
        }, {
          path: '/admin/user',
          name: 'AdminUser',
          displayedName: 'USER'
        }, {
          path: '/admin/system-configuration',
          name: 'AdminSystemConfiguration',
          displayedName: 'SYSTEM CONFIGURATION'
        }
        // , {
        //   path: '/admin/user-group',
        //   name: 'AdminUserGroup',
        //   displayedName: 'USER GROUP'
        // }
        ],
        cc: [{
          path: '/cc',
          name: 'CommandCenter',
          displayedName: 'COMMAND CENTER'
        }],
        lrct: [{
          path: 'rpa-workload',
          name: 'RpaWorkLoad',
          displayedName: 'RPA WORKLOAD'
        }, {
          path: 'rpa-setup',
          name: 'RpaSetup',
          displayedName: 'RPA SETUP'
        }, {
          path: 'robot-running-strategy',
          name: 'RobotRunningStrategy',
          displayedName: 'Robot Runtime Strategy'
        }],
        lrcp: [{
          path: '/lr/consumption/summary',
          name: 'Summary',
          displayedName: 'SUMMARY'
        }, {
          path: '/lr/consumption/real-time',
          name: 'RealTime',
          displayedName: 'REAL TIME'
        }, {
          path: '/lr/consumption/orchestrator-settings',
          name: 'OrchestratorSettings',
          displayedName: 'ORCHESTRATOR SETTINGS'
        }],
        hc: [/*{
          path: '/health-check',
          name: 'HealthCheck',
          displayedName: 'HEALTH CHECK(MONITOR SERVICES)'
        },*/{
          path: '/health-check/mointor-service',
          name: 'HealthCheck_MS',
          displayedName: 'HEALTH CHECK(MONITOR SERVICES)'
        },{
          path: '/health-check/micro-service-version',
          name: 'HealthCheck_MSV',
          displayedName: 'MICRO SERVICE VERSION'          
        }],
        cm: [{
          path: '/content-management/noti',
          name: 'ContentManagementNotification',
          displayedName: 'NOTIFICATION'
        },{
          path: '/content-management/guide',
          name: 'ContentManagementGuide',
          displayedName: 'GUIDE'
        }]
      };
    };

    function getTotalMenus() {
      return {
        admin: {
          name: 'admin',
          title: 'Admin Console',
          icon: 'icon-admin',
          path: '/admin'
        },
        lr: {
          name: 'lr',
          title: 'APA RaaS',
          icon: 'icon-raas',
          path: '/lr'
        },
        cc: {
          name: 'cc',
          title: 'Command Center',
          icon: 'icon-console',
          path: '/cc'
        },
        pd: {
          name: 'pd',
          title: 'Process Discovery',
          icon: 'icon-learn-discover-find-out-more',
          path: '/pd/selection'
        },
        mp: {
          name: 'mp',
          title: 'Marketing Page',
          icon: 'icon-marketing',
          path: '/marketing'
        },
        lp: {
          name: 'lp',
          title: 'APA Pursuit',
          icon: 'icon-pursuit',
          path: '/pursuit'
        },
        hc: {
          name: 'hc',
          title: 'Health Check',
          icon: 'icon-health-check',
          path: '/health-check'
        },
        cm: {
          name: 'cm',
          title: 'Content Management',
          icon: 'icon-content-management',
          path: '/content-management'
        }
      };
    };

    function getUserAccess() {
        return {
          'Sales': ['mp', 'lp'],
          'LEAP_Admin': ['admin', 'pd', 'lr', 'cm', 'hc', 'lp', 'mp'],
          'LEAP_Practitioner': ['mp', 'pd'],
          'Customer_Leadership': ['lr', 'mp', 'pd'],
          'Customer_Practitioner': ['mp', 'pd'],
          'Customer_General_Participant': ['mp', 'pd'],
          'LEAP_RaaS_Admin': ['lr', 'mp', 'pd'],
          'LEAP_RaaS_Operator': ['lr', 'mp', 'pd'],
          'Customer_RaaS_Operator': ['lr', 'mp', 'pd'],
          'LEAP_Support': ['hc'],
          'NON_Approver': ['lr', 'pd', 'mp'],
          'Approver': ['admin', 'pd', 'lr', 'mp']
        }
    };

  },
  components: {
    MiniLoader
  },
  beforeDestroy: function() {
    window.clearInterval(this.fnRefreshNums);
    this.fnRefreshNums = null;
    eventHub.$off('unread-notis-changed', this.fnRequestUnreadNum);
  }
}
