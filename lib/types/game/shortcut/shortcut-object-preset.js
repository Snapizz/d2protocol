var BaseMessage = require('./shortcut-object.js').class,
  util = require('util');

var ShortcutObjectPreset = function() {
  this.presetId = 0;
};

util.inherits(ShortcutObjectPreset, BaseMessage);

ShortcutObjectPreset.prototype.serialize = function(output) {
  this.serializeAs_ShortcutObjectPreset(output);
};

ShortcutObjectPreset.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutObjectPreset(input);
};

ShortcutObjectPreset.prototype.serializeAs_ShortcutObjectPreset = function(output) {
  this.serializeAs_ShortcutObject(output);
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
};

ShortcutObjectPreset.prototype.deserializeAs_ShortcutObjectPreset = function(input) {
  this.deserialize(input);
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of ShortcutObjectPreset.presetId.")));
  };
};

ShortcutObjectPreset.prototype.getTypeId = function() {
  return 370;
};

ShortcutObjectPreset.prototype.getClassName = function() {
  return 'ShortcutObjectPreset';
};

module.exports.id = 370;
module.exports.class = ShortcutObjectPreset;