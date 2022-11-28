const express = require('express')
module.exports = function (server) {
  //? 🇬🇧/🇺🇸 Base-URL for all routes
  //? 🇧🇷/🇵🇹 URL base para todos as rotas
  const router = express.Router()
  server.use('/api', router)

  //? 🇬🇧/🇺🇸 Billing Cycle routes
  //? 🇧🇷/🇵🇹 Rotas de Ciclo de Pagamento
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingcycle')
}