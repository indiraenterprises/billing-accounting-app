const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  invoiceNumber: {
    type: String,
    unique: true,
    required: true,
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: Date,
  items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      description: String,
      quantity: Number,
      price: Number,
      gstRate: Number,
      gstAmount: Number,
      total: Number,
    },
  ],
  subTotal: Number,
  cgst: Number,
  sgst: Number,
  igst: Number,
  totalTax: Number,
  totalAmount: Number,
  status: {
    type: String,
    enum: ['draft', 'sent', 'paid', 'overdue'],
    default: 'draft',
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Invoice', invoiceSchema);