var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameFightNewWaveMessage.prototype.serializeAs_GameFightNewWaveMessage = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeByte(this.id);
  output.writeByte(this.teamId);
  output.writeShort(this.nbTurnBeforeNextWave);
};

GameFightNewWaveMessage.prototype.deserializeAs_GameFightNewWaveMessage = function(input) {
  this.id = input.readByte();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of GameFightNewWaveMessage.id.")));
  };
  this.teamId = input.readByte();
  if (this.teamId < 0) {
    throw (new Error((("Forbidden value (" + this.teamId) + ") on element of GameFightNewWaveMessage.teamId.")));
  };
  this.nbTurnBeforeNextWave = input.readShort();
};

GameFightNewWaveMessage.prototype.getMessageId = function() {
  return 6490;
};

GameFightNewWaveMessage.prototype.getClassName = function() {
  return 'GameFightNewWaveMessage';
};

module.exports.id = 6490;
module.exports.class = GameFightNewWaveMessage;