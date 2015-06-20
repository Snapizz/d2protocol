var d2com = require('d2com'),
  BaseMessage = require('./game-context-remove-multiple-elements-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextRemoveMultipleElementsWithEventsMessage = function() {
  this.elementEventIds = [];
};

util.inherits(GameContextRemoveMultipleElementsWithEventsMessage, BaseMessage);

GameContextRemoveMultipleElementsWithEventsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextRemoveMultipleElementsWithEventsMessage(output);
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(input);
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.serializeAs_GameContextRemoveMultipleElementsWithEventsMessage = function(output) {
  this.serializeAs_GameContextRemoveMultipleElementsMessage(output);
  output.writeShort(this.elementEventIds.length);
  var _i1 = 0;
  while (_i1 < this.elementEventIds.length) {
    if (this.elementEventIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.elementEventIds[_i1]) + ") on element 1 (starting at 1) of elementEventIds.")));
    };
    output.writeByte(this.elementEventIds[_i1]);
    _i1++;
  };
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _elementEventIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _elementEventIdsLen) {
    _val1 = input.readByte();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of elementEventIds.")));
    };
    this.elementEventIds.push(_val1);
    _i1++;
  };
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.getMessageId = function() {
  return 6416;
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.getClassName = function() {
  return 'GameContextRemoveMultipleElementsWithEventsMessage';
};

module.exports.id = 6416;
module.exports.class = GameContextRemoveMultipleElementsWithEventsMessage;