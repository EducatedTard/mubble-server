var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String
});
console.log("ok");
mongoose.model('User', UserSchema);
