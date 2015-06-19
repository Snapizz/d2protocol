var d2com = require('d2com'),
  BaseMessage = require('./party-member-remove-message.js').class,
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

PartyMemberEjectedMessage.prototype.serializeAs_PartyMemberEjectedMessage = function(output) {
  this.serializeAs_PartyMemberRemoveMessage(output);
  if (this.kickerId < 0) {
    throw (new Error((("Forbidden value (" + this.kickerId) + ") on element kickerId.")));
  };
  output.writeVarInt(this.kickerId);
};

PartyMemberEjectedMessage.prototype.deserializeAs_PartyMemberEjectedMessage = function(input) {
  this.deserialize(input);
  this.kickerId = input.readVarUhInt();
  if (this.kickerId < 0) {
    throw (new Error((("Forbidden value (" + this.kickerId) + ") on element of PartyMemberEjectedMessage.kickerId.")));
  };
};

PartyMemberEjectedMessage.prototype.getMessageId = function() {
  return 6252;
};

PartyMemberEjectedMessage.prototype.getClassName = function() {
  return 'PartyMemberEjectedMessage';
};

module.exports.id = 6252;
module.exports.class = PartyMemberEjectedMessage;