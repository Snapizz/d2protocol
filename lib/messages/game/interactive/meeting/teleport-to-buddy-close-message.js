var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportToBuddyCloseMessage = function() {
  this.dungeonId = 0;
  this.buddyId = 0;
};

util.inherits(TeleportToBuddyCloseMessage, BaseMessage);

TeleportToBuddyCloseMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportToBuddyCloseMessage(output);
};

TeleportToBuddyCloseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportToBuddyCloseMessage(input);
};

TeleportToBuddyCloseMessage.prototype.serializeAs_TeleportToBuddyCloseMessage = function(output) {
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    if (this.buddyId < 0) {
      throw new Error("Forbidden value (" + this.buddyId + ") on element buddyId.");
    } else {
      param1.writeVarInt(this.buddyId);
      return;
    }
  }
};

TeleportToBuddyCloseMessage.prototype.deserializeAs_TeleportToBuddyCloseMessage = function(input) {
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyCloseMessage.dungeonId.");
  } else {
    this.buddyId = param1.readVarUhInt();
    if (this.buddyId < 0) {
      throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyCloseMessage.buddyId.");
    } else {
      return;
    }
  }
};

TeleportToBuddyCloseMessage.prototype.getMessageId = function() {
  return 6303;
};

TeleportToBuddyCloseMessage.prototype.getClassName = function() {
  return 'TeleportToBuddyCloseMessage';
};

module.exports.id = 6303;
module.exports.class = TeleportToBuddyCloseMessage;