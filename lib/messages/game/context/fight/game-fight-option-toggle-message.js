var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameFightOptionToggleMessage = function() {
  this.option = 3;
};

util.inherits(GameFightOptionToggleMessage, BaseMessage);

GameFightOptionToggleMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightOptionToggleMessage(output);
};

GameFightOptionToggleMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightOptionToggleMessage(input);
};

GameFightOptionToggleMessage.prototype.serializeAs_GameFightOptionToggleMessage = function(param1) {
  param1.writeByte(this.option);
};

GameFightOptionToggleMessage.prototype.deserializeAs_GameFightOptionToggleMessage = function(param1) {
  this.option = param1.readByte();
  if (this.option < 0) {
    throw new Error("Forbidden value (" + this.option + ") on element of GameFightOptionToggleMessage.option.");
  } else {
    return;
  }
};

GameFightOptionToggleMessage.prototype.getMessageId = function() {
  return 707;
};

GameFightOptionToggleMessage.prototype.getClassName = function() {
  return 'GameFightOptionToggleMessage';
};

module.exports.id = 707;
module.exports.class = GameFightOptionToggleMessage;