var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightSlideMessage = function() {
  this.targetId = 0;
  this.startCellId = 0;
  this.endCellId = 0;
};

util.inherits(GameActionFightSlideMessage, BaseMessage);

GameActionFightSlideMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightSlideMessage(output);
};

GameActionFightSlideMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightSlideMessage(input);
};

GameActionFightSlideMessage.prototype.serializeAs_GameActionFightSlideMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
  if ((((this.startCellId < -1)) || ((this.startCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.startCellId) + ") on element startCellId.")));
  };
  output.writeShort(this.startCellId);
  if ((((this.endCellId < -1)) || ((this.endCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.endCellId) + ") on element endCellId.")));
  };
  output.writeShort(this.endCellId);
};

GameActionFightSlideMessage.prototype.deserializeAs_GameActionFightSlideMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
  this.startCellId = input.readShort();
  if ((((this.startCellId < -1)) || ((this.startCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.startCellId) + ") on element of GameActionFightSlideMessage.startCellId.")));
  };
  this.endCellId = input.readShort();
  if ((((this.endCellId < -1)) || ((this.endCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.endCellId) + ") on element of GameActionFightSlideMessage.endCellId.")));
  };
};

GameActionFightSlideMessage.prototype.getMessageId = function() {
  return 5525;
};

GameActionFightSlideMessage.prototype.getClassName = function() {
  return 'GameActionFightSlideMessage';
};

module.exports.id = 5525;
module.exports.class = GameActionFightSlideMessage;