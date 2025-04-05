import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('fringe_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('MySQL connection established'))
  .catch(err => console.error('Unable to connect to MySQL:', err));

export default sequelize;