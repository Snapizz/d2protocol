var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyFollowMemberRequestMessage = function() {
  this.playerId = 0;
};

util.inherits(PartyFollowMemberRequestMessage, BaseMessage);

PartyFollowMemberRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyFollowMemberRequestMessage(output);
};

PartyFollowMemberRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyFollowMemberRequestMessage(input);
};

PartyFollowMemberRequestMessage.prototype.serializeAs_PartyFollowMemberRequestMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

PartyFollowMemberRequestMessage.prototype.deserializeAs_PartyFollowMemberRequestMessage = function(input) {
  this.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of PartyFollowMemberRequestMessage.playerId.")));
  };
};

PartyFollowMemberRequestMessage.prototype.getMessageId = function() {
  return 5577;
};

PartyFollowMemberRequestMessage.prototype.getClassName = function() {
  return 'PartyFollowMemberRequestMessage';
};

module.exports.id = 5577;
module.exports.class = PartyFollowMemberRequestMessage;