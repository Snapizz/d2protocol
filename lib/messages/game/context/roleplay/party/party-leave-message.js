var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PartyLeaveMessage.prototype.serializeAs_PartyLeaveMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

PartyLeaveMessage.prototype.deserializeAs_PartyLeaveMessage = function(input) {
  this.deserialize(input);
};

PartyLeaveMessage.prototype.getMessageId = function() {
  return 5594;
};

PartyLeaveMessage.prototype.getClassName = function() {
  return 'PartyLeaveMessage';
};

module.exports.id = 5594;
module.exports.class = PartyLeaveMessage;