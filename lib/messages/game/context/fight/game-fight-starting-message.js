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

GameFightStartingMessage.prototype.serializeAs_GameFightStartingMessage = function(output) {
  output.writeByte(this.fightType);
  output.writeInt(this.attackerId);
  output.writeInt(this.defenderId);
};

GameFightStartingMessage.prototype.deserializeAs_GameFightStartingMessage = function(input) {
  this.fightType = input.readByte();
  if (this.fightType < 0) {
    throw (new Error((("Forbidden value (" + this.fightType) + ") on element of GameFightStartingMessage.fightType.")));
  };
  this.attackerId = input.readInt();
  this.defenderId = input.readInt();
};

GameFightStartingMessage.prototype.getMessageId = function() {
  return 700;
};

GameFightStartingMessage.prototype.getClassName = function() {
  return 'GameFightStartingMessage';
};

module.exports.id = 700;
module.exports.class = GameFightStartingMessage;