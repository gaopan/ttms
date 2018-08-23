<template>
	<div class="main bg-white">
		<header class="clearfix">
			<div class="advert">
				<img style="display: block; margin-left: auto; margin-right: auto;" src="http://www.oxcoll.com/library-assets/oxcoll_banner.png" alt="牛津國際學院" title="牛津國際學院">
			</div>
			<h1 style="line-height: 1.5; text-align: left">
				<span style="color: white">崇正牛津國際中學課程</span>
			</h1>
			<div class="navbar">
				<ul class="nav navbar-nav">
					<li><a href="#">願景與方法</a></li>
					<li><a href="#">學術卓越</a></li>
					<li><a href="#">職業準備</a></li>
					<li><a href="#">親善大使計畫</a></li>
					<li><a href="#">個人發展</a></li>
					<li><a href="#">課外活動和體育運動</a></li>
					<li><a href="#">住宿和學生福利</a></li>
					<li><a href="#">申請流程及費用</a></li>
					<li><a href="#">2016/2017年度光榮榜</a></li>
				</ul>
			</div>
		</header>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<style src="./home.scss" lang="scss"></style>
<script src="./home.js"></script>