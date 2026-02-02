const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
    unique: true
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    trim: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  longDescription: {
    type: String,
    trim: true
  },
  coverImage: {
    type: String,
    required: [true, 'Cover image is required']
  },
  images: [{
    type: String
  }],
  features: [{
    type: String,
    trim: true
  }],
  price: {
    startingFrom: Number,
    currency: {
      type: String,
      default: 'INR'
    }
  },
  duration: {
    type: String,
    trim: true
  },
  displayOrder: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  meta: {
    title: String,
    description: String,
    keywords: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

serviceSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

serviceSchema.index({ slug: 1, active: 1 });
serviceSchema.index({ displayOrder: 1 });

module.exports = mongoose.model('Service', serviceSchema);