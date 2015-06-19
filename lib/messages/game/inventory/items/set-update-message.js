var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SetUpdateMessage = function() {
  this.setId = 0;
  this.setObjects = [];
  this.setEffects = [];
};

util.inherits(SetUpdateMessage, BaseMessage);

SetUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_SetUpdateMessage(output);
};

SetUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SetUpdateMessage(input);
};

SetUpdateMessage.prototype.serializeAs_SetUpdateMessage = function(output) {
  if (this.setId < 0) {
    throw (new Error((("Forbidden value (" + this.setId) + ") on element setId.")));
  };
  output.writeVarShort(this.setId);
  output.writeShort(this.setObjects.length);
  var _i2;
  while (_i2 < this.setObjects.length) {
    if (this.setObjects[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.setObjects[_i2]) + ") on element 2 (starting at 1) of setObjects.")));
    };
    output.writeVarShort(this.setObjects[_i2]);
    _i2++;
  };
  output.writeShort(this.setEffects.length);
  var _i3;
  while (_i3 < this.setEffects.length) {
    output.writeShort((this.setEffects[_i3]).getTypeId());
    (this.setEffects[_i3]).serialize(output);
    _i3++;
  };
};

SetUpdateMessage.prototype.deserializeAs_SetUpdateMessage = function(input) {
  var _val2;
  var _id3;
  var _item3;
  this.setId = input.readVarUhShort();
  if (this.setId < 0) {
    throw (new Error((("Forbidden value (" + this.setId) + ") on element of SetUpdateMessage.setId.")));
  };
  var _setObjectsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _setObjectsLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of setObjects.")));
    };
    this.setObjects.push(_val2);
    _i2++;
  };
  var _setEffectsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _setEffectsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(ObjectEffect, _id3);
    _item3.deserialize(input);
    this.setEffects.push(_item3);
    _i3++;
  };
};

SetUpdateMessage.prototype.getMessageId = function() {
  return 5503;
};

SetUpdateMessage.prototype.getClassName = function() {
  return 'SetUpdateMessage';
};

module.exports.id = 5503;
module.exports.class = SetUpdateMessage;