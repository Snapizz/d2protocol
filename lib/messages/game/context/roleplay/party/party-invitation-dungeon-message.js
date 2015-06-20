var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationDungeonMessage = function() {
  this.dungeonId = 0;
};

util.inherits(PartyInvitationDungeonMessage, BaseMessage);

PartyInvitationDungeonMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationDungeonMessage(output);
};

PartyInvitationDungeonMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationDungeonMessage(input);
};

PartyInvitationDungeonMessage.prototype.serializeAs_PartyInvitationDungeonMessage = function(output) {
  super.serializeAs_PartyInvitationMessage(param1);
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    return;
  }
};

PartyInvitationDungeonMessage.prototype.deserializeAs_PartyInvitationDungeonMessage = function(input) {
  super.deserialize(param1);
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of PartyInvitationDungeonMessage.dungeonId.");
  } else {
    return;
  }
};

PartyInvitationDungeonMessage.prototype.getMessageId = function() {
  return 6244;
};

PartyInvitationDungeonMessage.prototype.getClassName = function() {
  return 'PartyInvitationDungeonMessage';
};

module.exports.id = 6244;
module.exports.class = PartyInvitationDungeonMessage;