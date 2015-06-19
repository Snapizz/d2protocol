var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PlayerStatusUpdateRequestMessage = function() {
  this.status;
};

util.inherits(PlayerStatusUpdateRequestMessage, BaseMessage);

PlayerStatusUpdateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PlayerStatusUpdateRequestMessage(output);
};

PlayerStatusUpdateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PlayerStatusUpdateRequestMessage(input);
};

PlayerStatusUpdateRequestMessage.prototype.serializeAs_PlayerStatusUpdateRequestMessage = function(output) {
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
};

PlayerStatusUpdateRequestMessage.prototype.deserializeAs_PlayerStatusUpdateRequestMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id1);
  this.status.deserialize(input);
};

PlayerStatusUpdateRequestMessage.prototype.getMessageId = function() {
  return 6387;
};

PlayerStatusUpdateRequestMessage.prototype.getClassName = function() {
  return 'PlayerStatusUpdateRequestMessage';
};

module.exports.id = 6387;
module.exports.class = PlayerStatusUpdateRequestMessage;