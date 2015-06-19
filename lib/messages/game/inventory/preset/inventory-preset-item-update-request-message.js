var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetItemUpdateRequestMessage = function() {
  this.presetId = 0;
  this.position = 63;
  this.objUid = 0;
};

util.inherits(InventoryPresetItemUpdateRequestMessage, BaseMessage);

InventoryPresetItemUpdateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetItemUpdateRequestMessage(output);
};

InventoryPresetItemUpdateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetItemUpdateRequestMessage(input);
};

InventoryPresetItemUpdateRequestMessage.prototype.serializeAs_InventoryPresetItemUpdateRequestMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  output.writeByte(this.position);
  if (this.objUid < 0) {
    throw (new Error((("Forbidden value (" + this.objUid) + ") on element objUid.")));
  };
  output.writeVarInt(this.objUid);
};

InventoryPresetItemUpdateRequestMessage.prototype.deserializeAs_InventoryPresetItemUpdateRequestMessage = function(input) {
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetItemUpdateRequestMessage.presetId.")));
  };
  this.position = input.readUnsignedByte();
  if ((((this.position < 0)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of InventoryPresetItemUpdateRequestMessage.position.")));
  };
  this.objUid = input.readVarUhInt();
  if (this.objUid < 0) {
    throw (new Error((("Forbidden value (" + this.objUid) + ") on element of InventoryPresetItemUpdateRequestMessage.objUid.")));
  };
};

InventoryPresetItemUpdateRequestMessage.prototype.getMessageId = function() {
  return 6210;
};

InventoryPresetItemUpdateRequestMessage.prototype.getClassName = function() {
  return 'InventoryPresetItemUpdateRequestMessage';
};

module.exports.id = 6210;
module.exports.class = InventoryPresetItemUpdateRequestMessage;