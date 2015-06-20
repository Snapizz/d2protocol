var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var PartyStopFollowRequestMessage = function() {

};

util.inherits(PartyStopFollowRequestMessage, BaseMessage);

PartyStopFollowRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyStopFollowRequestMessage(output);
};

PartyStopFollowRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyStopFollowRequestMessage(input);
};

PartyStopFollowRequestMessage.prototype.serializeAs_PartyStopFollowRequestMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
};

PartyStopFollowRequestMessage.prototype.deserializeAs_PartyStopFollowRequestMessage = function(param1) {
  this.deserialize(param1);
};

PartyStopFollowRequestMessage.prototype.getMessageId = function() {
  return 5574;
};

PartyStopFollowRequestMessage.prototype.getClassName = function() {
  return 'PartyStopFollowRequestMessage';
};

module.exports.id = 5574;
module.exports.class = PartyStopFollowRequestMessage;
module.exports.getInstance = function() {
  return new PartyStopFollowRequestMessage();
};