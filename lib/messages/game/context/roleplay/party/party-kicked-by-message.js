var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyKickedByMessage = function() {
  this.kickerId = 0;
};

util.inherits(PartyKickedByMessage, BaseMessage);

PartyKickedByMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyKickedByMessage(output);
};

PartyKickedByMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyKickedByMessage(input);
};

PartyKickedByMessage.prototype.serializeAs_PartyKickedByMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  if (this.kickerId < 0) {
    throw new Error("Forbidden value (" + this.kickerId + ") on element kickerId.");
  } else {
    param1.writeVarInt(this.kickerId);
    return;
  }
};

PartyKickedByMessage.prototype.deserializeAs_PartyKickedByMessage = function(param1) {
  this.deserialize(param1);
  this.kickerId = param1.readVarUhInt();
  if (this.kickerId < 0) {
    throw new Error("Forbidden value (" + this.kickerId + ") on element of PartyKickedByMessage.kickerId.");
  } else {
    return;
  }
};

PartyKickedByMessage.prototype.getMessageId = function() {
  return 5590;
};

PartyKickedByMessage.prototype.getClassName = function() {
  return 'PartyKickedByMessage';
};

module.exports.id = 5590;
module.exports.class = PartyKickedByMessage;