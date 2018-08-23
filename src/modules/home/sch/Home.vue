<template>
  <div class="bg-white">
    <header>
      <div class="header-top border-green">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-5 hidden-xs">
              <span>有问题 ? +852 2387 8228</span>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-7 col-xs-12">
              <div class="header-top-right">
                <div class="content"><a href="#"><i class="fa fa-language"></i> 中文繁体</a>
                  <ul class="account-dropdown">
                    <li><a href="/#/tch">中文繁体</a></li>
                    <li><a href="/#/sch">中文简体</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-5 hidden-xs">
              <span class="text-blue">有问题 ? +852 2387 8228</span>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-7 col-xs-12">
              <div class="header-top-right">
                <span class="text-blue">电话: +852 2387 8228</span>
                <span class="text-blue">电邮: ttsmedu@yahoo.com.hk</span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="header-logo-menu padding-small sticker">
        <div class="container">
          <div class="row">
            <div class="hidden-md hidden-lg col-sm-12">
              <div class="logo">
                <a href="javascript:void(0)" @click="navTo({path: '/index'})" style="white-space: nowrap;">
                  <img style="max-height: 160px;vertical-align:middle" :src="imgUrl('czzx-logo.png')" alt="香港崇正中学">
                </a>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mainmenu-area" style="text-align: center">
                <div class="mainmenu hidden-sm hidden-xs">
                  <nav>
                    <ul id="nav" class="border-full border-top-2">
                      <li v-for="item in leftMenu" :class="{current: isCurrentPath(item.path)}"><a href="javascript:void(0)" @click="navTo(item)">{{item.name}}</a>
                        <ul class="sub-menu" v-if="item.children">
                          <li v-for="cItem in item.children">
                            <a href="javascript:void(0)" @click="navTo(cItem)">{{cItem.name}}</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div class="logo">
                          <a href="javascript:void(0)" @click="navTo({path: '/index'})" style="white-space: nowrap;">
                            <img style="max-height: 160px;vertical-align:middle" :src="imgUrl('czzx-logo.png')" alt="香港崇正中学">
                          </a>
                        </div>
                      </li>
                      <li v-for="item in rightMenu" :class="{current: isCurrentPath(item.path)}"><a href="javascript:void(0)" @click="navTo(item)">{{item.name}}</a>
                        <ul class="sub-menu" v-if="item.children">
                          <li v-for="cItem in item.children">
                            <a href="javascript:void(0)" @click="navTo(cItem)">{{cItem.name}}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- <ul class="header-search">
                  <li class="search-menu">
                    <i id="toggle-search" class="zmdi zmdi-search-for"></i>
                  </li>
                </ul> -->
                <!--Search Form-->
                <!-- <div class="search">
                  <div class="search-form">
                    <form id="search-form" action="#">
                      <input type="search" placeholder="Search here..." name="search" />
                      <button type="submit">
                        <span><i class="fa fa-search"></i></span>
                      </button>
                    </form>
                  </div>
                </div> -->
                <!--End of Search Form-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Menu Area start -->
      <div class="mobile-menu-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="mobile-menu">
                <nav id="dropdown">
                  <ul>
                    <li v-for="item in menu" :class="{current: isCurrentPath(item.path)}"><a :href="item.href">{{item.name}}</a>
                      <ul class="sub-menu" v-if="item.children">
                        <li v-for="cItem in item.children">
                          <a :href="cItem.href">{{cItem.name}}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <div class="newsletter-area">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-5">
            <div class="newsletter-content">
              <h3>联系我们</h3>
              <h2>访问我们</h2>
            </div>
          </div>
          <div class="col-md-7 col-sm-7">
            <div class="newsletter-form angle">
              <div class="mc-form footer-newsletter fix">
                <div class="subscribe-form-btn">
                  <button @click="navTo({path: '/tch/sblc/sqlc'})">开始申请</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End of Newsletter Area-->
    <!--Footer Widget Area Start-->
    <div class="footer-widget-area">
      <div class="container">
        <div class="row" style="margin-bottom: 30px;">
          <div class="col-xs-3">
            <a href="javascript:void(0)" @click="navTo({path: '/index'})"><img style="max-height: 180px;" :src="imgUrl('czzx-logo.png')" alt="香港崇正中学"></a>
          </div>
          <div class="col-xs-9">
            <br/>
            <p>瞭解更多关于牛津国际学院的最佳方式就是访问我们。</p>
            <br/>
            <p>您可以认识我们的学生管理和学业教职员工，更多地瞭解学校文化，并探索我们独特的教育方法。</p>
            <br/>
            <p>您可以在一年中的任何时间访问我们。在上课期间，欢迎学生来校实地查看他们所选的学科课程。</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h3>联繫方式</h3>
              <span><i class="fa fa-phone"></i>+852 2387 8228</span>
              <span><i class="fa fa-envelope"></i>info@ttmsedu.onaliyun.com</span>
              <span><i class="fa fa-user"></i>崇正中学入学部 曾先生</span>
              <span><i class="fa fa-globe"></i>www.ttmsedu.com</span>
              <span><i class="fa fa-map-marker"></i>香港 九龙 长沙湾 广利道11号</span>
              <a href="#"><i class="fa fa-mobile"></i>+852 5716 0001/+86 13229307689</a>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h3>其他方式</h3>
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <img :src="imgUrl('contact-fb.png')">
                  <div style="margin-top: 15px;">Facebook</div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <img :src="imgUrl('contact-we.png')">
                  <div style="margin-top: 15px;">微信</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End of Footer Widget Area-->
    <!--Footer Area Start-->
    <!-- <footer class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-7">
            <span>Copyright &copy; Educat 2017.All right reserved.Created by <a href="#">Educat</a></span>
          </div>
          <div class="col-md-6 col-sm-5">
            <div class="column-right">
              <span>Privacy Policy , Terms &amp; Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>
<style src="./home.scss" lang="scss"></style>
<script src="./home.js"></script>
