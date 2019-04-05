const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?${process.env.DB_REPLICA_SET}`);

module.exports = {
  mongoose
};
