var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetSaveCustomMessage = function() {
  this.presetId = 0;
  this.symbolId = 0;
  this.itemsPositions = [];
  this.itemsUids = [];
};

util.inherits(InventoryPresetSaveCustomMessage, BaseMessage);

InventoryPresetSaveCustomMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetSaveCustomMessage(output);
};

InventoryPresetSaveCustomMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetSaveCustomMessage(input);
};

InventoryPresetSaveCustomMessage.prototype.serializeAs_InventoryPresetSaveCustomMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  if (this.symbolId < 0) {
    throw (new Error((("Forbidden value (" + this.symbolId) + ") on element symbolId.")));
  };
  output.writeByte(this.symbolId);
  output.writeShort(this.itemsPositions.length);
  var _i3;
  while (_i3 < this.itemsPositions.length) {
    output.writeByte(this.itemsPositions[_i3]);
    _i3++;
  };
  output.writeShort(this.itemsUids.length);
  var _i4;
  while (_i4 < this.itemsUids.length) {
    if (this.itemsUids[_i4] < 0) {
      throw (new Error((("Forbidden value (" + this.itemsUids[_i4]) + ") on element 4 (starting at 1) of itemsUids.")));
    };
    output.writeVarInt(this.itemsUids[_i4]);
    _i4++;
  };
};

InventoryPresetSaveCustomMessage.prototype.deserializeAs_InventoryPresetSaveCustomMessage = function(input) {
  var _val3;
  var _val4;
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetSaveCustomMessage.presetId.")));
  };
  this.symbolId = input.readByte();
  if (this.symbolId < 0) {
    throw (new Error((("Forbidden value (" + this.symbolId) + ") on element of InventoryPresetSaveCustomMessage.symbolId.")));
  };
  var _itemsPositionsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _itemsPositionsLen) {
    _val3 = input.readUnsignedByte();
    if ((((_val3 < 0)) || ((_val3 > 0xFF)))) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of itemsPositions.")));
    };
    this.itemsPositions.push(_val3);
    _i3++;
  };
  var _itemsUidsLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _itemsUidsLen) {
    _val4 = input.readVarUhInt();
    if (_val4 < 0) {
      throw (new Error((("Forbidden value (" + _val4) + ") on elements of itemsUids.")));
    };
    this.itemsUids.push(_val4);
    _i4++;
  };
};

InventoryPresetSaveCustomMessage.prototype.getMessageId = function() {
  return 6329;
};

InventoryPresetSaveCustomMessage.prototype.getClassName = function() {
  return 'InventoryPresetSaveCustomMessage';
};

module.exports.id = 6329;
module.exports.class = InventoryPresetSaveCustomMessage;