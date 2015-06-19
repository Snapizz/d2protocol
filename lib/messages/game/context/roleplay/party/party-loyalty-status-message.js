var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyLoyaltyStatusMessage = function() {
  this.loyal = false;
};

util.inherits(PartyLoyaltyStatusMessage, BaseMessage);

PartyLoyaltyStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyLoyaltyStatusMessage(output);
};

PartyLoyaltyStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyLoyaltyStatusMessage(input);
};

PartyLoyaltyStatusMessage.prototype.serializeAs_PartyLoyaltyStatusMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeBoolean(this.loyal);
};

PartyLoyaltyStatusMessage.prototype.deserializeAs_PartyLoyaltyStatusMessage = function(input) {
  this.deserialize(input);
  this.loyal = input.readBoolean();
};

PartyLoyaltyStatusMessage.prototype.getMessageId = function() {
  return 6270;
};

PartyLoyaltyStatusMessage.prototype.getClassName = function() {
  return 'PartyLoyaltyStatusMessage';
};

module.exports.id = 6270;
module.exports.class = PartyLoyaltyStatusMessage;