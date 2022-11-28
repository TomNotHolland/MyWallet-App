const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

//? 🇬🇧/🇺🇸 Web Services creation
//? 🇧🇷/🇵🇹 Criação dos Serviços Web
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', errorHandler).after('put', errorHandler)

//? 🇬🇧/🇺🇸 New route creation
//? 🇧🇷/🇵🇹 Criação de nova rota
BillingCycle.route('get', (req, res, next) => {
  BillingCycle.find({}, (error, docs) => {
    if (!error) {
      res.json(docs)
    } else {
      res.status(500).json({ errors: [error] })
    }
  })
})

//? 🇬🇧/🇺🇸 Displaying errors and data counting as JSON
//? 🇧🇷/🇵🇹 Mostrando erros e contagem de dados como JSON
BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate([{
    $project: {
      credit: {
        $sum: "$credits.value"
      },
      debt: {
        $sum: "$debts.value"
      }
    }
  }, {
    $group: {
      _id: null,
      credit: { $sum: "$credit" },
      debt: { $sum: "$debt" }
    }
  }, {
    $project: {
      _id: 0,
      credit: 1,
      debt: 1
    }
  }
  ], (error, result) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json(result[0] || { credit: 0, debt: 0 })
    }
  }
  )
})

module.exports = BillingCycle