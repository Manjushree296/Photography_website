const GalleryImage = require('../models/GalleryImage');

exports.getAllImages = async (req, res) => {
  try {
    const { category, featured, tag, page = 1, limit = 12 } = req.query;
    const query = {};

    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';
    if (tag) query.tags = { $in: [tag] };

    const images = await GalleryImage.find(query)
      .sort({ displayOrder: 1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await GalleryImage.countDocuments(query);

    res.status(200).json({
      success: true,
      data: images,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery images',
      error: error.message
    });
  }
};

exports.getImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await GalleryImage.findById(id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: 'Image not found'
      });
    }

    res.status(200).json({
      success: true,
      data: image
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch image',
      error: error.message
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await GalleryImage.distinct('category');
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message
    });
  }
};

exports.getFeaturedImages = async (req, res) => {
  try {
    const images = await GalleryImage.find({ featured: true })
      .sort({ displayOrder: 1 })
      .limit(6);

    res.status(200).json({
      success: true,
      data: images
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured images',
      error: error.message
    });
  }
};