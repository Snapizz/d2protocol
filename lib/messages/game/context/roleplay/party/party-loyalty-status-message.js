var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_AbstractPartyMessage(param1);
  param1.writeBoolean(this.loyal);
};

PartyLoyaltyStatusMessage.prototype.deserializeAs_PartyLoyaltyStatusMessage = function(input) {
  super.deserialize(param1);
  this.loyal = param1.readBoolean();
};

PartyLoyaltyStatusMessage.prototype.getMessageId = function() {
  return 6270;
};

PartyLoyaltyStatusMessage.prototype.getClassName = function() {
  return 'PartyLoyaltyStatusMessage';
};

module.exports.id = 6270;
module.exports.class = PartyLoyaltyStatusMessage;