// import CommonUtils from '@/utils/common-utils.js'
// import HomeTranslator from '../home.translator.js'
// import CzzxTranslator from '../czzx/czzx.translator.js'
// import NjgxTranslator from '../njgx/njgx.translator.js'
// import KcglTranslator from '../kcgl/kcgl.translator.js'
// import SblcTranslator from '../sblc/sblc.translator.js'

// let translator = {
// 	czzx: CzzxTranslator,
// 	njgx: NjgxTranslator,
// 	kcgl: KcglTranslator,
// 	// sblc: SblcTranslator
// };

// export default {
// 	fetchData(lang){
// 		let navs = CommonUtils.deepClone(HomeTranslator[lang].navs);
// 		navs.forEach(nav => {
// 			let name = nav.path.substring(1);
// 			if(translator[name]) {
// 				nav.children = translator[name][lang].navs;
// 			}
// 		});
// 		return navs;
// 	}
// }

import CzzxData from "@/api/module-data/czzx.js"
import NjgxData from "@/api/module-data/njgx.js"

export default [CzzxData, NjgxData]