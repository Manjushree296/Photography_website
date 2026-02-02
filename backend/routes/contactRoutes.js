const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Public routes
router.post('/submit', contactController.submitContact);

// Admin routes (protected - add auth middleware in production)
router.get('/all', contactController.getAllContacts);
router.patch('/:id/status', contactController.updateContactStatus);

module.exports = router;