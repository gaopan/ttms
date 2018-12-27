
let en = {
  schoolName: "香港崇正中學",
  name: "Hong Kong Tsung Tsin Middle School",
  address: "香港 九龙 长沙湾 广利道11号",
  contact: "Tsung Tsin Middle School Admission Department Mrs Liu",
  contact_tel: "+852 2387 8228",
  contact_phone: "+852 9790 6010/+86 13041218666",
  email: "info@ttmsedu.onaliyun.com",

  navs: 
  [
    {
      name: "Home",
      path: '/index',
      imgUrl: 'home-icon.png',
      notDisplayName: true
    }, {
      name: "Hong Kong TTMS",
      path: '/czzx',
      description: "The Establishment ..."
    }, {
      name: "Oxford International College",
      path: '/njgx',
      description: "Mission and Objective"
    }, {
      name: 'TTMS-OIC Programme',
      path: '/njkc',
      description: "Quality Assurance, Programme Structure ..."
    }, {
      name: 'Admission Guideline',
      path: '/rxsq',
      description: "Admission Requirements ..."
    }, {
      name: "TTMS OIC Campus",
      path: '/njxy',
      description: "The School Site and Structure ..."
    }, {
      name: "Honorary List",
      path: '/honor',
      description: "Previous Honor List"
    }, {
      // name: "Contact",
      nameHtml: "Contacts<br/>us",
      // description: "Contacts, Photo Gallery...",
      path: '/contact',
      imgUrl: "tick.png",
      imgClass: 'tick'
    }
  ]
};


let zh_hk = {
  schoolName: "香港崇正中學",
  name: "崇正牛津国际中学课程",
  address: "香港 九龙 长沙湾 广利道11号",
  contact: "崇正中学入学部 刘老师",
  contact_tel: "+852 2387 8228",
  contact_phone: "+852 9790 6010/+86 13041218666",
  email: "info@ttmsedu.onaliyun.com",  
  navs: 
  [
    {
      name: "主頁",
      path: '/index',
      imgUrl: 'home-icon.png',
      notDisplayName: true
    }, {
      name: "香港崇正中學",
      path: '/czzx',
      description: "創校之路，歷史佳績 ..."
    }, {
      name: "英國牛津國際公學",
      path: '/njgx',
      description: "創辦歷史，教育理念 ..."
    },{
      name: "崇正牛津國際中學課程",
      path: '/njkc',
      description: "質素保證，課程結構 ..."
    }, {
      name: '入學申請',
      path: '/rxsq',
      description: "申請資格，申請步驟 ..."
    }, {
      name: "崇正牛津校園",
      path: '/njxy',
      description: "校舍與結構 ..."
    }, {
      name: "光榮榜與傑出學生",
      path: '/honor',
      description: "歷屆榮譽榜 ..."
    }, {
      name: "聯繫方法與圖片分享",
      nameHtml: "聯繫<br/>方法",
      path: '/contact',
      imgUrl: "tick.png",
      imgClass: 'tick'
    }
  ]
}

export default {zh_hk, en }
