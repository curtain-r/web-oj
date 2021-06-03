const config = {
  DATABASE: {
    database: 'shuck_web',
    user: 'root',
    password: '123456',
    options: {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
    define: {
      timestamps: false,
      freezeTableName: true
    },
    timezone: '+08:00'
  }
}

module.exports = config;