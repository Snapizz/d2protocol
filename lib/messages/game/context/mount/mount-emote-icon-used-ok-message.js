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

MountEmoteIconUsedOkMessage.prototype.serializeAs_MountEmoteIconUsedOkMessage = function(output) {
  output.writeInt(this.mountId);
  if (this.reactionType < 0) {
    throw (new Error((("Forbidden value (" + this.reactionType) + ") on element reactionType.")));
  };
  output.writeByte(this.reactionType);
};

MountEmoteIconUsedOkMessage.prototype.deserializeAs_MountEmoteIconUsedOkMessage = function(input) {
  this.mountId = input.readInt();
  this.reactionType = input.readByte();
  if (this.reactionType < 0) {
    throw (new Error((("Forbidden value (" + this.reactionType) + ") on element of MountEmoteIconUsedOkMessage.reactionType.")));
  };
};

MountEmoteIconUsedOkMessage.prototype.getMessageId = function() {
  return 5978;
};

MountEmoteIconUsedOkMessage.prototype.getClassName = function() {
  return 'MountEmoteIconUsedOkMessage';
};

module.exports.id = 5978;
module.exports.class = MountEmoteIconUsedOkMessage;