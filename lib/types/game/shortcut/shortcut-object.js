var BaseMessage = require('./shortcut-object.js').class,
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

ShortcutObject.prototype.serializeAs_ShortcutObject = function(param1) {
  this.serializeAs_Shortcut(param1);
};

ShortcutObject.prototype.deserializeAs_ShortcutObject = function(param1) {
  this.deserialize(param1);
};

ShortcutObject.prototype.getTypeId = function() {
  return 367;
};

ShortcutObject.prototype.getClassName = function() {
  return 'ShortcutObject';
};

module.exports.id = 367;
module.exports.class = ShortcutObject;
module.exports.getInstance = function() {
  return new ShortcutObject();
};