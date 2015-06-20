var ShortcutObjectPreset = function() {
  this.presetId = 0;
};



ShortcutObjectPreset.prototype.serialize = function(output) {
  this.serializeAs_ShortcutObjectPreset(output);
};

ShortcutObjectPreset.prototype.deserialize = function(input) {
  this.deserializeAs_ShortcutObjectPreset(input);
};

ShortcutObjectPreset.prototype.serializeAs_ShortcutObjectPreset = function(param1) {
  this.serializeAs_ShortcutObject(param1);
  if (this.presetId < 0) {
    throw new Error("Forbidden value (" + this.presetId + ") on element presetId.");
  } else {
    param1.writeByte(this.presetId);
    return;
  }
};

ShortcutObjectPreset.prototype.deserializeAs_ShortcutObjectPreset = function(param1) {
  this.deserialize(param1);
  this.presetId = param1.readByte();
  if (this.presetId < 0) {
    throw new Error("Forbidden value (" + this.presetId + ") on element of ShortcutObjectPreset.presetId.");
  } else {
    return;
  }
};

ShortcutObjectPreset.prototype.getTypeId = function() {
  return 370;
};

ShortcutObjectPreset.prototype.getClassName = function() {
  return 'ShortcutObjectPreset';
};

module.exports.id = 370;
module.exports.class = ShortcutObjectPreset;
module.exports.getInstance = function() {
  return new ShortcutObjectPreset();
};