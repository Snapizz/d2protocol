var BaseMessage = require('./shortcut-object.js').class,
  util = require('util');

var ShortcutObjectItem = function() {
  this.itemUID = 0;
  this.itemGID = 0;
};

util.inherits(ShortcutObjectItem, BaseMessage);

ShortcutObjectItem.prototype.serialize = function(output) {
  this.serializeAs_ShortcutObjectItem(output);
};

ShortcutObjectItem.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutObjectItem(input);
};

ShortcutObjectItem.prototype.serializeAs_ShortcutObjectItem = function(output) {
  this.serializeAs_ShortcutObject(output);
  output.writeInt(this.itemUID);
  output.writeInt(this.itemGID);
};

ShortcutObjectItem.prototype.deserializeAs_ShortcutObjectItem = function(input) {
  this.deserialize(input);
  this.itemUID = input.readInt();
  this.itemGID = input.readInt();
};

ShortcutObjectItem.prototype.getTypeId = function() {
  return 371;
};

ShortcutObjectItem.prototype.getClassName = function() {
  return 'ShortcutObjectItem';
};

module.exports.id = 371;
module.exports.class = ShortcutObjectItem;