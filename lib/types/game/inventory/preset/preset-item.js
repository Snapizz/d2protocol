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
  param1.writeByte(this.position);
  if (this.objGid < 0) {
    throw new Error("Forbidden value (" + this.objGid + ") on element objGid.");
  } else {
    param1.writeVarShort(this.objGid);
    if (this.objUid < 0) {
      throw new Error("Forbidden value (" + this.objUid + ") on element objUid.");
    } else {
      param1.writeVarInt(this.objUid);
      return;
    }
  }
};

PresetItem.prototype.deserializeAs_PresetItem = function(input) {
  this.position = param1.readUnsignedByte();
  if (this.position < 0 || this.position > 255) {
    throw new Error("Forbidden value (" + this.position + ") on element of PresetItem.position.");
  } else {
    this.objGid = param1.readVarUhShort();
    if (this.objGid < 0) {
      throw new Error("Forbidden value (" + this.objGid + ") on element of PresetItem.objGid.");
    } else {
      this.objUid = param1.readVarUhInt();
      if (this.objUid < 0) {
        throw new Error("Forbidden value (" + this.objUid + ") on element of PresetItem.objUid.");
      } else {
        return;
      }
    }
  }
};

PresetItem.prototype.getTypeId = function() {
  return 354;
};

PresetItem.prototype.getClassName = function() {
  return 'PresetItem';
};

module.exports.id = 354;
module.exports.class = PresetItem;