var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GuildCreationResultMessage = function() {
  this.result = 0;
};

util.inherits(GuildCreationResultMessage, BaseMessage);

GuildCreationResultMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildCreationResultMessage(output);
};

GuildCreationResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildCreationResultMessage(input);
};

GuildCreationResultMessage.prototype.serializeAs_GuildCreationResultMessage = function(param1) {
  param1.writeByte(this.result);
};

GuildCreationResultMessage.prototype.deserializeAs_GuildCreationResultMessage = function(param1) {
  this.result = param1.readByte();
  if (this.result < 0) {
    throw new Error("Forbidden value (" + this.result + ") on element of GuildCreationResultMessage.result.");
  } else {
    return;
  }
};

GuildCreationResultMessage.prototype.getMessageId = function() {
  return 5554;
};

GuildCreationResultMessage.prototype.getClassName = function() {
  return 'GuildCreationResultMessage';
};

module.exports.id = 5554;
module.exports.class = GuildCreationResultMessage;