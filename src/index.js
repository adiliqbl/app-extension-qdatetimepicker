/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendDatetimePicker = function (conf, ctx) {
  conf.boot = conf.boot || []
  conf.css = conf.css || []

  const bootFile = '~q-datetimepicker-boot'
  const cssFile = '~q-datetimepicker-styl'
  
  if (!conf.boot.includes(bootFile)) {
    conf.boot.push(bootFile)
    // conf.build.transpileDependencies.push(/quasar-app-extension-qdatetimepicker/)
  }
  
  if (!conf.css.includes(cssFile)) {
    conf.css.push(cssFile)
  }
}

module.exports = function (api, conf) {
  api.registerDescribeApi('QDatetimePicker', '../component/QDatetimePicker.json')
  api.extendQuasarConf(extendDatetimePicker)
  api.extendWebpack((cfg, { isClient, isServer }) => {
    cfg.resolve.alias['q-datetimepicker-comp$'] = 'quasar-app-extension-qdatetimepicker/component/QDatetimePicker.js'
    cfg.resolve.alias['q-datetimepicker-boot$'] = 'quasar-app-extension-qdatetimepicker/boot/qdatetimepicker.js'
    cfg.resolve.alias['q-datetimepicker-styl$'] = 'quasar-app-extension-qdatetimepicker/component/datetime-picker.styl'
    cfg.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
  })
}
