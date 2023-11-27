const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'schoolAdmin', 'departmentAdmin', 'internshipSupervisor'],
    required: true,
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: function () {
      return this.role === 'schoolAdmin' || this.role === 'departmentAdmin';
    },
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: function () {
      return this.role === 'departmentAdmin';
    },
  },
});

const AdminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;
