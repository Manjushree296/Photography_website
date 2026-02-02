const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ active: true })
      .sort({ displayOrder: 1 })
      .select('-images');

    res.status(200).json({
      success: true,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: error.message
    });
  }
};

exports.getServiceBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const service = await Service.findOne({ slug, active: true });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service',
      error: error.message
    });
  }
};

exports.getServiceImages = async (req, res) => {
  try {
    const { slug } = req.params;
    const service = await Service.findOne({ slug, active: true })
      .select('images name');

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      data: service.images,
      serviceName: service.name
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service images',
      error: error.message
    });
  }
};