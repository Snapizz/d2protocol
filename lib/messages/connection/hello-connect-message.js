var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var HelloConnectMessage = function() {
  this.salt = "";
  this.key = [];
};

util.inherits(HelloConnectMessage, BaseMessage);

HelloConnectMessage.prototype.serialize = function(output) {
  this.serializeAs_HelloConnectMessage(output);
};

HelloConnectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HelloConnectMessage(input);
};

HelloConnectMessage.prototype.serializeAs_HelloConnectMessage = function(param1) {
  param1.writeUTF(this.salt);
  param1.writeVarInt(this.key.length);
  var _loc2_ = 0;
  while (_loc2_ < this.key.length) {
    param1.writeByte(this.key[_loc2_]);
    _loc2_++;
  }
};

HelloConnectMessage.prototype.deserializeAs_HelloConnectMessage = function(param1) {
  var _loc4_ = 0;
  this.salt = param1.readUTF();
  var _loc2_ = param1.readVarInt();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readByte();
    this.key.push(_loc4_);
    _loc3_++;
  }
};

HelloConnectMessage.prototype.getMessageId = function() {
  return 3;
};

HelloConnectMessage.prototype.getClassName = function() {
  return 'HelloConnectMessage';
};

module.exports.id = 3;
module.exports.class = HelloConnectMessage;
module.exports.getInstance = function() {
  return new HelloConnectMessage();
};