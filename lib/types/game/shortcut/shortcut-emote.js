var BaseMessage = require('./shortcut-emote.js').class,
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

ShortcutEmote.prototype.serializeAs_ShortcutEmote = function(param1) {
  this.serializeAs_Shortcut(param1);
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
  } else {
    param1.writeByte(this.emoteId);
    return;
  }
};

ShortcutEmote.prototype.deserializeAs_ShortcutEmote = function(param1) {
  this.deserialize(param1);
  this.emoteId = param1.readUnsignedByte();
  if (this.emoteId < 0 || this.emoteId > 255) {
    throw new Error("Forbidden value (" + this.emoteId + ") on element of ShortcutEmote.emoteId.");
  } else {
    return;
  }
};

ShortcutEmote.prototype.getTypeId = function() {
  return 389;
};

ShortcutEmote.prototype.getClassName = function() {
  return 'ShortcutEmote';
};

module.exports.id = 389;
module.exports.class = ShortcutEmote;
module.exports.getInstance = function() {
  return new ShortcutEmote();
};