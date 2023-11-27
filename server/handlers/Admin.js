const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser'); 

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
const generateToken = (userId, role) => {
  const secretKey = 'your-secret-key'; 
  return jwt.sign({ userId, role }, secretKey, { expiresIn: '1h' }); 
};

// Authentication handler
const authenticateAdminUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const adminUser = await AdminUser.findOne({ username });

    if (!adminUser) {
      return res.status(401).json({ error: 'Authentication failed. User not found.' });
    }
    const passwordMatch = await comparePasswords(password, adminUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed. Incorrect password.' });
    }

    const token = generateToken(adminUser._id, adminUser.role);

    res.locals.token = token;
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
    const hashedPassword = password ? await hashPassword(password) : undefined;
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
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

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

    const hashedPassword = await hashPassword(password);
    const newAdminUser = new AdminUser({
      username,
      password: hashedPassword,
      role,
      schoolId,
      departmentId,
    });
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
