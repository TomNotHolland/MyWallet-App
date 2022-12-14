const express = require('express')
module.exports = function (server) {
  //? π¬π§/πΊπΈ Base-URL for all routes
  //? π§π·/π΅πΉ URL base para todos as rotas
  const router = express.Router()
  server.use('/api', router)

  //? π¬π§/πΊπΈ Billing Cycle routes
  //? π§π·/π΅πΉ Rotas de Ciclo de Pagamento
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingcycle')
}