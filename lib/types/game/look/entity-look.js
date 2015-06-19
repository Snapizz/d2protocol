var EntityLook = function() {
  this.bonesId = 0;
  this.skins = [];
  this.indexedColors = [];
  this.scales = [];
  this.subentities = [];
};



EntityLook.prototype.serialize = function(output) {
  this.serializeAs_EntityLook(output);
};

EntityLook.prototype.deserialize = function(input) {
  this.deserializeAs_EntityLook(input);
};

EntityLook.prototype.serializeAs_EntityLook = function(output) {
  if (this.bonesId < 0) {
    throw (new Error((("Forbidden value (" + this.bonesId) + ") on element bonesId.")));
  };
  output.writeVarShort(this.bonesId);
  output.writeShort(this.skins.length);
  var _i2;
  while (_i2 < this.skins.length) {
    if (this.skins[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.skins[_i2]) + ") on element 2 (starting at 1) of skins.")));
    };
    output.writeVarShort(this.skins[_i2]);
    _i2++;
  };
  output.writeShort(this.indexedColors.length);
  var _i3;
  while (_i3 < this.indexedColors.length) {
    output.writeInt(this.indexedColors[_i3]);
    _i3++;
  };
  output.writeShort(this.scales.length);
  var _i4;
  while (_i4 < this.scales.length) {
    output.writeVarShort(this.scales[_i4]);
    _i4++;
  };
  output.writeShort(this.subentities.length);
  var _i5;
  while (_i5 < this.subentities.length) {
    (this.subentities[_i5]).serializeAs_SubEntity(output);
    _i5++;
  };
};

EntityLook.prototype.deserializeAs_EntityLook = function(input) {
  var _val2;
  var _val3;
  var _val4;
  var _item5;
  this.bonesId = input.readVarUhShort();
  if (this.bonesId < 0) {
    throw (new Error((("Forbidden value (" + this.bonesId) + ") on element of EntityLook.bonesId.")));
  };
  var _skinsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _skinsLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of skins.")));
    };
    this.skins.push(_val2);
    _i2++;
  };
  var _indexedColorsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _indexedColorsLen) {
    _val3 = input.readInt();
    this.indexedColors.push(_val3);
    _i3++;
  };
  var _scalesLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _scalesLen) {
    _val4 = input.readVarShort();
    this.scales.push(_val4);
    _i4++;
  };
  var _subentitiesLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _subentitiesLen) {
    _item5 = new SubEntity();
    _item5.deserialize(input);
    this.subentities.push(_item5);
    _i5++;
  };
};

EntityLook.prototype.getTypeId = function() {
  return 55;
};

EntityLook.prototype.getClassName = function() {
  return 'EntityLook';
};

module.exports.id = 55;
module.exports.class = EntityLook;