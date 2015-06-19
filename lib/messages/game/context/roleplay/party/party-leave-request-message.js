var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyLeaveRequestMessage = function() {

};

util.inherits(PartyLeaveRequestMessage, BaseMessage);

PartyLeaveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyLeaveRequestMessage(output);
};

PartyLeaveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyLeaveRequestMessage(input);
};

PartyLeaveRequestMessage.prototype.serializeAs_PartyLeaveRequestMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

PartyLeaveRequestMessage.prototype.deserializeAs_PartyLeaveRequestMessage = function(input) {
  this.deserialize(input);
};

PartyLeaveRequestMessage.prototype.getMessageId = function() {
  return 5593;
};

PartyLeaveRequestMessage.prototype.getClassName = function() {
  return 'PartyLeaveRequestMessage';
};

module.exports.id = 5593;
module.exports.class = PartyLeaveRequestMessage;