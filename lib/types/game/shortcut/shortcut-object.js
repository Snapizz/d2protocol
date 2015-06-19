var BaseMessage = require('./shortcut.js').class,
  util = require('util');

var ShortcutObject = function() {

};

util.inherits(ShortcutObject, BaseMessage);

ShortcutObject.prototype.serialize = function(output) {
  this.serializeAs_ShortcutObject(output);
};

ShortcutObject.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutObject(input);
};

ShortcutObject.prototype.serializeAs_ShortcutObject = function(output) {
  this.serializeAs_Shortcut(output);
};

ShortcutObject.prototype.deserializeAs_ShortcutObject = function(input) {
  this.deserialize(input);
};

ShortcutObject.prototype.getTypeId = function() {
  return 367;
};

ShortcutObject.prototype.getClassName = function() {
  return 'ShortcutObject';
};

module.exports.id = 367;
module.exports.class = ShortcutObject;