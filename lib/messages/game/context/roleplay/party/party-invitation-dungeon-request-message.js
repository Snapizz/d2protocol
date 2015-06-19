var d2com = require('d2com'),
  BaseMessage = require('./party-invitation-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationDungeonRequestMessage = function() {
  this.dungeonId = 0;
};

util.inherits(PartyInvitationDungeonRequestMessage, BaseMessage);

PartyInvitationDungeonRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationDungeonRequestMessage(output);
};

PartyInvitationDungeonRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationDungeonRequestMessage(input);
};

PartyInvitationDungeonRequestMessage.prototype.serializeAs_PartyInvitationDungeonRequestMessage = function(output) {
  this.serializeAs_PartyInvitationRequestMessage(output);
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
};

PartyInvitationDungeonRequestMessage.prototype.deserializeAs_PartyInvitationDungeonRequestMessage = function(input) {
  this.deserialize(input);
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of PartyInvitationDungeonRequestMessage.dungeonId.")));
  };
};

PartyInvitationDungeonRequestMessage.prototype.getMessageId = function() {
  return 6245;
};

PartyInvitationDungeonRequestMessage.prototype.getClassName = function() {
  return 'PartyInvitationDungeonRequestMessage';
};

module.exports.id = 6245;
module.exports.class = PartyInvitationDungeonRequestMessage;