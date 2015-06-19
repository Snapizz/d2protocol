var d2com = require('d2com'),
  BaseMessage = require('./party-invitation-message.js').class,
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
  this.serializeAs_PartyInvitationMessage(output);
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
};

PartyInvitationDungeonMessage.prototype.deserializeAs_PartyInvitationDungeonMessage = function(input) {
  this.deserialize(input);
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of PartyInvitationDungeonMessage.dungeonId.")));
  };
};

PartyInvitationDungeonMessage.prototype.getMessageId = function() {
  return 6244;
};

PartyInvitationDungeonMessage.prototype.getClassName = function() {
  return 'PartyInvitationDungeonMessage';
};

module.exports.id = 6244;
module.exports.class = PartyInvitationDungeonMessage;