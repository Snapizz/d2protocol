var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyKickRequestMessage = function() {
  this.playerId = 0;
};

util.inherits(PartyKickRequestMessage, BaseMessage);

PartyKickRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyKickRequestMessage(output);
};

PartyKickRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyKickRequestMessage(input);
};

PartyKickRequestMessage.prototype.serializeAs_PartyKickRequestMessage = function(output) {
  super.serializeAs_AbstractPartyMessage(param1);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    return;
  }
};

PartyKickRequestMessage.prototype.deserializeAs_PartyKickRequestMessage = function(input) {
  super.deserialize(param1);
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of PartyKickRequestMessage.playerId.");
  } else {
    return;
  }
};

PartyKickRequestMessage.prototype.getMessageId = function() {
  return 5592;
};

PartyKickRequestMessage.prototype.getClassName = function() {
  return 'PartyKickRequestMessage';
};

module.exports.id = 5592;
module.exports.class = PartyKickRequestMessage;