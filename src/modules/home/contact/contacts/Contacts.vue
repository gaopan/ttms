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
<style src='./contacts.css'></style>