var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportToBuddyAnswerMessage = function() {
  this.dungeonId = 0;
  this.buddyId = 0;
  this.accept = false;
};

util.inherits(TeleportToBuddyAnswerMessage, BaseMessage);

TeleportToBuddyAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportToBuddyAnswerMessage(output);
};

TeleportToBuddyAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportToBuddyAnswerMessage(input);
};

TeleportToBuddyAnswerMessage.prototype.serializeAs_TeleportToBuddyAnswerMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  if (this.buddyId < 0) {
    throw (new Error((("Forbidden value (" + this.buddyId) + ") on element buddyId.")));
  };
  output.writeVarInt(this.buddyId);
  output.writeBoolean(this.accept);
};

TeleportToBuddyAnswerMessage.prototype.deserializeAs_TeleportToBuddyAnswerMessage = function(input) {
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of TeleportToBuddyAnswerMessage.dungeonId.")));
  };
  this.buddyId = input.readVarUhInt();
  if (this.buddyId < 0) {
    throw (new Error((("Forbidden value (" + this.buddyId) + ") on element of TeleportToBuddyAnswerMessage.buddyId.")));
  };
  this.accept = input.readBoolean();
};

TeleportToBuddyAnswerMessage.prototype.getMessageId = function() {
  return 6293;
};

TeleportToBuddyAnswerMessage.prototype.getClassName = function() {
  return 'TeleportToBuddyAnswerMessage';
};

module.exports.id = 6293;
module.exports.class = TeleportToBuddyAnswerMessage;