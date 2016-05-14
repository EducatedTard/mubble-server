/**
 * Users model events
 */

'use strict';

import {EventEmitter} from 'events';
import Users from './users.model';
var UsersEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UsersEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Users.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    UsersEvents.emit(event + ':' + doc._id, doc);
    UsersEvents.emit(event, doc);
  }
}

export default UsersEvents;
