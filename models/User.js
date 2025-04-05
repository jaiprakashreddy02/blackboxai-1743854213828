import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

// Create table if it doesn't exist
User.sync();

export default User;
