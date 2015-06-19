var BaseMessage = require('./shortcut.js').class,
  util = require('util');

var ShortcutSmiley = function() {
  this.smileyId = 0;
};

util.inherits(ShortcutSmiley, BaseMessage);

ShortcutSmiley.prototype.serialize = function(output) {
  this.serializeAs_ShortcutSmiley(output);
};

ShortcutSmiley.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutSmiley(input);
};

ShortcutSmiley.prototype.serializeAs_ShortcutSmiley = function(output) {
  this.serializeAs_Shortcut(output);
  if (this.smileyId < 0) {
    throw (new Error((("Forbidden value (" + this.smileyId) + ") on element smileyId.")));
  };
  output.writeByte(this.smileyId);
};

ShortcutSmiley.prototype.deserializeAs_ShortcutSmiley = function(input) {
  this.deserialize(input);
  this.smileyId = input.readByte();
  if (this.smileyId < 0) {
    throw (new Error((("Forbidden value (" + this.smileyId) + ") on element of ShortcutSmiley.smileyId.")));
  };
};

ShortcutSmiley.prototype.getTypeId = function() {
  return 388;
};

ShortcutSmiley.prototype.getClassName = function() {
  return 'ShortcutSmiley';
};

module.exports.id = 388;
module.exports.class = ShortcutSmiley;