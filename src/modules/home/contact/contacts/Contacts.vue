<template>
  <main class="content-main contact-contacts" role="main">
  	<ul v-show="currentLang == 'zh_hk'">
		<li class="contacts-title">更多查詢<span class="title-right">崇正中學牛津國際課程</span></li>
		
		<table class="contacts-table">
			<tr>
				<td class="contacts-left">地址：</td>
				<td class="contacts-right">香港九龍長沙灣廣利道11號</td>
			</tr>
			<tr>
				<td class="contacts-left">電話：</td>
				<td class="contacts-right">+852 2387 8228</td>
			</tr>
			<tr>
				<td class="contacts-left">傳真：</td>
				<td class="contacts-right">+852 2360 1293</td>
			</tr>
			<tr>
				<td class="contacts-left">網站：</td>
				<td class="contacts-right">www.ttms.edu.hk</td>
			</tr>
			<tr>
				<td class="contacts-left">電郵：</td>
				<td class="contacts-right">info@ttms.edu.hk</td>
			</tr>
		</table>
  	</ul>
  	<ul v-show="currentLang == 'en'">
		<li class="contacts-title">For further enquiries<span class="title-right">Tsung Tsin Middle School (International Programme)</span></li>
		
		<table class="contacts-table">
			<tr>
				<td class="contacts-left">Address：</td>
				<td class="contacts-right">No.11 Kwong Lee Road, Cheung Sha Wan, Kowloon, Hong Kong</td>
			</tr>
			<tr>
				<td class="contacts-left">Tel：</td>
				<td class="contacts-right">+852 2387 8228</td>
			</tr>
			<tr>
				<td class="contacts-left">Fax：</td>
				<td class="contacts-right">+852 2360 1293</td>
			</tr>
			<tr>
				<td class="contacts-left">Website：</td>
				<td class="contacts-right">www.ttms.edu.hk</td>
			</tr>
			<tr>
				<td class="contacts-left">Email：</td>
				<td class="contacts-right">info@ttms.edu.hk</td>
			</tr>
		</table>
  	</ul>
  </main>
</template>
<script src="./contacts.js"></script>
<style>
.contact-contacts ul{
	width: 80%;
	margin: 10px auto 40px;
	background: #b27524;
	box-shadow: 0 0 10px #000;
	color: #fff;
	padding: 20px;
}
.contact-contacts ul li{
	margin-bottom: 20px;
	text-align: right;
}
.contact-contacts ul li.contacts-title{
	/*margin-bottom: 40px;*/
	font-size: 24px;
	border-bottom: 2px solid #deb95f;
	padding-bottom: 10px;
	position: relative;
	text-align: left;
}
.contact-contacts ul li.contacts-title .title-right{
	position: absolute;
	right: 0;
	top: 6px;
	font-size: 16px;
}
.contact-contacts table.contacts-table{
	width: 100%;
}
.contact-contacts table.contacts-table td.contacts-left{
	width: 42%;
	text-align: right;
	line-height: 3;
}
.contact-contacts table.contacts-table td.contacts-right{
	text-align: left;
	/*line-height: 3;*/
	line-height: 24px;
}
@media (max-width: 1200px) {
	.contact-contacts ul{
		width: 100%;
	}
}
@media (max-width: 768px) {
	.contact-contacts ul li{
    	font-size: 14px;
    }

    .contact-contacts ul li.contacts-title{
    	font-size:18px;
    }
    .contact-contacts ul li.contacts-title .title-right{
    	font-size: 14px;
    	top: 4px;
    }
    .contact-contacts table.contacts-table td{
    	font-size: 14px;
    }
}

@media (max-width: 530px) {
    .contact-contacts ul li.contacts-title{
    	font-size:18px;
    	height: 50px;
    }
    .contact-contacts ul li.contacts-title .title-right{
    	font-size: 12px;
    	top: 24px;
    	left: 0px;
    }
    .contact-contacts table.contacts-table td{
    	font-size: 14px;
    }
    .contact-contacts table.contacts-table td.contacts-left{
    	/*text-align: left;*/
    	width: 10%;
    }
}
@media (max-width: 490px) {
.contact-contacts table.contacts-table td.contacts-left{
    	/*text-align: left;*/
    	width: 12%;
    }
@media (max-width: 480px) {
	.contact-contacts{
		width: 100%;
	}
    .contact-contacts ul{
        width: 100%;
    }
    .contact-contacts ul li{
    	font-size: 14px;
    }
    .contact-contacts ul li.contacts-title{
    	font-size:16px;
    }
    .contact-contacts table.contacts-table td{
    	font-size: 14px;
    }
    
}
}
@media (max-width: 420px) {
.contact-contacts table.contacts-table td.contacts-left{
    	/*text-align: left;*/
    	width: 14%;
    }
}
@media (max-width: 370px) {
	.contact-contacts table.contacts-table td.contacts-left{
    	/*text-align: left;*/
    	width: 16%;
    }
}
@media (max-width: 334px) {
	.contact-contacts table.contacts-table td.contacts-left{
    	/*text-align: left;*/
    	width: 20%;
    }
}
</style>