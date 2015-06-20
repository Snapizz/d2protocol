var BaseMessage = require('./shortcut.js').class,
  util = require('util');

var Shortcut = function() {
  this.slot = 0;
};

util.inherits(Shortcut, BaseMessage);

Shortcut.prototype.serialize = function(output) {
  this.serializeAs_Shortcut(output);
};

Shortcut.prototype.deserialize = function(input) {
  this.deserializeAs_Shortcut(input);
};

Shortcut.prototype.serializeAs_Shortcut = function(param1) {
  if (this.slot < 0 || this.slot > 99) {
    throw new Error("Forbidden value (" + this.slot + ") on element slot.");
  } else {
    param1.writeByte(this.slot);
    return;
  }
};

Shortcut.prototype.deserializeAs_Shortcut = function(param1) {
  this.slot = param1.readByte();
  if (this.slot < 0 || this.slot > 99) {
    throw new Error("Forbidden value (" + this.slot + ") on element of Shortcut.slot.");
  } else {
    return;
  }
};

Shortcut.prototype.getTypeId = function() {
  return 369;
};

Shortcut.prototype.getClassName = function() {
  return 'Shortcut';
};

module.exports.id = 369;
module.exports.class = Shortcut;
module.exports.getInstance = function() {
  return new Shortcut();
};