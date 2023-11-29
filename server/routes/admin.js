const express = require('express');
const router = express.Router();
const adminHandlers = require('../handlers/adminHandlers');

// Authentication middleware for admin users
router.post('/admin-login', adminHandlers.authenticateAdminUser, (req, res) => {
  // If authentication is successful, this route will be reached
  res.status(200).json({ token: res.locals.token });
});

// Update admin user route
router.put('/admin/:userId', adminHandlers.updateAdminUser);

// Get admin user route
router.get('/admin/:userId', adminHandlers.getAdminUser);

// Register admin user route
router.post('/admin-register', adminHandlers.registerAdminUser);

module.exports = router;
