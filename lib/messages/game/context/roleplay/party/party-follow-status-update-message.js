var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyFollowStatusUpdateMessage = function() {
  this.success = false;
  this.followedId = 0;
};

util.inherits(PartyFollowStatusUpdateMessage, BaseMessage);

PartyFollowStatusUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyFollowStatusUpdateMessage(output);
};

PartyFollowStatusUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyFollowStatusUpdateMessage(input);
};

PartyFollowStatusUpdateMessage.prototype.serializeAs_PartyFollowStatusUpdateMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeBoolean(this.success);
  if (this.followedId < 0) {
    throw new Error("Forbidden value (" + this.followedId + ") on element followedId.");
  } else {
    param1.writeVarInt(this.followedId);
    return;
  }
};

PartyFollowStatusUpdateMessage.prototype.deserializeAs_PartyFollowStatusUpdateMessage = function(param1) {
  this.deserialize(param1);
  this.success = param1.readBoolean();
  this.followedId = param1.readVarUhInt();
  if (this.followedId < 0) {
    throw new Error("Forbidden value (" + this.followedId + ") on element of PartyFollowStatusUpdateMessage.followedId.");
  } else {
    return;
  }
};

PartyFollowStatusUpdateMessage.prototype.getMessageId = function() {
  return 5581;
};

PartyFollowStatusUpdateMessage.prototype.getClassName = function() {
  return 'PartyFollowStatusUpdateMessage';
};

module.exports.id = 5581;
module.exports.class = PartyFollowStatusUpdateMessage;
module.exports.getInstance = function() {
  return new PartyFollowStatusUpdateMessage();
};