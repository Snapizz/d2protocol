var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

PartyFollowMemberRequestMessage.prototype.serializeAs_PartyFollowMemberRequestMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    return;
  }
};

PartyFollowMemberRequestMessage.prototype.deserializeAs_PartyFollowMemberRequestMessage = function(param1) {
  super.deserialize(param1);
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of PartyFollowMemberRequestMessage.playerId.");
  } else {
    return;
  }
};

PartyFollowMemberRequestMessage.prototype.getMessageId = function() {
  return 5577;
};

PartyFollowMemberRequestMessage.prototype.getClassName = function() {
  return 'PartyFollowMemberRequestMessage';
};

module.exports.id = 5577;
module.exports.class = PartyFollowMemberRequestMessage;
module.exports.getInstance = function() {
  return new PartyFollowMemberRequestMessage();
};