import type { App } from 'vue'
import { vRipple } from './directives/ripple.directive'
import { vSelectAllOnFocus } from './directives/selectAllOnFocus'

export default {
  install(app: App, options = {}) {
    app.directive('ripple', vRipple)
    app.directive('select-all-on-focus', vSelectAllOnFocus)
  }
}
