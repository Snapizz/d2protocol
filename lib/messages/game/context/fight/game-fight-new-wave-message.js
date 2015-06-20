var d2com = require('d2com'),
  BaseMessage = require('./game-fight-new-wave-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameFightNewWaveMessage = function() {
  this.id = 0;
  this.teamId = 2;
  this.nbTurnBeforeNextWave = 0;
};

util.inherits(GameFightNewWaveMessage, BaseMessage);

GameFightNewWaveMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightNewWaveMessage(output);
};

GameFightNewWaveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightNewWaveMessage(input);
};

GameFightNewWaveMessage.prototype.serializeAs_GameFightNewWaveMessage = function(param1) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeByte(this.id);
    param1.writeByte(this.teamId);
    param1.writeShort(this.nbTurnBeforeNextWave);
    return;
  }
};

GameFightNewWaveMessage.prototype.deserializeAs_GameFightNewWaveMessage = function(param1) {
  this.id = param1.readByte();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of GameFightNewWaveMessage.id.");
  } else {
    this.teamId = param1.readByte();
    if (this.teamId < 0) {
      throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightNewWaveMessage.teamId.");
    } else {
      this.nbTurnBeforeNextWave = param1.readShort();
      return;
    }
  }
};

GameFightNewWaveMessage.prototype.getMessageId = function() {
  return 6490;
};

GameFightNewWaveMessage.prototype.getClassName = function() {
  return 'GameFightNewWaveMessage';
};

module.exports.id = 6490;
module.exports.class = GameFightNewWaveMessage;
module.exports.getInstance = function() {
  return new GameFightNewWaveMessage();
};