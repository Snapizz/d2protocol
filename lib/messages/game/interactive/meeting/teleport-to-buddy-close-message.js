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
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeVarShort(this.dungeonId);
  if (this.buddyId < 0) {
    throw (new Error((("Forbidden value (" + this.buddyId) + ") on element buddyId.")));
  };
  output.writeVarInt(this.buddyId);
};

TeleportToBuddyCloseMessage.prototype.deserializeAs_TeleportToBuddyCloseMessage = function(input) {
  this.dungeonId = input.readVarUhShort();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of TeleportToBuddyCloseMessage.dungeonId.")));
  };
  this.buddyId = input.readVarUhInt();
  if (this.buddyId < 0) {
    throw (new Error((("Forbidden value (" + this.buddyId) + ") on element of TeleportToBuddyCloseMessage.buddyId.")));
  };
};

TeleportToBuddyCloseMessage.prototype.getMessageId = function() {
  return 6303;
};

TeleportToBuddyCloseMessage.prototype.getClassName = function() {
  return 'TeleportToBuddyCloseMessage';
};

module.exports.id = 6303;
module.exports.class = TeleportToBuddyCloseMessage;