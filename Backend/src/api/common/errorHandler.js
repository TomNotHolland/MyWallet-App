const lodash = require('lodash')

module.exports = (request, response, next) => {
  const bundle = response.locals.bundle

  if(bundle.errors) {
    const errors = parseErrors(bundle.errors)
    response.status(500).json({errors})
  } else {
    next()
  }
}

const parseErrors = (nodeRestfulErrors) => {
  const errors = []
  lodash.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}