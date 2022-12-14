const restful = require('node-restful')
const mongoose = restful.mongoose

//? 🇬🇧/🇺🇲 Object-Document Mapping
//? 🇧🇷/🇵🇹 Mapeamento do Objeto-Documento

const creditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    min: 0,
    required: true
  }
})

const debtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    min: 0,
    required: true
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ['PAID OUT', 'PENDING', 'SCHEDULED']
  }
})

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  year: {
    type: Number,
    min: 2000,
    max: 2030,
    required: true
  },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)