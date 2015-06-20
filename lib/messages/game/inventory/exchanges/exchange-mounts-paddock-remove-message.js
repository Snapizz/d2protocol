var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ExchangeMountsPaddockRemoveMessage = function() {
  this.mountsId = [];
};

util.inherits(ExchangeMountsPaddockRemoveMessage, BaseMessage);

ExchangeMountsPaddockRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountsPaddockRemoveMessage(output);
};

ExchangeMountsPaddockRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountsPaddockRemoveMessage(input);
};

ExchangeMountsPaddockRemoveMessage.prototype.serializeAs_ExchangeMountsPaddockRemoveMessage = function(param1) {
  param1.writeShort(this.mountsId.length);
  var _loc2_ = 0;
  while (_loc2_ < this.mountsId.length) {
    param1.writeVarInt(this.mountsId[_loc2_]);
    _loc2_++;
  }
};

ExchangeMountsPaddockRemoveMessage.prototype.deserializeAs_ExchangeMountsPaddockRemoveMessage = function(param1) {
  var _loc4_ = 0;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readVarInt();
    this.mountsId.push(_loc4_);
    _loc3_++;
  }
};

ExchangeMountsPaddockRemoveMessage.prototype.getMessageId = function() {
  return 6559;
};

ExchangeMountsPaddockRemoveMessage.prototype.getClassName = function() {
  return 'ExchangeMountsPaddockRemoveMessage';
};

module.exports.id = 6559;
module.exports.class = ExchangeMountsPaddockRemoveMessage;
module.exports.getInstance = function() {
  return new ExchangeMountsPaddockRemoveMessage();
};