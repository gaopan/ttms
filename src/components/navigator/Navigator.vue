<template>
  <nav ref="container" class="navbar navbar-default navbar-static-top" id="navigator">
    <div v-if="!dmSelfAdaption">
      <div class="title" @click="fnGoToMainPage()">
        <img class="logo" :src="imgUrl('LogoAPA_small.png')" >
        <span :class="{'logo-text':currentConsole.haveLine,'logo-text-line':!currentConsole.haveLine}" v-if="currentConsole.visibility">{{currentConsole.displayedName}}</span>
      </div>
      <div class="display-title">
        <button class="btn btn-default btn-nav" v-if="currentConsole.showRouters" v-for="navConsoleRouter in navConsoleRouters" @click="navTo(navConsoleRouter.path,currentConsole)">
          {{navConsoleRouter.displayedName}}
        </button>
      </div>
      
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-right-button" v-if="currentConsole.showTwoButtons">
          <button class="btn btn-secondary-alt" @click='navToIdea'>Idea</button>
          <button class="btn btn-secondary-alt" @click='navToIssue' v-if="showIssue">Issue</button>
        </li> 
        <div class="nav-right-button support-container" v-if="currentConsole.showSupport" >
          <button @click='navToSupport()' :class="{'under-page':currentConsole.underSuppPage}"class="btn btn-secondary-alt">Support</button>
        </div>
        <li class='notify-bell-box' @click="navToNotifycation()">
          <i class="icon-bell-o"></i>
          <span v-if="unReadNum !== 0">{{unReadNum}}</span>
        </li>
        <li class="dropdown">
          <a href="javascript: void(0);" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="greeting-user-container">
            <span class="greeting-user">
              <small>Good day,</small>
              {{greeting}}
            </span>
            <i class="glyphicon icon-angle-down"></i>
          </a>
          <div class="dropdown-menu" :class="{'only-one-console':onlyOneConsole}">
            <div class="menus-container">
              <div v-for="(menu,index) in displayedMenus" :id="menu.title" class="each-menu-container" :class="{'last-menu-container': index === displayedMenus.length - 1 && displayedMenus.length % 2 !== 0}" @click='navTo(menu.path,currentConsole)'>
                <div class="content">
                  <i class="icons" :class="menu.icon"></i>
                  <p>{{menu.title}}</p>
                </div>
              </div>
            </div>
            <div class="go-to-user-profile" @click="navToUserPro()">User Profile</div>
            <div id="logout" class="logout" :class="{'remove-top-border': displayedMenus.length == 0}" @click="navTo('/logout',currentConsole)">Logout</div>
          </div>
        </li>
        <!-- <li class="dropdown" id="integrate-smartlook-box" v-if="currentConsole.showSmart">
          <a href="javascript: void(0);" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" id="smartlook-content" aria-expanded="false"><i class="icon-adminsetting integrate-smartlook"></i></a>
          <div class="dropdown-menu" @click="stopPropagation()">
            <p>
              <span>Integrate with Smartlook</span>
              <span class="icon" @click="integrateSmartlook()">
                <i class="icon-toggle-off" v-if="!toggleOn"></i>
                <i class="icon-toggle-on" v-if="toggleOn"></i>
              </span>
            </p>
            <p>others</p>
          </div>
        </li> -->
        <li class="cus-logo" v-if="currentConsole.showCusPic"><img :src="cust.logoUrl" /></li>
      </ul>
    </div>
    <div v-if="dmSelfAdaption">
      <div class="sa-title">
        <img class="logo" :src="imgUrl('LogoAPA_small.png')" @click="fnGoToMainPage()">
      </div>
      <div class="dropdown" id="displayed-name-self-adaption" v-if="currentConsole.showRouters && navConsoleRouters.length !== 0 ">
        <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-navicon"></i></span>
        <div class="dropdown-menu" >
          <P v-for="navConsoleRouter in navConsoleRouters" @click="navTo(navConsoleRouter.path,currentConsole)">{{navConsoleRouter.displayedName}}
          </P>
        </div>
      </div>
      <ul class="nav navbar-nav navbar-right" :class="{'sa-navbar-nav':showSmallStyle}">
        <li class='notify-bell-box' @click="navToNotifycation()">
          <i class="icon-bell-o"></i>
          <span v-if="unReadNum !== 0">{{unReadNum}}</span>
        </li>
        <li class="dropdown" :class="{'sa-dropdown':showSmallStyle}">
          <a href="javascript: void(0);" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="greeting-user-container">
            <span class="greeting-user">
              <small>Good day,</small>
              {{greeting}}
            </span>
            <i class="glyphicon icon-angle-down"></i>
          </a>
          <div class="dropdown-menu sa-dropdown-menu" :class="{'only-one-console':onlyOneConsole}">
            <div class="sa-menus-container">
              <div v-for="(menu,index) in displayedMenus" :id="menu.title" class="sa-each-menu-container" :class="{'last-menu-container': index === displayedMenus.length - 1 && displayedMenus.length % 2 !== 0}" @click='navTo(menu.path,currentConsole)'>
                <div class="sa-content">
                  <i class="icons" :class="menu.icon"></i>
                  <p>{{menu.title}}</p>
                </div>
              </div>
            </div>
            <div class="sa-nav-right-button" v-if="currentConsole.showTwoButtons">
              <p @click='navToIdea()'>
                <span><i class="icon-lightbulb-o"></i></span>
                <span>Idea</span>
              </p>
              <p @click='navToIssue()'>
                <span><i class="icon-blogspot"></i></span>
                <span>Issue</span>
              </p>
            </div>
            <div class="sa-nav-support-button" v-if="currentConsole.showSupport">
              <p @click='navToSupport()' :class="{'under-page':currentConsole.underSuppPage}">
                  <span><i class="icon-support"></i></span>
                  <span>Support</span> 
              </p>
            </div>
            <div class="sa-user-profile" @click="navToUserPro()">
              <i class="icon-user"></i>
              <span>User Profile</span>
            </div>
            <div id="logout" class="sa-logout" :class="{'remove-top-border': displayedMenus.length == 0}" @click="navTo('/logout',currentConsole)">
              <i class="icon-sign-out"></i>
              <span>Logout</span>
            </div>
          </div>
        </li>
        <!-- <li class="dropdown" id="integrate-smartlook-box" v-if="currentConsole.showSmart">
          <a href="javascript: void(0);" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" id="smartlook-content" aria-expanded="false"><i class="icon-adminsetting integrate-smartlook"></i></a>
          <div class="dropdown-menu" @click="stopPropagation()">
            <p>
              <span>Integrate with Smartlook</span>
              <span class="icon" @click="integrateSmartlook()">
                <i class="icon-toggle-off" v-if="!toggleOn"></i>
                <i class="icon-toggle-on" v-if="toggleOn"></i>
              </span>
            </p>
            <p>others</p>
          </div>
        </li> -->
        <li class='self-cus-logo' v-if="currentConsole.showCusPic"><img :src="cust.logoUrl" /></li>
      </ul>
    </div>
    <mini-loader></mini-loader>
  </nav>
</template>
<script src="./navigator.js"></script>
<style src="./navigator.css"></style>
<style lang="scss" src="./navigator.scss" scoped></style>
