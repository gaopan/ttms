<template>
  <div :id="$router.currentRoute.path == '/index' ? 'home' : 'inside'">
    <header role="banner">
      <div class="advert"><img style="display: block; margin-left: auto; margin-right: auto;height:100px;" :src="imgUrl('oxcoll_banner.png')" alt="Oxford International College" title="Oxford International College"></div>
      <div class="navbar navbar-inverse" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <div itemscope="" itemtype="http://schema.org/Organization">
              <a itemprop="url" class="navbar-brand" href="/">
						<img style="display: inline-block;height: 90px;" :src="imgUrl('czzx-logo.png')" />
						<span></span>
					</a>
            </div>
            <div class="brand-strap">
              <div>
                <p class="big">{{'name' | translate(translator, currentLang)}}</p>
                <p>
                  {{'address' | translate(translator, currentLang)}}
                  <br/> {{'contact' | translate(translator, currentLang)}}
                  <br/> {{'contact_tel' | translate(translator, currentLang)}}
                </p>
              </div>
              <div class="langs">
              	<div :class="{active: lang.value==currentLang}" class="lang" v-for="lang in langs" @click="changedLang(lang)">{{lang.name}}</div>
              </div>
            </div>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <nav role="navigation" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li :class="{active: isCurrentPath(nav.path)}" v-for="nav in navs">
                <a href="javascript:void(0)" @click="navTo(nav)">
              		<span v-if="!nav.notDisplayName&&nav.nameHtml" v-html="nav.nameHtml"></span>
              		<span v-if="!nav.notDisplayName&&!nav.nameHtml">{{nav.name}}</span>
              		<img v-if="nav.imgUrl" :src="imgUrl(nav.imgUrl)" :class="nav.imgClass" />
              		{{nav.imgUrl ? "" : nav.description}}
              	</a>
              </li>
            </ul>
          </nav>
          <!--/.nav-collapse --><span style="border-radius: 2px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font: bold 11px/20px 'Helvetica Neue',Helvetica,sans-serif; color: #ffffff; background: #bd081c url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzBweCIgd2lkdGg9IjMwcHgiIHZpZXdCb3g9Ii0xIC0xIDMxIDMxIj48Zz48cGF0aCBkPSJNMjkuNDQ5LDE0LjY2MiBDMjkuNDQ5LDIyLjcyMiAyMi44NjgsMjkuMjU2IDE0Ljc1LDI5LjI1NiBDNi42MzIsMjkuMjU2IDAuMDUxLDIyLjcyMiAwLjA1MSwxNC42NjIgQzAuMDUxLDYuNjAxIDYuNjMyLDAuMDY3IDE0Ljc1LDAuMDY3IEMyMi44NjgsMC4wNjcgMjkuNDQ5LDYuNjAxIDI5LjQ0OSwxNC42NjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PHBhdGggZD0iTTE0LjczMywxLjY4NiBDNy41MTYsMS42ODYgMS42NjUsNy40OTUgMS42NjUsMTQuNjYyIEMxLjY2NSwyMC4xNTkgNS4xMDksMjQuODU0IDkuOTcsMjYuNzQ0IEM5Ljg1NiwyNS43MTggOS43NTMsMjQuMTQzIDEwLjAxNiwyMy4wMjIgQzEwLjI1MywyMi4wMSAxMS41NDgsMTYuNTcyIDExLjU0OCwxNi41NzIgQzExLjU0OCwxNi41NzIgMTEuMTU3LDE1Ljc5NSAxMS4xNTcsMTQuNjQ2IEMxMS4xNTcsMTIuODQyIDEyLjIxMSwxMS40OTUgMTMuNTIyLDExLjQ5NSBDMTQuNjM3LDExLjQ5NSAxNS4xNzUsMTIuMzI2IDE1LjE3NSwxMy4zMjMgQzE1LjE3NSwxNC40MzYgMTQuNDYyLDE2LjEgMTQuMDkzLDE3LjY0MyBDMTMuNzg1LDE4LjkzNSAxNC43NDUsMTkuOTg4IDE2LjAyOCwxOS45ODggQzE4LjM1MSwxOS45ODggMjAuMTM2LDE3LjU1NiAyMC4xMzYsMTQuMDQ2IEMyMC4xMzYsMTAuOTM5IDE3Ljg4OCw4Ljc2NyAxNC42NzgsOC43NjcgQzEwLjk1OSw4Ljc2NyA4Ljc3NywxMS41MzYgOC43NzcsMTQuMzk4IEM4Ljc3NywxNS41MTMgOS4yMSwxNi43MDkgOS43NDksMTcuMzU5IEM5Ljg1NiwxNy40ODggOS44NzIsMTcuNiA5Ljg0LDE3LjczMSBDOS43NDEsMTguMTQxIDkuNTIsMTkuMDIzIDkuNDc3LDE5LjIwMyBDOS40MiwxOS40NCA5LjI4OCwxOS40OTEgOS4wNCwxOS4zNzYgQzcuNDA4LDE4LjYyMiA2LjM4NywxNi4yNTIgNi4zODcsMTQuMzQ5IEM2LjM4NywxMC4yNTYgOS4zODMsNi40OTcgMTUuMDIyLDYuNDk3IEMxOS41NTUsNi40OTcgMjMuMDc4LDkuNzA1IDIzLjA3OCwxMy45OTEgQzIzLjA3OCwxOC40NjMgMjAuMjM5LDIyLjA2MiAxNi4yOTcsMjIuMDYyIEMxNC45NzMsMjIuMDYyIDEzLjcyOCwyMS4zNzkgMTMuMzAyLDIwLjU3MiBDMTMuMzAyLDIwLjU3MiAxMi42NDcsMjMuMDUgMTIuNDg4LDIzLjY1NyBDMTIuMTkzLDI0Ljc4NCAxMS4zOTYsMjYuMTk2IDEwLjg2MywyNy4wNTggQzEyLjA4NiwyNy40MzQgMTMuMzg2LDI3LjYzNyAxNC43MzMsMjcuNjM3IEMyMS45NSwyNy42MzcgMjcuODAxLDIxLjgyOCAyNy44MDEsMTQuNjYyIEMyNy44MDEsNy40OTUgMjEuOTUsMS42ODYgMTQuNzMzLDEuNjg2IiBmaWxsPSIjYmQwODFjIj48L3BhdGg+PC9nPjwvc3ZnPg==') no-repeat scroll 3px 50% / 14px 14px; position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer;">Save</span><span style="border-radius: 2px; text-indent: 20px; width: auto; padding: 0px 4px 0px 0px; text-align: center; font: bold 11px/20px 'Helvetica Neue',Helvetica,sans-serif; color: #ffffff; background: #bd081c url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzBweCIgd2lkdGg9IjMwcHgiIHZpZXdCb3g9Ii0xIC0xIDMxIDMxIj48Zz48cGF0aCBkPSJNMjkuNDQ5LDE0LjY2MiBDMjkuNDQ5LDIyLjcyMiAyMi44NjgsMjkuMjU2IDE0Ljc1LDI5LjI1NiBDNi42MzIsMjkuMjU2IDAuMDUxLDIyLjcyMiAwLjA1MSwxNC42NjIgQzAuMDUxLDYuNjAxIDYuNjMyLDAuMDY3IDE0Ljc1LDAuMDY3IEMyMi44NjgsMC4wNjcgMjkuNDQ5LDYuNjAxIDI5LjQ0OSwxNC42NjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PHBhdGggZD0iTTE0LjczMywxLjY4NiBDNy41MTYsMS42ODYgMS42NjUsNy40OTUgMS42NjUsMTQuNjYyIEMxLjY2NSwyMC4xNTkgNS4xMDksMjQuODU0IDkuOTcsMjYuNzQ0IEM5Ljg1NiwyNS43MTggOS43NTMsMjQuMTQzIDEwLjAxNiwyMy4wMjIgQzEwLjI1MywyMi4wMSAxMS41NDgsMTYuNTcyIDExLjU0OCwxNi41NzIgQzExLjU0OCwxNi41NzIgMTEuMTU3LDE1Ljc5NSAxMS4xNTcsMTQuNjQ2IEMxMS4xNTcsMTIuODQyIDEyLjIxMSwxMS40OTUgMTMuNTIyLDExLjQ5NSBDMTQuNjM3LDExLjQ5NSAxNS4xNzUsMTIuMzI2IDE1LjE3NSwxMy4zMjMgQzE1LjE3NSwxNC40MzYgMTQuNDYyLDE2LjEgMTQuMDkzLDE3LjY0MyBDMTMuNzg1LDE4LjkzNSAxNC43NDUsMTkuOTg4IDE2LjAyOCwxOS45ODggQzE4LjM1MSwxOS45ODggMjAuMTM2LDE3LjU1NiAyMC4xMzYsMTQuMDQ2IEMyMC4xMzYsMTAuOTM5IDE3Ljg4OCw4Ljc2NyAxNC42NzgsOC43NjcgQzEwLjk1OSw4Ljc2NyA4Ljc3NywxMS41MzYgOC43NzcsMTQuMzk4IEM4Ljc3NywxNS41MTMgOS4yMSwxNi43MDkgOS43NDksMTcuMzU5IEM5Ljg1NiwxNy40ODggOS44NzIsMTcuNiA5Ljg0LDE3LjczMSBDOS43NDEsMTguMTQxIDkuNTIsMTkuMDIzIDkuNDc3LDE5LjIwMyBDOS40MiwxOS40NCA5LjI4OCwxOS40OTEgOS4wNCwxOS4zNzYgQzcuNDA4LDE4LjYyMiA2LjM4NywxNi4yNTIgNi4zODcsMTQuMzQ5IEM2LjM4NywxMC4yNTYgOS4zODMsNi40OTcgMTUuMDIyLDYuNDk3IEMxOS41NTUsNi40OTcgMjMuMDc4LDkuNzA1IDIzLjA3OCwxMy45OTEgQzIzLjA3OCwxOC40NjMgMjAuMjM5LDIyLjA2MiAxNi4yOTcsMjIuMDYyIEMxNC45NzMsMjIuMDYyIDEzLjcyOCwyMS4zNzkgMTMuMzAyLDIwLjU3MiBDMTMuMzAyLDIwLjU3MiAxMi42NDcsMjMuMDUgMTIuNDg4LDIzLjY1NyBDMTIuMTkzLDI0Ljc4NCAxMS4zOTYsMjYuMTk2IDEwLjg2MywyNy4wNTggQzEyLjA4NiwyNy40MzQgMTMuMzg2LDI3LjYzNyAxNC43MzMsMjcuNjM3IEMyMS45NSwyNy42MzcgMjcuODAxLDIxLjgyOCAyNy44MDEsMTQuNjYyIEMyNy44MDEsNy40OTUgMjEuOTUsMS42ODYgMTQuNzMzLDEuNjg2IiBmaWxsPSIjYmQwODFjIj48L3BhdGg+PC9nPjwvc3ZnPg==') no-repeat scroll 3px 50% / 14px 14px; position: absolute; opacity: 1; z-index: 8675309; display: none; cursor: pointer;">Save</span> </div>
      </div>
    </header>
    <router-view></router-view>
    <footer role="contentinfo">
      <div class="container">
        <div id="footer-left">
          <p>
            <strong>{{'name' | translate(translator, currentLang)}}</strong>
            <br/>{{'address' | translate(translator, currentLang)}}
            <br/>
            <br/>
            <a href="mailto:info@oxcoll.com">info@ttmsedu.onaliyun.com</a>
            <br/> {{'contact' | translate(translator, currentLang)}}
            <br/> {{'contact_tel' | translate(translator, currentLang)}}
            <br/> {{'contact_phone' | translate(translator, currentLang)}}
            <br/>
            <img :src="imgUrl('contact-fb.png')">
            <img :src="imgUrl('contact-we.png')">
          </p>
        </div>
        <div id="footer-middle">
          <img style="display: inline-block;width: 50%;" :src="imgUrl('czzx-logo.png')" alt="TTMS" />
          <img style="display: inline-block;width: 50%;" :src="imgUrl('footer-logo.png')" alt="Oxford International College" />
        </div>
        <!-- <div id="footer-right">
          <div class="subscribe">
            <p><strong>Join our mailing list</strong></p>
            <form action="/index.html#subscribe-top" method="post" id="subscribe" name="subscribe" class="form-horizontal">
              <div class="form-group">
                <label for="fullname3" class="control-label ">Full Name * : </label>
                <div class="col-sm-12">
                  <input name="fullname3" type="text" id="fullname3" class="text  form-control" value="" tabindex="301" placeholder="Name">
                </div>
              </div>
              <div class="form-group">
                <label for="email3" class="control-label ">Email address * : </label>
                <div class="col-sm-12">
                  <input name="email3" type="text" id="email3" class="text form-control" value="" tabindex="302" placeholder="Email address">
                </div>
              </div>
              <div class="form-group">
                <label style="display: block" for="confirm3" class="control-label col-xs-9 longlabel ">For security, please enter the number <strong>4</strong> into the box *</label>
                <div class="col-xs-3">
                  <input type="text" class="text form-control" name="confirm3" id="confirm3" tabindex="302" onfocus="clearField3(name);" value="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-xs-12 col-md-4 col-md-push-8">
                  <input name="submit3" type="submit" id="submit3" value="Sign Up" tabindex="303" class="btn btn-default">
                </div>
              </div>
            </form>
          </div>
        </div> -->
      </div>
    </footer>
    <div class="footer-sub">
      <img :src="imgUrl('star88.jpg')" style="height:70px" alt="星光88" title="星光88">
      <img src="http://www.oxcoll.com/library-assets/isa1001.gif" alt="" width="145" height="74"><img src="http://www.oxcoll.com/library-assets/edexcel.gif" alt="Edexcel" title="Edexcel" width="137" height="70">
      <img src="http://www.oxcoll.com/library-assets/aqa.gif" alt="AQA" title="AQA">
      <img src="http://www.oxcoll.com/library-assets/ocr.gif" alt="OCR" title="OCR">
      <img src="http://www.oxcoll.com/library-assets/wjec.gif" alt="WJEC" title="WJEC">
      <img src="http://www.oxcoll.com/library-assets/university-of-cambridge.gif" alt="University of Cambridge" title="University of Cambridge">
      <img src="http://www.oxcoll.com/library-assets/cife.gif" alt="cife" title="cife">
    </div>
  </div>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
