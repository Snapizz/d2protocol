var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportToBuddyOfferMessage = function() {
  this.dungeonId = 0;
  this.buddyId = 0;
  this.timeLeft = 0;
};

util.inherits(TeleportToBuddyOfferMessage, BaseMessage);

TeleportToBuddyOfferMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportToBuddyOfferMessage(output);
};

TeleportToBuddyOfferMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportToBuddyOfferMessage(input);
};

TeleportToBuddyOfferMessage.prototype.serializeAs_TeleportToBuddyOfferMessage = function(output) {
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
  } else {
    param1.writeVarShort(this.dungeonId);
    if (this.buddyId < 0) {
      throw new Error("Forbidden value (" + this.buddyId + ") on element buddyId.");
    } else {
      param1.writeVarInt(this.buddyId);
      if (this.timeLeft < 0) {
        throw new Error("Forbidden value (" + this.timeLeft + ") on element timeLeft.");
      } else {
        param1.writeVarInt(this.timeLeft);
        return;
      }
    }
  }
};

TeleportToBuddyOfferMessage.prototype.deserializeAs_TeleportToBuddyOfferMessage = function(input) {
  this.dungeonId = param1.readVarUhShort();
  if (this.dungeonId < 0) {
    throw new Error("Forbidden value (" + this.dungeonId + ") on element of TeleportToBuddyOfferMessage.dungeonId.");
  } else {
    this.buddyId = param1.readVarUhInt();
    if (this.buddyId < 0) {
      throw new Error("Forbidden value (" + this.buddyId + ") on element of TeleportToBuddyOfferMessage.buddyId.");
    } else {
      this.timeLeft = param1.readVarUhInt();
      if (this.timeLeft < 0) {
        throw new Error("Forbidden value (" + this.timeLeft + ") on element of TeleportToBuddyOfferMessage.timeLeft.");
      } else {
        return;
      }
    }
  }
};

TeleportToBuddyOfferMessage.prototype.getMessageId = function() {
  return 6287;
};

TeleportToBuddyOfferMessage.prototype.getClassName = function() {
  return 'TeleportToBuddyOfferMessage';
};

module.exports.id = 6287;
module.exports.class = TeleportToBuddyOfferMessage;