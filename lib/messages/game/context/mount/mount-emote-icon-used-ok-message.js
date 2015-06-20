var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MountEmoteIconUsedOkMessage = function() {
  this.mountId = 0;
  this.reactionType = 0;
};

util.inherits(MountEmoteIconUsedOkMessage, BaseMessage);

MountEmoteIconUsedOkMessage.prototype.serialize = function(output) {
  this.serializeAs_MountEmoteIconUsedOkMessage(output);
};

MountEmoteIconUsedOkMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MountEmoteIconUsedOkMessage(input);
};

MountEmoteIconUsedOkMessage.prototype.serializeAs_MountEmoteIconUsedOkMessage = function(param1) {
  param1.writeVarInt(this.mountId);
  if (this.reactionType < 0) {
    throw new Error("Forbidden value (" + this.reactionType + ") on element reactionType.");
  } else {
    param1.writeByte(this.reactionType);
    return;
  }
};

MountEmoteIconUsedOkMessage.prototype.deserializeAs_MountEmoteIconUsedOkMessage = function(param1) {
  this.mountId = param1.readVarInt();
  this.reactionType = param1.readByte();
  if (this.reactionType < 0) {
    throw new Error("Forbidden value (" + this.reactionType + ") on element of MountEmoteIconUsedOkMessage.reactionType.");
  } else {
    return;
  }
};

MountEmoteIconUsedOkMessage.prototype.getMessageId = function() {
  return 5978;
};

MountEmoteIconUsedOkMessage.prototype.getClassName = function() {
  return 'MountEmoteIconUsedOkMessage';
};

module.exports.id = 5978;
module.exports.class = MountEmoteIconUsedOkMessage;