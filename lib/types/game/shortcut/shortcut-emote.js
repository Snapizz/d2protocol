var BaseMessage = require('./shortcut.js').class,
  util = require('util');

var ShortcutEmote = function() {
  this.emoteId = 0;
};

util.inherits(ShortcutEmote, BaseMessage);

ShortcutEmote.prototype.serialize = function(output) {
  this.serializeAs_ShortcutEmote(output);
};

ShortcutEmote.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutEmote(input);
};

ShortcutEmote.prototype.serializeAs_ShortcutEmote = function(output) {
  this.serializeAs_Shortcut(output);
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element emoteId.")));
  };
  output.writeByte(this.emoteId);
};

ShortcutEmote.prototype.deserializeAs_ShortcutEmote = function(input) {
  this.deserialize(input);
  this.emoteId = input.readUnsignedByte();
  if ((((this.emoteId < 0)) || ((this.emoteId > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.emoteId) + ") on element of ShortcutEmote.emoteId.")));
  };
};

ShortcutEmote.prototype.getTypeId = function() {
  return 389;
};

ShortcutEmote.prototype.getClassName = function() {
  return 'ShortcutEmote';
};

module.exports.id = 389;
module.exports.class = ShortcutEmote;