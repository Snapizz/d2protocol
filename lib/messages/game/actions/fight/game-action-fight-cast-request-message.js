var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameActionFightCastRequestMessage = function() {
  this.spellId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightCastRequestMessage, BaseMessage);

GameActionFightCastRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightCastRequestMessage(output);
};

GameActionFightCastRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightCastRequestMessage(input);
};

GameActionFightCastRequestMessage.prototype.serializeAs_GameActionFightCastRequestMessage = function(param1) {
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeVarShort(this.spellId);
    if (this.cellId < -1 || this.cellId > 559) {
      throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
      param1.writeShort(this.cellId);
      return;
    }
  }
};

GameActionFightCastRequestMessage.prototype.deserializeAs_GameActionFightCastRequestMessage = function(param1) {
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of GameActionFightCastRequestMessage.spellId.");
  } else {
    this.cellId = param1.readShort();
    if (this.cellId < -1 || this.cellId > 559) {
      throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionFightCastRequestMessage.cellId.");
    } else {
      return;
    }
  }
};

GameActionFightCastRequestMessage.prototype.getMessageId = function() {
  return 1005;
};

GameActionFightCastRequestMessage.prototype.getClassName = function() {
  return 'GameActionFightCastRequestMessage';
};

module.exports.id = 1005;
module.exports.class = GameActionFightCastRequestMessage;
module.exports.getInstance = function() {
  return new GameActionFightCastRequestMessage();
};