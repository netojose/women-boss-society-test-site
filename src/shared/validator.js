import Validator from 'Validator'

export default ({ data = {}, rules = {}, customRules = {} }) => {
    const v = Validator.make(data, rules)
    Object.keys(customRules).forEach(rule => {
        v.extend(rule, customRules[rule].handler, customRules[rule].message)
    })
    v.fails()
    const errors = v.getErrors()
    return Object.keys(errors).reduce(
        (acc, curr) => ({ ...acc, [curr]: errors[curr][0] }),
        {}
    )
}
