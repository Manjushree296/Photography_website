const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  thumbnailUrl: {
    type: String
  },
  category: {
    type: String,
    enum: ['wedding', 'engagement', 'pre-wedding', 'maternity', 'family', 'cultural', 'haldi', 'events', 'portrait', 'landscape'],
    required: [true, 'Category is required']
  },
  tags: [{
    type: String,
    trim: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  displayOrder: {
    type: Number,
    default: 0
  },
  metadata: {
    camera: String,
    lens: String,
    location: String,
    date: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Indexes for better query performance
galleryImageSchema.index({ category: 1, featured: 1 });
galleryImageSchema.index({ tags: 1 });
galleryImageSchema.index({ createdAt: -1 });

module.exports = mongoose.model('GalleryImage', galleryImageSchema);