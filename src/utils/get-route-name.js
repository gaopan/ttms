function getRouteName(HomeTranslator,currentLang,$route){
    let navNameTip = { name:null, subName:null };

    HomeTranslator[currentLang].navs.every(nav=>{
      if(navNameTip.name && navNameTip.subName)return false;
      nav.subPath.every(nav_=>{
        if(nav_.path === $route.path){
          navNameTip.name = nav.name;
          navNameTip.subName = nav_.name;
          return false;
        }
        return true;
      })
      return true;
    })

    return navNameTip;
}
export default getRouteName;