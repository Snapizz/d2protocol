var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameActionFightInvisibilityMessage = function() {
  this.targetId = 0;
  this.state = 0;
};

util.inherits(GameActionFightInvisibilityMessage, BaseMessage);

GameActionFightInvisibilityMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightInvisibilityMessage(output);
};

GameActionFightInvisibilityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightInvisibilityMessage(input);
};

GameActionFightInvisibilityMessage.prototype.serializeAs_GameActionFightInvisibilityMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  param1.writeByte(this.state);
};

GameActionFightInvisibilityMessage.prototype.deserializeAs_GameActionFightInvisibilityMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
  this.state = param1.readByte();
  if (this.state < 0) {
    throw new Error("Forbidden value (" + this.state + ") on element of GameActionFightInvisibilityMessage.state.");
  } else {
    return;
  }
};

GameActionFightInvisibilityMessage.prototype.getMessageId = function() {
  return 5821;
};

GameActionFightInvisibilityMessage.prototype.getClassName = function() {
  return 'GameActionFightInvisibilityMessage';
};

module.exports.id = 5821;
module.exports.class = GameActionFightInvisibilityMessage;