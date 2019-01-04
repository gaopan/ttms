<template>
  <main class="content-main njkc-articulation" role="main">
  	<table v-show="currentLang == 'zh_hk'">
  		<tr>
  			<td colspan="5" class="articulation-final">碩士學位</td>
  		</tr>
  		<tr class="bordernone">
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  		</tr>
  		<tr>
  			<td class="fontsize10">3-4年</td>
  			<td class="fontsize10">3-4年</td>
  			<td class="fontsize10">3-4年</td>
  			<td class="borderleft2 fontsize10">3年</td>
  			<td class="fontsize10">2年</td>
  		</tr>
  		<tr>
  			<td>香港大學</td>
  			<td>英國或海外大學</td>
  			<td>中國或亞洲大學</td>
  			<td class="borderleft2">英國大學</td>
  			<td>銜接第三四年香港學位課程</td>
  		</tr>
  		<tr class="bordernone">
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  		</tr>
  		<tr>
  			<td colspan="3" class="fontsize10">2年</td>
  			<td class="borderleft2 fontsize10">1年</td>
  			<td class="fontsize10">2年</td>
  		</tr>
  		<tr>
  			<td colspan="3">十二年級 ~ 十三年級（選修文科/理科課程）</td>
  			<td class="borderleft2">英國基礎文憑課程</td>
  			<td>銜接第三四年香港學位課程</td>
  		</tr>
  		<tr class="bordernone">
  			<td colspan="3"><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td><i class="glyphicon glyphicon-arrow-up"></i></td>
  		</tr>
  		<tr>
  			<td colspan="3">英國高考成績：三科及格達B級或以上，和英文科達C級或上校内成績：二至四科及格</td>
  			<td colspan="2" class="borderleft2">英國會考成績：中文A級，英文C級或以上及三科達D級或以上**+1科達英國高考達（E級）：中大，理大，城大</td>
  		</tr>
  		<tr class="bordernone">
  			<td colspan="3" class="tal"><span>路徑一</span><i class="glyphicon glyphicon-arrow-up"></i></td>
  			<td colspan="2" class="tar"><i class="glyphicon glyphicon-arrow-up"></i><span>路徑二</span></td>
  		</tr>
  		<tr>
  			<td colspan="5">十年級至十一年級（選修文科/理科課程）</td>
  		</tr>
  		<tr class="bordernone">
  			<td colspan="5"><i class="glyphicon glyphicon-arrow-up"></i></td>
  		</tr>
  		<tr>
  			<td colspan="5">八年级至九年级（預前英國會考課程）</td>
  		</tr>
  	</table>
    <table v-show="currentLang == 'en'">
      <tr>
        <td colspan="5" class="articulation-final">Master Degree</td>
      </tr>
      <tr class="bordernone">
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
      </tr>
      <tr>
        <td class="fontsize10">3-4Y</td>
        <td class="fontsize10">3-4Y</td>
        <td class="fontsize10">3-4Y</td>
        <td class="borderleft2 fontsize10">3Y</td>
        <td class="fontsize10">2Y</td>
      </tr>
      <tr>
        <td class="transform_td"><div class="transform90">HK University</div></td>
        <td class="transform_td"><div class="transform90">UK or Oversea University</div></td>
        <td class="transform_td"><div class="transform90">China or Asian University</div></td>
        <td class="borderleft2 transform_td"><div class="transform90">UK University</div></td>
        <td class="transform_td"><div class="transform90">HK Top-up degree</div></td><!-- 
        <td class="transform90 minwidth1">HK University</td>
        <td class="transform90 minwidth2">UK or Overss University</td>
        <td class="transform90 minwidth3">China or Asivn University</td>
        <td class="borderleft2 transform90 minwidth4">UK University</td>
        <td class="transform90 minwidth5">HK Top-up degree</td> -->
      </tr>
      <tr class="bordernone">
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
      </tr>
      <tr>
        <td colspan="3" class="fontsize10">2Y</td>
        <td class="borderleft2 fontsize10">1Y</td>
        <td class="fontsize10">2Y</td>
      </tr>
      <tr>
        <td colspan="3">Y12 ~ Y13 (Streaming Arts / Science curriculum)</td>
        <td class="borderleft2">UK Foundation Diploma</td>
        <td>HK Top-up degree</td>
      </tr>
      <tr class="bordernone">
        <td colspan="3"><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td><i class="glyphicon glyphicon-arrow-up"></i></td>
      </tr>
      <tr>
        <td colspan="3">AL score : Passed 3 subjects] with B grade or above, and English Subject with C or above Some School score : Passed 2-4 subjects</td>
        <td colspan="2" class="borderleft2">IGCSE score : Chinese at grade A, English at grade C or above and 3 subjects at grade D or above ** +1 AL (E grade): CU, PolyU, CityU</td>
      </tr>
      <tr class="bordernone">
        <td colspan="3" class="tal"><span>Pathway 1</span><i class="glyphicon glyphicon-arrow-up"></i></td>
        <td colspan="2" class="tar"><i class="glyphicon glyphicon-arrow-up"></i><span>Pathway 2</span></td>
      </tr>
      <tr>
        <td colspan="5">Yr10 ~ Yr11 (Streaming Arts / Science curriculum)</td>
      </tr>
      <tr class="bordernone">
        <td colspan="5"><i class="glyphicon glyphicon-arrow-up"></i></td>
      </tr>
      <tr>
        <td colspan="5">Yr8 ~ Yr9 (Preparatory IGCSE curriculum)</td>
      </tr>
    </table>
  </main>
</template>
<script src="./articulation.js"></script>
<style src='./articulation.css'></style>