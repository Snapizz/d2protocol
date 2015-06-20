var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextCreateMessage = function() {
  this.context = 1;
};

util.inherits(GameContextCreateMessage, BaseMessage);

GameContextCreateMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextCreateMessage(output);
};

GameContextCreateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextCreateMessage(input);
};

GameContextCreateMessage.prototype.serializeAs_GameContextCreateMessage = function(output) {
  param1.writeByte(this.context);
};

GameContextCreateMessage.prototype.deserializeAs_GameContextCreateMessage = function(input) {
  this.context = param1.readByte();
  if (this.context < 0) {
    throw new Error("Forbidden value (" + this.context + ") on element of GameContextCreateMessage.context.");
  } else {
    return;
  }
};

GameContextCreateMessage.prototype.getMessageId = function() {
  return 200;
};

GameContextCreateMessage.prototype.getClassName = function() {
  return 'GameContextCreateMessage';
};

module.exports.id = 200;
module.exports.class = GameContextCreateMessage;