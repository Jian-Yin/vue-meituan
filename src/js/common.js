import Vue from 'vue'

import '../css/common.scss'

import iconSvg from '../components/iconSvg'
import headerCom from '../components/header/header'
import footerCom from '../components/footer/footer'

// 导入icons下svg图标模块
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../icons', false, /\.svg$/)
requireAll(req)

Vue.component('iconSvg', iconSvg)
Vue.component('headerCom', headerCom)
Vue.component('footerCom', footerCom)

export default{
	Vue
}