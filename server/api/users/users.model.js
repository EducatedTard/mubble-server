'use strict';

import mongoose from 'mongoose';

var UsersSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Users', UsersSchema);
