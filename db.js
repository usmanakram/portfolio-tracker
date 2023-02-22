const mongoose = require('mongoose');

module.exports = function() {
  mongoose.set({ strict: true, strictQuery: false });
  mongoose
    .connect(process.env.DATABASE, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      // autoIndex: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.log('Could not connect to MongoDB...', error));
}