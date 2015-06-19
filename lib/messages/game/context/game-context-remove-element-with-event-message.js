var d2com = require('d2com'),
  BaseMessage = require('./game-context-remove-element-message.js').class,
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

GameContextRemoveElementWithEventMessage.prototype.serializeAs_GameContextRemoveElementWithEventMessage = function(output) {
  this.serializeAs_GameContextRemoveElementMessage(output);
  if (this.elementEventId < 0) {
    throw (new Error((("Forbidden value (" + this.elementEventId) + ") on element elementEventId.")));
  };
  output.writeByte(this.elementEventId);
};

GameContextRemoveElementWithEventMessage.prototype.deserializeAs_GameContextRemoveElementWithEventMessage = function(input) {
  this.deserialize(input);
  this.elementEventId = input.readByte();
  if (this.elementEventId < 0) {
    throw (new Error((("Forbidden value (" + this.elementEventId) + ") on element of GameContextRemoveElementWithEventMessage.elementEventId.")));
  };
};

GameContextRemoveElementWithEventMessage.prototype.getMessageId = function() {
  return 6412;
};

GameContextRemoveElementWithEventMessage.prototype.getClassName = function() {
  return 'GameContextRemoveElementWithEventMessage';
};

module.exports.id = 6412;
module.exports.class = GameContextRemoveElementWithEventMessage;