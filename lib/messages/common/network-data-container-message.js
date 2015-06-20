var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var NetworkDataContainerMessage = function() {

};

util.inherits(NetworkDataContainerMessage, BaseMessage);

NetworkDataContainerMessage.prototype.serialize = function(output) {
  this.serializeAs_NetworkDataContainerMessage(output);
};

NetworkDataContainerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NetworkDataContainerMessage(input);
};

NetworkDataContainerMessage.prototype.serializeAs_NetworkDataContainerMessage = function(param1) {
  param1.writeBytes(this.content);
  throw new Error("Not implemented");
};

NetworkDataContainerMessage.prototype.deserializeAs_NetworkDataContainerMessage = function(param1) {
  var _loc2_ = param1.readVarInt();
  var _loc3_ = new ByteArray();
  param1.readBytes(_loc3_, 0, _loc2_);
  _loc3_.uncompress();
  this.content = _loc3_;
};

NetworkDataContainerMessage.prototype.getMessageId = function() {
  return 2;
};

NetworkDataContainerMessage.prototype.getClassName = function() {
  return 'NetworkDataContainerMessage';
};

module.exports.id = 2;
module.exports.class = NetworkDataContainerMessage;
module.exports.getInstance = function() {
  return new NetworkDataContainerMessage();
};