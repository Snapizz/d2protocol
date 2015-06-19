var PresetItem = function() {
  this.position = 63;
  this.objGid = 0;
  this.objUid = 0;
};



PresetItem.prototype.serialize = function(output) {
  this.serializeAs_PresetItem(output);
};

PresetItem.prototype.deserialize = function(input) {
  this.deserializeAs_PresetItem(input);
};

PresetItem.prototype.serializeAs_PresetItem = function(output) {
  output.writeByte(this.position);
  if (this.objGid < 0) {
    throw (new Error((("Forbidden value (" + this.objGid) + ") on element objGid.")));
  };
  output.writeVarShort(this.objGid);
  if (this.objUid < 0) {
    throw (new Error((("Forbidden value (" + this.objUid) + ") on element objUid.")));
  };
  output.writeVarInt(this.objUid);
};

PresetItem.prototype.deserializeAs_PresetItem = function(input) {
  this.position = input.readUnsignedByte();
  if ((((this.position < 0)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of PresetItem.position.")));
  };
  this.objGid = input.readVarUhShort();
  if (this.objGid < 0) {
    throw (new Error((("Forbidden value (" + this.objGid) + ") on element of PresetItem.objGid.")));
  };
  this.objUid = input.readVarUhInt();
  if (this.objUid < 0) {
    throw (new Error((("Forbidden value (" + this.objUid) + ") on element of PresetItem.objUid.")));
  };
};

PresetItem.prototype.getTypeId = function() {
  return 354;
};

PresetItem.prototype.getClassName = function() {
  return 'PresetItem';
};

module.exports.id = 354;
module.exports.class = PresetItem;