var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
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

PartyLeaderUpdateMessage.prototype.serializeAs_PartyLeaderUpdateMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  if (this.partyLeaderId < 0) {
    throw (new Error((("Forbidden value (" + this.partyLeaderId) + ") on element partyLeaderId.")));
  };
  output.writeVarInt(this.partyLeaderId);
};

PartyLeaderUpdateMessage.prototype.deserializeAs_PartyLeaderUpdateMessage = function(input) {
  this.deserialize(input);
  this.partyLeaderId = input.readVarUhInt();
  if (this.partyLeaderId < 0) {
    throw (new Error((("Forbidden value (" + this.partyLeaderId) + ") on element of PartyLeaderUpdateMessage.partyLeaderId.")));
  };
};

PartyLeaderUpdateMessage.prototype.getMessageId = function() {
  return 5578;
};

PartyLeaderUpdateMessage.prototype.getClassName = function() {
  return 'PartyLeaderUpdateMessage';
};

module.exports.id = 5578;
module.exports.class = PartyLeaderUpdateMessage;