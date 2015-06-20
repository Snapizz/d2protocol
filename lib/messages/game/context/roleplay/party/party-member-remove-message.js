var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  this.serializeAs_AbstractPartyEventMessage(param1);
  if (this.leavingPlayerId < 0) {
    throw new Error("Forbidden value (" + this.leavingPlayerId + ") on element leavingPlayerId.");
  } else {
    param1.writeVarInt(this.leavingPlayerId);
    return;
  }
};

PartyMemberRemoveMessage.prototype.deserializeAs_PartyMemberRemoveMessage = function(input) {
  this.deserialize(param1);
  this.leavingPlayerId = param1.readVarUhInt();
  if (this.leavingPlayerId < 0) {
    throw new Error("Forbidden value (" + this.leavingPlayerId + ") on element of PartyMemberRemoveMessage.leavingPlayerId.");
  } else {
    return;
  }
};

PartyMemberRemoveMessage.prototype.getMessageId = function() {
  return 5579;
};

PartyMemberRemoveMessage.prototype.getClassName = function() {
  return 'PartyMemberRemoveMessage';
};

module.exports.id = 5579;
module.exports.class = PartyMemberRemoveMessage;