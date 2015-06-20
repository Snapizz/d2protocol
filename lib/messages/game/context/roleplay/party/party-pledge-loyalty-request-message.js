var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PartyPledgeLoyaltyRequestMessage = function() {
  this.loyal = false;
};

util.inherits(PartyPledgeLoyaltyRequestMessage, BaseMessage);

PartyPledgeLoyaltyRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyPledgeLoyaltyRequestMessage(output);
};

PartyPledgeLoyaltyRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyPledgeLoyaltyRequestMessage(input);
};

PartyPledgeLoyaltyRequestMessage.prototype.serializeAs_PartyPledgeLoyaltyRequestMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeBoolean(this.loyal);
};

PartyPledgeLoyaltyRequestMessage.prototype.deserializeAs_PartyPledgeLoyaltyRequestMessage = function(param1) {
  this.deserialize(param1);
  this.loyal = param1.readBoolean();
};

PartyPledgeLoyaltyRequestMessage.prototype.getMessageId = function() {
  return 6269;
};

PartyPledgeLoyaltyRequestMessage.prototype.getClassName = function() {
  return 'PartyPledgeLoyaltyRequestMessage';
};

module.exports.id = 6269;
module.exports.class = PartyPledgeLoyaltyRequestMessage;
module.exports.getInstance = function() {
  return new PartyPledgeLoyaltyRequestMessage();
};