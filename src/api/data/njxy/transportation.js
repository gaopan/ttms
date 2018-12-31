let zh_hk = `    <div class="row">
      <div class="col-md-6">
        <p><span class="glyphicon glyphicon-stop"></span>學校對面有停車場。</p>
        <p><span class="glyphicon glyphicon-stop"></span>步行三分鐘到達蘇屋巴士總站。</p>
        <p><span class="glyphicon glyphicon-stop"></span>七分鐘到達長沙灣港鐵站。</p>
        <img :src="imgUrl('MTR-station.png')" alt="">
      </div>
    </div>`;

let en = `<li class="transportation-title">There is a parking lot opposite the school.</li>
  		<li class="transportation-title">Three minutes' walk to the So Uk Bus Terminal.</li>
  		<li class="transportation-title">7 minutes' walk to Cheung Sha Wan MTR station.</li>
  		<li class="transportation-img">
  			<img :src="imgs" alt="">
  		</li>`;

export default {zh_hk, en}