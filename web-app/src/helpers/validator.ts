export class Validator {
  errors = {}
  rules = {}

  hasErrors() {
    return Object.keys(this.errors).length > 0
  }

  setError(field, message) {
    this.errors[field] = this.errors[field] || []
    this.errors[field].push(message)
  }

  reset() {
    this.errors = {}
  }

  addRule(field, message, validationFn) {
    this.rules[field] = this.rules[field] || []
    this.rules[field].push({
      field, message, validationFn
    })
  }

  validateField(fieldName) {
    this.errors[fieldName] = []
    let rules = this.rules[fieldName]
    for (const rule of rules) {
      if (!rule.validationFn()) {
        this.setError(fieldName, rule.message)
      }
    }
  }

  validate() {
    for (const field in this.rules) {
      this.validateField(field)
    }
  }
}
