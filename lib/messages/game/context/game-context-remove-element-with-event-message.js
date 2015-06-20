var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameContextRemoveElementWithEventMessage = function() {
  this.elementEventId = 0;
};

util.inherits(GameContextRemoveElementWithEventMessage, BaseMessage);

GameContextRemoveElementWithEventMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextRemoveElementWithEventMessage(output);
};

GameContextRemoveElementWithEventMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextRemoveElementWithEventMessage(input);
};

GameContextRemoveElementWithEventMessage.prototype.serializeAs_GameContextRemoveElementWithEventMessage = function(param1) {
  this.serializeAs_GameContextRemoveElementMessage(param1);
  if (this.elementEventId < 0) {
    throw new Error("Forbidden value (" + this.elementEventId + ") on element elementEventId.");
  } else {
    param1.writeByte(this.elementEventId);
    return;
  }
};

GameContextRemoveElementWithEventMessage.prototype.deserializeAs_GameContextRemoveElementWithEventMessage = function(param1) {
  this.deserialize(param1);
  this.elementEventId = param1.readByte();
  if (this.elementEventId < 0) {
    throw new Error("Forbidden value (" + this.elementEventId + ") on element of GameContextRemoveElementWithEventMessage.elementEventId.");
  } else {
    return;
  }
};

GameContextRemoveElementWithEventMessage.prototype.getMessageId = function() {
  return 6412;
};

GameContextRemoveElementWithEventMessage.prototype.getClassName = function() {
  return 'GameContextRemoveElementWithEventMessage';
};

module.exports.id = 6412;
module.exports.class = GameContextRemoveElementWithEventMessage;
module.exports.getInstance = function() {
  return new GameContextRemoveElementWithEventMessage();
};