var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryPresetUseResultMessage = function() {
  this.presetId = 0;
  this.code = 3;
  this.unlinkedPosition = [];
};

util.inherits(InventoryPresetUseResultMessage, BaseMessage);

InventoryPresetUseResultMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryPresetUseResultMessage(output);
};

InventoryPresetUseResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryPresetUseResultMessage(input);
};

InventoryPresetUseResultMessage.prototype.serializeAs_InventoryPresetUseResultMessage = function(output) {
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element presetId.")));
  };
  output.writeByte(this.presetId);
  output.writeByte(this.code);
  output.writeShort(this.unlinkedPosition.length);
  var _i3 = 0;
  while (_i3 < this.unlinkedPosition.length) {
    output.writeByte(this.unlinkedPosition[_i3]);
    _i3++;
  };
};

InventoryPresetUseResultMessage.prototype.deserializeAs_InventoryPresetUseResultMessage = function(input) {
  var _val3 = 0;
  this.presetId = input.readByte();
  if (this.presetId < 0) {
    throw (new Error((("Forbidden value (" + this.presetId) + ") on element of InventoryPresetUseResultMessage.presetId.")));
  };
  this.code = input.readByte();
  if (this.code < 0) {
    throw (new Error((("Forbidden value (" + this.code) + ") on element of InventoryPresetUseResultMessage.code.")));
  };
  var _unlinkedPositionLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _unlinkedPositionLen) {
    _val3 = input.readUnsignedByte();
    if ((((_val3 < 0)) || ((_val3 > 0xFF)))) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of unlinkedPosition.")));
    };
    this.unlinkedPosition.push(_val3);
    _i3++;
  };
};

InventoryPresetUseResultMessage.prototype.getMessageId = function() {
  return 6163;
};

InventoryPresetUseResultMessage.prototype.getClassName = function() {
  return 'InventoryPresetUseResultMessage';
};

module.exports.id = 6163;
module.exports.class = InventoryPresetUseResultMessage;