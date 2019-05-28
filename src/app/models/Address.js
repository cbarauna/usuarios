const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: false
  },
  rua: {
    type: String,
    required: true
  },
  complemento: {
    type: String,
    required: false
  },
  telefone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Address', AddressSchema)
