var d2com = require('d2com'),
  BaseMessage = require('./player-status-update-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var PlayerStatus = require('../../../../types/game/character/status/player-status.js').class;

var PlayerStatusUpdateRequestMessage = function() {
  this.status = new PlayerStatus();
};

util.inherits(PlayerStatusUpdateRequestMessage, BaseMessage);

PlayerStatusUpdateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PlayerStatusUpdateRequestMessage(output);
};

PlayerStatusUpdateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PlayerStatusUpdateRequestMessage(input);
};

PlayerStatusUpdateRequestMessage.prototype.serializeAs_PlayerStatusUpdateRequestMessage = function(param1) {
  param1.writeShort(this.status.getTypeId());
  this.status.serialize(param1);
};

PlayerStatusUpdateRequestMessage.prototype.deserializeAs_PlayerStatusUpdateRequestMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
  this.status.deserialize(param1);
};

PlayerStatusUpdateRequestMessage.prototype.getMessageId = function() {
  return 6387;
};

PlayerStatusUpdateRequestMessage.prototype.getClassName = function() {
  return 'PlayerStatusUpdateRequestMessage';
};

module.exports.id = 6387;
module.exports.class = PlayerStatusUpdateRequestMessage;
module.exports.getInstance = function() {
  return new PlayerStatusUpdateRequestMessage();
};