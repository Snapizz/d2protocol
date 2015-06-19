var Preset = function() {
  this.presetId = 0;
  this.symbolId = 0;
  this.mount = false;
  this.objects = [];
};



Preset.prototype.serialize = function(output) {
  this.serializeAs_Preset(output);
};

Preset.prototype.deserialize = function(input) {
  this.deserializeAs_Preset(input);
};

Preset.prototype.serializeAs_Preset = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  if (this.symbolId < 0) {
    throw (new Error((("Forbidden value (" + this.symbolId) + ") on element symbolId.")));
  };
  output.writeByte(this.symbolId);
  output.writeBoolean(this.mount);
  output.writeShort(this.objects.length);
  var _i4;
  while (_i4 < this.objects.length) {
    (this.objects[_i4]).serializeAs_PresetItem(output);
    _i4++;
  };
};

Preset.prototype.deserializeAs_Preset = function(input) {
  var _item4;
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of Preset.presetId.")));
  };
  this.symbolId = input.readByte();
  if (this.symbolId < 0) {
    throw (new Error((("Forbidden value (" + this.symbolId) + ") on element of Preset.symbolId.")));
  };
  this.mount = input.readBoolean();
  var _objectsLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _objectsLen) {
    _item4 = new PresetItem();
    _item4.deserialize(input);
    this.objects.push(_item4);
    _i4++;
  };
};

Preset.prototype.getTypeId = function() {
  return 355;
};

Preset.prototype.getClassName = function() {
  return 'Preset';
};

module.exports.id = 355;
module.exports.class = Preset;