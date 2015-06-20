var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameFightStartingMessage = function() {
  this.fightType = 0;
  this.attackerId = 0;
  this.defenderId = 0;
};

util.inherits(GameFightStartingMessage, BaseMessage);

GameFightStartingMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightStartingMessage(output);
};

GameFightStartingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightStartingMessage(input);
};

GameFightStartingMessage.prototype.serializeAs_GameFightStartingMessage = function(param1) {
  param1.writeByte(this.fightType);
  param1.writeInt(this.attackerId);
  param1.writeInt(this.defenderId);
};

GameFightStartingMessage.prototype.deserializeAs_GameFightStartingMessage = function(param1) {
  this.fightType = param1.readByte();
  if (this.fightType < 0) {
    throw new Error("Forbidden value (" + this.fightType + ") on element of GameFightStartingMessage.fightType.");
  } else {
    this.attackerId = param1.readInt();
    this.defenderId = param1.readInt();
    return;
  }
};

GameFightStartingMessage.prototype.getMessageId = function() {
  return 700;
};

GameFightStartingMessage.prototype.getClassName = function() {
  return 'GameFightStartingMessage';
};

module.exports.id = 700;
module.exports.class = GameFightStartingMessage;
module.exports.getInstance = function() {
  return new GameFightStartingMessage();
};