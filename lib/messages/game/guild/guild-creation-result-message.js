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

GuildCreationResultMessage.prototype.serializeAs_GuildCreationResultMessage = function(output) {
  output.writeByte(this.result);
};

GuildCreationResultMessage.prototype.deserializeAs_GuildCreationResultMessage = function(input) {
  this.result = input.readByte();
  if (this.result < 0) {
    throw (new Error((("Forbidden value (" + this.result) + ") on element of GuildCreationResultMessage.result.")));
  };
};

GuildCreationResultMessage.prototype.getMessageId = function() {
  return 5554;
};

GuildCreationResultMessage.prototype.getClassName = function() {
  return 'GuildCreationResultMessage';
};

module.exports.id = 5554;
module.exports.class = GuildCreationResultMessage;