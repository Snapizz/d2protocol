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

SetUpdateMessage.prototype.serializeAs_SetUpdateMessage = function(param1) {
  if (this.setId < 0) {
    throw new Error("Forbidden value (" + this.setId + ") on element setId.");
  } else {
    param1.writeVarShort(this.setId);
    param1.writeShort(this.setObjects.length);
    var _loc2_ = 0;
    while (_loc2_ < this.setObjects.length) {
      if (this.setObjects[_loc2_] < 0) {
        throw new Error("Forbidden value (" + this.setObjects[_loc2_] + ") on element 2 (starting at 1) of setObjects.");
      } else {
        param1.writeVarShort(this.setObjects[_loc2_]);
        _loc2_++;
        continue;
      }
    }
    param1.writeShort(this.setEffects.length);
    var _loc3_ = 0;
    while (_loc3_ < this.setEffects.length) {
      param1.writeShort((this.setEffects[_loc3_]).getTypeId());
      (this.setEffects[_loc3_]).serialize(param1);
      _loc3_++;
    }
    return;
  }
};

SetUpdateMessage.prototype.deserializeAs_SetUpdateMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc8_ = null;
  this.setId = param1.readVarUhShort();
  if (this.setId < 0) {
    throw new Error("Forbidden value (" + this.setId + ") on element of SetUpdateMessage.setId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc6_ = param1.readVarUhShort();
      if (_loc6_ < 0) {
        throw new Error("Forbidden value (" + _loc6_ + ") on elements of setObjects.");
      } else {
        this.setObjects.push(_loc6_);
        _loc3_++;
        continue;
      }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc7_ = param1.readUnsignedShort();
      _loc8_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc7_);
      _loc8_.deserialize(param1);
      this.setEffects.push(_loc8_);
      _loc5_++;
    }
    return;
  }
};

SetUpdateMessage.prototype.getMessageId = function() {
  return 5503;
};

SetUpdateMessage.prototype.getClassName = function() {
  return 'SetUpdateMessage';
};

module.exports.id = 5503;
module.exports.class = SetUpdateMessage;
module.exports.getInstance = function() {
  return new SetUpdateMessage();
};