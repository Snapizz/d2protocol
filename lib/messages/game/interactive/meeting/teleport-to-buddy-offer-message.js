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
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  if (this.buddyId < 0) {
    throw (new Error((("Forbidden value (" + this.buddyId) + ") on element buddyId.")));
  };
  output.writeVarInt(this.buddyId);
  if (this.timeLeft < 0) {
    throw (new Error((("Forbidden value (" + this.timeLeft) + ") on element timeLeft.")));
  };
  output.writeVarInt(this.timeLeft);
};

TeleportToBuddyOfferMessage.prototype.deserializeAs_TeleportToBuddyOfferMessage = function(input) {
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of TeleportToBuddyOfferMessage.dungeonId.")));
  };
  this.buddyId = input.readVarUhInt();
  if (this.buddyId < 0) {
    throw (new Error((("Forbidden value (" + this.buddyId) + ") on element of TeleportToBuddyOfferMessage.buddyId.")));
  };
  this.timeLeft = input.readVarUhInt();
  if (this.timeLeft < 0) {
    throw (new Error((("Forbidden value (" + this.timeLeft) + ") on element of TeleportToBuddyOfferMessage.timeLeft.")));
  };
};

TeleportToBuddyOfferMessage.prototype.getMessageId = function() {
  return 6287;
};

TeleportToBuddyOfferMessage.prototype.getClassName = function() {
  return 'TeleportToBuddyOfferMessage';
};

module.exports.id = 6287;
module.exports.class = TeleportToBuddyOfferMessage;