var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyMemberRemoveMessage = function() {
  this.leavingPlayerId = 0;
};

util.inherits(PartyMemberRemoveMessage, BaseMessage);

PartyMemberRemoveMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberRemoveMessage(output);
};

PartyMemberRemoveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberRemoveMessage(input);
};

PartyMemberRemoveMessage.prototype.serializeAs_PartyMemberRemoveMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  if (this.leavingPlayerId < 0) {
    throw (new Error((("Forbidden value (" + this.leavingPlayerId) + ") on element leavingPlayerId.")));
  };
  output.writeVarInt(this.leavingPlayerId);
};

PartyMemberRemoveMessage.prototype.deserializeAs_PartyMemberRemoveMessage = function(input) {
  this.deserialize(input);
  this.leavingPlayerId = input.readVarUhInt();
  if (this.leavingPlayerId < 0) {
    throw (new Error((("Forbidden value (" + this.leavingPlayerId) + ") on element of PartyMemberRemoveMessage.leavingPlayerId.")));
  };
};

PartyMemberRemoveMessage.prototype.getMessageId = function() {
  return 5579;
};

PartyMemberRemoveMessage.prototype.getClassName = function() {
  return 'PartyMemberRemoveMessage';
};

module.exports.id = 5579;
module.exports.class = PartyMemberRemoveMessage;