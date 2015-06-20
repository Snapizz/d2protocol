var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyAbdicateThroneMessage = function() {
  this.playerId = 0;
};

util.inherits(PartyAbdicateThroneMessage, BaseMessage);

PartyAbdicateThroneMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyAbdicateThroneMessage(output);
};

PartyAbdicateThroneMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyAbdicateThroneMessage(input);
};

PartyAbdicateThroneMessage.prototype.serializeAs_PartyAbdicateThroneMessage = function(output) {
  super.serializeAs_AbstractPartyMessage(param1);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    return;
  }
};

PartyAbdicateThroneMessage.prototype.deserializeAs_PartyAbdicateThroneMessage = function(input) {
  super.deserialize(param1);
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of PartyAbdicateThroneMessage.playerId.");
  } else {
    return;
  }
};

PartyAbdicateThroneMessage.prototype.getMessageId = function() {
  return 6080;
};

PartyAbdicateThroneMessage.prototype.getClassName = function() {
  return 'PartyAbdicateThroneMessage';
};

module.exports.id = 6080;
module.exports.class = PartyAbdicateThroneMessage;