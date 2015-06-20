var d2com = require('d2com'),
  BaseMessage = require('./inventory-content-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryContentAndPresetMessage = function() {
  this.presets = [];
};

util.inherits(InventoryContentAndPresetMessage, BaseMessage);

InventoryContentAndPresetMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryContentAndPresetMessage(output);
};

InventoryContentAndPresetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryContentAndPresetMessage(input);
};

InventoryContentAndPresetMessage.prototype.serializeAs_InventoryContentAndPresetMessage = function(output) {
  this.serializeAs_InventoryContentMessage(output);
  output.writeShort(this.presets.length);
  var _i1 = 0;
  while (_i1 < this.presets.length) {
    (this.presets[_i1]).serializeAs_Preset(output);
    _i1++;
  };
};

InventoryContentAndPresetMessage.prototype.deserializeAs_InventoryContentAndPresetMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _presetsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _presetsLen) {
    _item1 = new Preset();
    _item1.deserialize(input);
    this.presets.push(_item1);
    _i1++;
  };
};

InventoryContentAndPresetMessage.prototype.getMessageId = function() {
  return 6162;
};

InventoryContentAndPresetMessage.prototype.getClassName = function() {
  return 'InventoryContentAndPresetMessage';
};

module.exports.id = 6162;
module.exports.class = InventoryContentAndPresetMessage;