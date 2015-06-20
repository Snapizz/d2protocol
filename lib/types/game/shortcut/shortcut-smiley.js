var ShortcutSmiley = function() {
  this.smileyId = 0;
};



ShortcutSmiley.prototype.serialize = function(output) {
  this.serializeAs_ShortcutSmiley(output);
};

ShortcutSmiley.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutSmiley(input);
};

ShortcutSmiley.prototype.serializeAs_ShortcutSmiley = function(param1) {
  this.serializeAs_Shortcut(param1);
  if (this.smileyId < 0) {
    throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
  } else {
    param1.writeByte(this.smileyId);
    return;
  }
};

ShortcutSmiley.prototype.deserializeAs_ShortcutSmiley = function(param1) {
  this.deserialize(param1);
  this.smileyId = param1.readByte();
  if (this.smileyId < 0) {
    throw new Error("Forbidden value (" + this.smileyId + ") on element of ShortcutSmiley.smileyId.");
  } else {
    return;
  }
};

ShortcutSmiley.prototype.getTypeId = function() {
  return 388;
};

ShortcutSmiley.prototype.getClassName = function() {
  return 'ShortcutSmiley';
};

module.exports.id = 388;
module.exports.class = ShortcutSmiley;
module.exports.getInstance = function() {
  return new ShortcutSmiley();
};