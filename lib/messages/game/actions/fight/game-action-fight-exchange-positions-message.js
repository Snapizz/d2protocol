var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightExchangePositionsMessage = function() {
  this.targetId = 0;
  this.casterCellId = 0;
  this.targetCellId = 0;
};

util.inherits(GameActionFightExchangePositionsMessage, BaseMessage);

GameActionFightExchangePositionsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightExchangePositionsMessage(output);
};

GameActionFightExchangePositionsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightExchangePositionsMessage(input);
};

GameActionFightExchangePositionsMessage.prototype.serializeAs_GameActionFightExchangePositionsMessage = function(output) {
  super.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
  if (this.casterCellId < -1 || this.casterCellId > 559) {
    throw new Error("Forbidden value (" + this.casterCellId + ") on element casterCellId.");
  } else {
    param1.writeShort(this.casterCellId);
    if (this.targetCellId < -1 || this.targetCellId > 559) {
      throw new Error("Forbidden value (" + this.targetCellId + ") on element targetCellId.");
    } else {
      param1.writeShort(this.targetCellId);
      return;
    }
  }
};

GameActionFightExchangePositionsMessage.prototype.deserializeAs_GameActionFightExchangePositionsMessage = function(input) {
  super.deserialize(param1);
  this.targetId = param1.readInt();
  this.casterCellId = param1.readShort();
  if (this.casterCellId < -1 || this.casterCellId > 559) {
    throw new Error("Forbidden value (" + this.casterCellId + ") on element of GameActionFightExchangePositionsMessage.casterCellId.");
  } else {
    this.targetCellId = param1.readShort();
    if (this.targetCellId < -1 || this.targetCellId > 559) {
      throw new Error("Forbidden value (" + this.targetCellId + ") on element of GameActionFightExchangePositionsMessage.targetCellId.");
    } else {
      return;
    }
  }
};

GameActionFightExchangePositionsMessage.prototype.getMessageId = function() {
  return 5527;
};

GameActionFightExchangePositionsMessage.prototype.getClassName = function() {
  return 'GameActionFightExchangePositionsMessage';
};

module.exports.id = 5527;
module.exports.class = GameActionFightExchangePositionsMessage;