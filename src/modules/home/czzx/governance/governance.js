import CommonUtils from '@/utils/common-utils.js'
import shared from '@/shared.js'

let images = require.context('@/assets/imgs/', false, /\.(png|jpg|gif)$/)
let eventHub = shared.eventHub

export default {
  name: 'governance',
  data(){
    return {
      currentLang: shared.defaultLang
    };
  },
  created() {
    eventHub.$on("changed-lang", this.changedLang);
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    navTo(path){
      this.$router.push(path);
    },
    changedLang(lang){
      this.currentLang = lang;
    }
  },
  beforeDestroy(){
    eventHub.$off("changed-lang", this.changedLang);
  }
}

    /*<div class="teacher-introduce">
      <div class="teacher-introduce-left">
        
        <div class="teacher-photo-wrapper">       
          <div class="stripe-background"></div>       
          <div class="teacher-photo">
            <img :src="imgUrl('zzl.png')">
          </div>
        </div>
        
        <div class = "teacher-name-wrapper">
          <span class="teacher-title">课程总监</span>
          <span class="teacher-title">張紫伶博士</span>
          <!-- <span>Programme Director</span> -->
        </div>
      </div>
      <div class = "teacher-info">
        <p class="name">張紫伶博士 /Dr.Sammi Yu</p>
        <p class = "motto">“自信，專注，獨立，熱誠"</p>

        <p class="sentence">-我們相倌學生們應該在不同議題上秉持獨立的見解，不論是涉及全球或民族層面的议題，亦或是涉及當地或個人層面的事項。為了幫助學生擁有兼容東西方文化的價值觀，我們專注於培養他們的自信心、專注力、獨立性和熱誠。</p>
      </div>
    </div>

    <div class="teacher-experience">
      <ul class="experience-list info-list">
        <li>
          <ul class="experience-sub-list">
            <li>
              <span class="square"></span>學士 加牟大哥倫比亞大學 
            </li>
            <li class="sub-list-item">BA- 主修音樂，副修中文</li>
          </ul>
        </li>

        <li>
          <ul class="experience-sub-list">
            <li>
              <span class="square"></span>碩士 香港中文大學 
            </li>
            <li class="sub-list-item">MA -文化管理</li>
          </ul>
        </li>
        <li>
          <ul class="experience-sub-list">
            <li>
              <span class="square"></span>博士 -中國藝術研究院 
            </li>
            <li class="sub-list-item">PhD - 戲曲理論</li> 
          </ul>
        </li>

        <li><span class="square"></span>創始人港澳非物質文化遺産發展研究會(2016)</li>
        <li><span class="square"></span>客席教授，中國戯曲學校（2015)</li>
        <li><span class="square"></span>技術僱問，僱貝再培訓局(2008-2012) </li>
        <li><span class="square"></span>講師（學科）香港演藝學院(2012-2018)</li>
        <li><span class="square"></span>課程經理 香港公閬大學(2008-2012)</li>


        <!-- <li>Universrty of British Columbia</li> 
        <li>Major in Music, Minor in Chinese
        <li>Chinese University Hong Kong</li>
        <li>Cultural Management</li>
        <li>National Academy of Arts</li> 
        <li>Research in Chinese Opera</li> 
        <li>Founder, Hong Kong and Macau InUmgible Cultural Heritage Research Centre (2016)</li> 
        <li>Visiting Professor, National Academy of Chinese Theatre Arts (2015)</li> 
        <li>Technical Consultant, Employees Retraining Board (2013)</li> 
        <li>Lecturer (Academic), Hong Kong Academy of the Performing Arts (2012-2018)</li> 
        <li>Programme Manager, The Open University of Hong Kong (2008-2012)</li>  -->
        
      </ul>
      <div class="experience-photo">
        <img :src="imgUrl('clock.png')">
      </div>
    </div>*/
