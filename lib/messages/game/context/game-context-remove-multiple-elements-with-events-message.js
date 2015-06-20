var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

GameContextRemoveMultipleElementsWithEventsMessage.prototype.serializeAs_GameContextRemoveMultipleElementsWithEventsMessage = function(param1) {
  this.serializeAs_GameContextRemoveMultipleElementsMessage(param1);
  param1.writeShort(this.elementEventIds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.elementEventIds.length) {
    if (this.elementEventIds[_loc2_] < 0) {
      throw new Error("Forbidden value (" + this.elementEventIds[_loc2_] + ") on element 1 (starting at 1) of elementEventIds.");
    } else {
      param1.writeByte(this.elementEventIds[_loc2_]);
      _loc2_++;
      continue;
    }
  }
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage = function(param1) {
  var _loc4_ = 0;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readByte();
    if (_loc4_ < 0) {
      throw new Error("Forbidden value (" + _loc4_ + ") on elements of elementEventIds.");
    } else {
      this.elementEventIds.push(_loc4_);
      _loc3_++;
      continue;
    }
  }
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.getMessageId = function() {
  return 6416;
};

GameContextRemoveMultipleElementsWithEventsMessage.prototype.getClassName = function() {
  return 'GameContextRemoveMultipleElementsWithEventsMessage';
};

module.exports.id = 6416;
module.exports.class = GameContextRemoveMultipleElementsWithEventsMessage;
module.exports.getInstance = function() {
  return new GameContextRemoveMultipleElementsWithEventsMessage();
};