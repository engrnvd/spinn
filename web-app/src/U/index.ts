import type { App } from 'vue'
import { vRipple } from './directives/ripple.directive'

export default {
  install(app: App, options = {}) {
    app.directive('ripple', vRipple)
  }
}
