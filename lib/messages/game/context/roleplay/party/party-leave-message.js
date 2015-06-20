var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyLeaveMessage = function() {

};

util.inherits(PartyLeaveMessage, BaseMessage);

PartyLeaveMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyLeaveMessage(output);
};

PartyLeaveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyLeaveMessage(input);
};

PartyLeaveMessage.prototype.serializeAs_PartyLeaveMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
};

PartyLeaveMessage.prototype.deserializeAs_PartyLeaveMessage = function(param1) {
  super.deserialize(param1);
};

PartyLeaveMessage.prototype.getMessageId = function() {
  return 5594;
};

PartyLeaveMessage.prototype.getClassName = function() {
  return 'PartyLeaveMessage';
};

module.exports.id = 5594;
module.exports.class = PartyLeaveMessage;
module.exports.getInstance = function() {
  return new PartyLeaveMessage();
};