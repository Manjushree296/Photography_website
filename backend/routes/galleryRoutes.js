const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.get('/', galleryController.getAllImages);
router.get('/categories', galleryController.getCategories);
router.get('/featured', galleryController.getFeaturedImages);
router.get('/:id', galleryController.getImageById);

module.exports = router;