var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PartyFollowStatusUpdateMessage.prototype.serializeAs_PartyFollowStatusUpdateMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeBoolean(this.success);
  if (this.followedId < 0) {
    throw (new Error((("Forbidden value (" + this.followedId) + ") on element followedId.")));
  };
  output.writeVarInt(this.followedId);
};

PartyFollowStatusUpdateMessage.prototype.deserializeAs_PartyFollowStatusUpdateMessage = function(input) {
  this.deserialize(input);
  this.success = input.readBoolean();
  this.followedId = input.readVarUhInt();
  if (this.followedId < 0) {
    throw (new Error((("Forbidden value (" + this.followedId) + ") on element of PartyFollowStatusUpdateMessage.followedId.")));
  };
};

PartyFollowStatusUpdateMessage.prototype.getMessageId = function() {
  return 5581;
};

PartyFollowStatusUpdateMessage.prototype.getClassName = function() {
  return 'PartyFollowStatusUpdateMessage';
};

module.exports.id = 5581;
module.exports.class = PartyFollowStatusUpdateMessage;