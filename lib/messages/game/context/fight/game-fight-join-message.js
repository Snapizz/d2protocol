var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightJoinMessage = function() {
  this.canBeCancelled = false;
  this.canSayReady = false;
  this.isFightStarted = false;
  this.timeMaxBeforeFightStart = 0;
  this.fightType = 0;
};

util.inherits(GameFightJoinMessage, BaseMessage);

GameFightJoinMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightJoinMessage(output);
};

GameFightJoinMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightJoinMessage(input);
};

GameFightJoinMessage.prototype.serializeAs_GameFightJoinMessage = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.canBeCancelled);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.canSayReady);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.isFightStarted);
  output.writeByte(_box0);
  if (this.timeMaxBeforeFightStart < 0) {
    throw (new Error((("Forbidden value (" + this.timeMaxBeforeFightStart) + ") on element timeMaxBeforeFightStart.")));
  };
  output.writeInt(this.timeMaxBeforeFightStart);
  output.writeByte(this.fightType);
};

GameFightJoinMessage.prototype.deserializeAs_GameFightJoinMessage = function(input) {
  var _box0 = input.readByte();
  this.canBeCancelled = BooleanByteWrapper.getFlag(_box0, 0);
  this.canSayReady = BooleanByteWrapper.getFlag(_box0, 1);
  this.isFightStarted = BooleanByteWrapper.getFlag(_box0, 2);
  this.timeMaxBeforeFightStart = input.readInt();
  if (this.timeMaxBeforeFightStart < 0) {
    throw (new Error((("Forbidden value (" + this.timeMaxBeforeFightStart) + ") on element of GameFightJoinMessage.timeMaxBeforeFightStart.")));
  };
  this.fightType = input.readByte();
  if (this.fightType < 0) {
    throw (new Error((("Forbidden value (" + this.fightType) + ") on element of GameFightJoinMessage.fightType.")));
  };
};

GameFightJoinMessage.prototype.getMessageId = function() {
  return 702;
};

GameFightJoinMessage.prototype.getClassName = function() {
  return 'GameFightJoinMessage';
};

module.exports.id = 702;
module.exports.class = GameFightJoinMessage;