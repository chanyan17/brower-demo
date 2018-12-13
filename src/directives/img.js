import defaultImg from '@/assets/default_img.png'

export default {
  // 只调用一次，指令第一次绑定到元素时调用,进行一次性初始化配置
  bind: function (el, binding) {
    // var color = Math.floor(Math.random() * 1000000)
    // el.style.backgroundColor = '#' + color
    el.style.width = binding.value.width + 'px'
    el.style.height = binding.value.height + 'px'
    el.setAttribute('src', defaultImg)

    const img = new Image()
    img.src = binding.value.src
    img.onload = function () {
      el.setAttribute('src', binding.value.src)
    }
  },
  // 当被绑定的元素插入到 DOM 中时
  inserted: function (el, binding) {
    console.log(el.value)
  },
  // 所在组件的 VNode 更新时调用
  update: function (el, binding) {
    console.log(el.value)
  },
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated: function (el, binding) {
    console.log(el.value)
  },
  // 只调用一次，指令与元素解绑时调用
  unbind: function (el, binding) {
    console.log(el.value)
  }
}