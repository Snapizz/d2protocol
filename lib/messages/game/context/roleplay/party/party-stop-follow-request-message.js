var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PartyStopFollowRequestMessage.prototype.serializeAs_PartyStopFollowRequestMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

PartyStopFollowRequestMessage.prototype.deserializeAs_PartyStopFollowRequestMessage = function(input) {
  this.deserialize(input);
};

PartyStopFollowRequestMessage.prototype.getMessageId = function() {
  return 5574;
};

PartyStopFollowRequestMessage.prototype.getClassName = function() {
  return 'PartyStopFollowRequestMessage';
};

module.exports.id = 5574;
module.exports.class = PartyStopFollowRequestMessage;