var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
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
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.casterCellId < -1)) || ((this.casterCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.casterCellId) + ") on element casterCellId.")));
  };
  output.writeShort(this.casterCellId);
  if ((((this.targetCellId < -1)) || ((this.targetCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.targetCellId) + ") on element targetCellId.")));
  };
  output.writeShort(this.targetCellId);
};

GameActionFightExchangePositionsMessage.prototype.deserializeAs_GameActionFightExchangePositionsMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.casterCellId = input.readShort();
  if ((((this.casterCellId < -1)) || ((this.casterCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.casterCellId) + ") on element of GameActionFightExchangePositionsMessage.casterCellId.")));
  };
  this.targetCellId = input.readShort();
  if ((((this.targetCellId < -1)) || ((this.targetCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.targetCellId) + ") on element of GameActionFightExchangePositionsMessage.targetCellId.")));
  };
};

GameActionFightExchangePositionsMessage.prototype.getMessageId = function() {
  return 5527;
};

GameActionFightExchangePositionsMessage.prototype.getClassName = function() {
  return 'GameActionFightExchangePositionsMessage';
};

module.exports.id = 5527;
module.exports.class = GameActionFightExchangePositionsMessage;