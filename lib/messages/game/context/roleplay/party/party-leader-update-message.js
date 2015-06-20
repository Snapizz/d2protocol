var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PartyLeaderUpdateMessage = function() {
  this.partyLeaderId = 0;
};

util.inherits(PartyLeaderUpdateMessage, BaseMessage);

PartyLeaderUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyLeaderUpdateMessage(output);
};

PartyLeaderUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyLeaderUpdateMessage(input);
};

PartyLeaderUpdateMessage.prototype.serializeAs_PartyLeaderUpdateMessage = function(param1) {
  this.serializeAs_AbstractPartyEventMessage(param1);
  if (this.partyLeaderId < 0) {
    throw new Error("Forbidden value (" + this.partyLeaderId + ") on element partyLeaderId.");
  } else {
    param1.writeVarInt(this.partyLeaderId);
    return;
  }
};

PartyLeaderUpdateMessage.prototype.deserializeAs_PartyLeaderUpdateMessage = function(param1) {
  this.deserialize(param1);
  this.partyLeaderId = param1.readVarUhInt();
  if (this.partyLeaderId < 0) {
    throw new Error("Forbidden value (" + this.partyLeaderId + ") on element of PartyLeaderUpdateMessage.partyLeaderId.");
  } else {
    return;
  }
};

PartyLeaderUpdateMessage.prototype.getMessageId = function() {
  return 5578;
};

PartyLeaderUpdateMessage.prototype.getClassName = function() {
  return 'PartyLeaderUpdateMessage';
};

module.exports.id = 5578;
module.exports.class = PartyLeaderUpdateMessage;
module.exports.getInstance = function() {
  return new PartyLeaderUpdateMessage();
};