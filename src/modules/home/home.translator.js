
let en = {
  schoolName: "Tsung Tsin Middle School",
  name: "Hong Kong TTMS Oxford International Programme IGCSE A-Level",
  address: "Address: No.11 Kwong Lee Road, Cheung Sha Wan, Kowloon, Hong Kong",
  contact: "Contact: Tsung Tsin Middle School Admission Department Mrs Liu",
  contact_tel: "Tel: +852 2387 8228",
  contact_fax: "Fax: +852 2360 1293",
  contact_phone: "Phone: +852 9790 6010/+86 13041218666",
  website: "Website: ",
  email: "Email: ",

  navs: 
  [
    {
      name: "Hong Kong TTMS",
      path: '/czzx',
      description: "The Establishment ...",
      subPath:[{
        name: "The Establishment",
        path: '/czzx/establishment',
        href: '/czzx/establishment'
      }, {
        name: "Achievement over the past",
        path: '/czzx/achievement',
        href: '/czzx/achievement'
      }, {
        name: "TTMS Culture",
        path: '/czzx/culture',
        href: '/czzx/culture'
      }, {
        name: "School Governance",
        path: '/czzx/governance',
        href: '/czzx/governance'
      }]  
    }, {
      name: "Oxford International College",
      path: '/njgx',
      description: "Mission and Objective",
      subPath:[{
        name: "The Establishment",
        path: '/njgx/history',
        href: '/njgx/history'
      }, {
        name: "Mission and Objective",
        path: '/njgx/objective',
        href: '/njgx/objective'
      }, {
        name: "Out-reached Programme",
        path: '/njgx/programme',
        href: '/njgx/programme'
      }, {
        name: "Achievement over the past",
        path: '/njgx/achievement',
        href: '/njgx/achievement'
      }]  
    }, {
      name: 'TTMS-OIC Programme',
      path: '/njkc',
      description: "Quality Assurance, Programme Structure ...",
      subPath:[{
        name: "Quality Assurance",
        path: '/njkc/assurance',
        href: '/njkc/assurance'
      },{
        name: "Programme Curriculum",
        path: '/njkc/structure',
        href: '/njkc/structure'
      },{
        name: "Programme Articulation",
        path: '/njkc/articulation',
        href: '/njkc/articulation'
      },{
        name: "Professional Associations",
        path: '/njkc/associations',
        href: '/njkc/associations'
      },{
        name: "Exchange and Cooperation",
        path: '/njkc/cooperation',
        href: '/njkc/cooperation'
      }] 
    }, {
      name: 'Admission Guideline',
      path: '/rxsq',
      description: "Admission Requirements ...",
      subPath:[{
        name: "Admission Requirements",
        path: '/rxsq/requirements',
        href: '/rxsq/requirements'
      },{
        name: "Application Procedures",
        path: '/rxsq/procedures',
        href: '/rxsq/procedures'
      },{
        name: "Fees and Arrangement",
        path: '/rxsq/fees',
        href: '/rxsq/fees'
      }] 
    }, {
      name: "TTMS OIC Campus",
      path: '/njxy',
      description: "The School Site and Structure ...",
      subPath:[{
        name: "Site and Buildings",
        path: '/njxy/structure',
        href: '/njxy/structure'
      },{
        name: "Design and Facilities",
        path: '/njxy/facilities',
        href: '/njxy/facilities'
      },{
        name: "Transportation",
        path: '/njxy/transportation',
        href: '/njxy/transportation'
      }] 
    }, {
      name: "Honorary List",
      path: '/honor',
      description: "Previous Honor List",
      subPath:[{
        name: "Honorary List",
        path: '/honor/honorary-list',
        href: '/honor/honorary-list'
      },{
        name: "Outstanding Candidates",
        path: '/honor/candidates',
        href: '/honor/candidates'
      }]
    }, {
      // name: "Contact",
      nameHtml: "Contacts<br/>us",
      // description: "Contacts, Photo Gallery...",
      path: '/contact',
      imgUrl: "tick.png",
      imgClass: 'tick',
      subPath:[{
        name: "Contacts",
        path: '/contact/contacts',
        href: '/contact/contacts'
      },{
        name: "Photo Gallery",
        path: '/contact/photo',
        href: '/contact/photo'
      }] 
    }
  ]
};


let zh_hk = {
  schoolName: "香港崇正中學",
  name: "香港崇正中學牛津國際課程IGCSE A-Level",
  address: "地址： 香港 九龍 長沙灣 廣利道11號",
  contact: "聯系人： 崇正中學入學部 劉老師",
  contact_tel: "電話： +852 2387 8228",
  contact_fax: "傳真： +852 2360 1293",
  contact_phone: "手機： +852 9790 6010/+86 13041218666",
  email: "電郵： ",  
  website: "網站： ", 
  navs: 
  [
    {
      name: "香港崇正中學",
      path: '/czzx',
      description: "創校之路，歷史佳績 ...",
      subPath:
      [
        {
          name: "創校之路",
          path: '/czzx/establishment',
          href: '/czzx/establishment',
        }, {
          name: "歷史佳績",
          path: '/czzx/achievement',
          href: '/czzx/achievement',
        }, {
          name: "崇正文化",
          path: '/czzx/culture',
          href: '/czzx/culture',
        }, {
          name: "學校管治",
          path: '/czzx/governance',
          href: '/czzx/governance',
        }
      ]      
    }, {
      name: "英國牛津國際公學",
      path: '/njgx',
      description: "創辦歷史，教育理念 ...",
      subPath:  
      [
        {
          name: "創辦歷史",
          path: '/njgx/history',
          href: '/njgx/history',
        }, {
          name: "教育理念",
          path: '/njgx/objective',
          href: '/njgx/objective',
        }, {
          name: "延伸課程",
          path: '/njgx/programme',
          href: '/njgx/programme',
        }, {
          name: "屢創佳績",
          path: '/njgx/achievement',
          href: '/njgx/achievement',
        }
      ]
    },{
      name: "崇正牛津國際中學課程",
      path: '/njkc',
      description: "質素保證，課程結構 ...",
      subPath:
      [
        {
          name: "質素保證",
          path: '/njkc/assurance',
          href: '/njkc/assurance'
        },{
          name: "課程結構",
          path: '/njkc/structure',
          href: '/njkc/structure'
        },{
          name: "升學階梯",
          path: '/njkc/articulation',
          href: '/njkc/articulation'
        },{
          name: "專修社團",
          path: '/njkc/associations',
          href: '/njkc/associations'
        },{
          name: "交流合作",
          path: '/njkc/cooperation',
          href: '/njkc/cooperation'
        }
      ]
    }, {
      name: '入學申請',
      path: '/rxsq',
      description: "申請資格，申請步驟 ...",
      subPath:
      [
        {
          name: "申請資格",
          path: '/rxsq/requirements',
          href: '/rxsq/requirements'
        },{
          name: "申請流程",
          path: '/rxsq/procedures',
          href: '/rxsq/procedures'
        },{
          name: "收費及財務安排",
          path: '/rxsq/fees',
          href: '/rxsq/fees'
        }
      ]
    }, {
      name: "崇正牛津校園",
      path: '/njxy',
      description: "校舍與結構 ...",
      subPath:
      [
        {
          name: "場地與設施",
          path: '/njxy/structure',
          href: '/njxy/structure'
        },{
          name: "設計與設施",
          path: '/njxy/facilities',
          href: '/njxy/facilities'
        },{
          name: "交通路線",
          path: '/njxy/transportation',
          href: '/njxy/transportation'
        }
      ]
    }, {
      name: "光榮榜與傑出學生",
      path: '/honor',
      description: "歷屆榮譽榜 ...",
      subPath:
      [
        {
          name: "光榮榜",
          path: '/honor/honorary-list',
          href: '/honor/honorary-list'
        },{
          name: "傑出代表",
          path: '/honor/candidates',
          href: '/honor/candidates'
        }
      ]
    }, {
      name: "聯繫方法與圖片分享",
      nameHtml: "聯繫<br/>方法",
      path: '/contact',
      imgUrl: "tick.png",
      imgClass: 'tick',
      subPath:
      [
       {
          name: "聯繫方法",
          path: '/contact/contacts',
          href: '/contact/contacts'
        },{
          name: "照片分享",
          path: '/contact/photo',
          href: '/contact/photo'
        }
      ]
    }
  ]
}

export default {zh_hk, en }
