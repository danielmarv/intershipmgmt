const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser'); // Adjust the path based on your project structure

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

// Function to compare the provided password with the hashed password
const comparePasswords = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

// Function to generate a JWT token
const generateToken = (userId, role) => {
  const secretKey = 'your-secret-key'; // Replace with your actual secret key
  return jwt.sign({ userId, role }, secretKey, { expiresIn: '1h' }); // Adjust the expiration time as needed
};

// Authentication handler
const authenticateAdminUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the admin user by username
    const adminUser = await AdminUser.findOne({ username });

    if (!adminUser) {
      return res.status(401).json({ error: 'Authentication failed. User not found.' });
    }

    // Compare passwords
    const passwordMatch = await comparePasswords(password, adminUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed. Incorrect password.' });
    }

    // Generate a JWT token
    const token = generateToken(adminUser._id, adminUser.role);

    // Attach the token to the response or use it as needed
    res.locals.token = token;

    // You may also attach other user information to res.locals for further use

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update admin user handler
const updateAdminUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;

    // Hash the new password if provided
    const hashedPassword = password ? await hashPassword(password) : undefined;

    // Update the admin user
    const updatedAdminUser = await AdminUser.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true }
    );

    res.status(200).json(updatedAdminUser);
  } catch (error) {
    console.error('Update admin user error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const AdminUser = require('../models/AdminUser');

// Get user handler
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Get the admin user
    const adminUser = await AdminUser.findById(userId);

    if (!adminUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(adminUser);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Register admin user handler
const registerAdminUser = async (req, res) => {
  try {
    const { username, password, role, schoolId, departmentId } = req.body;

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create the admin user
    const newAdminUser = new AdminUser({
      username,
      password: hashedPassword,
      role,
      schoolId,
      departmentId,
    });

    // Save the admin user to the database
    const savedAdminUser = await newAdminUser.save();

    res.status(201).json(savedAdminUser);
  } catch (error) {
    console.error('Register admin user error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = registerAdminUser;
module.exports = getUser;
module.exports = updateAdminUser;
module.exports = authenticateAdminUser;
