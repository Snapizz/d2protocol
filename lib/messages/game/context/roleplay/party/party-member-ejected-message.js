var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyMemberEjectedMessage = function() {
  this.kickerId = 0;
};

util.inherits(PartyMemberEjectedMessage, BaseMessage);

PartyMemberEjectedMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberEjectedMessage(output);
};

PartyMemberEjectedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberEjectedMessage(input);
};

PartyMemberEjectedMessage.prototype.serializeAs_PartyMemberEjectedMessage = function(param1) {
  this.serializeAs_PartyMemberRemoveMessage(param1);
  if (this.kickerId < 0) {
    throw new Error("Forbidden value (" + this.kickerId + ") on element kickerId.");
  } else {
    param1.writeVarInt(this.kickerId);
    return;
  }
};

PartyMemberEjectedMessage.prototype.deserializeAs_PartyMemberEjectedMessage = function(param1) {
  this.deserialize(param1);
  this.kickerId = param1.readVarUhInt();
  if (this.kickerId < 0) {
    throw new Error("Forbidden value (" + this.kickerId + ") on element of PartyMemberEjectedMessage.kickerId.");
  } else {
    return;
  }
};

PartyMemberEjectedMessage.prototype.getMessageId = function() {
  return 6252;
};

PartyMemberEjectedMessage.prototype.getClassName = function() {
  return 'PartyMemberEjectedMessage';
};

module.exports.id = 6252;
module.exports.class = PartyMemberEjectedMessage;