import { reactive, watch } from 'vue'
import { Validator } from '../helpers/validator'

export function useValidator(form, fn) {
  const v = reactive(new Validator())
  fn(v)

  for (const field in v.rules) {
    watch(() => form[field], () => {
      v.validateField(field)
    })
  }

  return v
}
