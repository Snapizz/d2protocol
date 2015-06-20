var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ItemNoMoreAvailableMessage = function() {

};

util.inherits(ItemNoMoreAvailableMessage, BaseMessage);

ItemNoMoreAvailableMessage.prototype.serialize = function(output) {
  this.serializeAs_ItemNoMoreAvailableMessage(output);
};

ItemNoMoreAvailableMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ItemNoMoreAvailableMessage(input);
};

ItemNoMoreAvailableMessage.prototype.serializeAs_ItemNoMoreAvailableMessage = function(param1) {

};

ItemNoMoreAvailableMessage.prototype.deserializeAs_ItemNoMoreAvailableMessage = function(param1) {

};

ItemNoMoreAvailableMessage.prototype.getMessageId = function() {
  return 5769;
};

ItemNoMoreAvailableMessage.prototype.getClassName = function() {
  return 'ItemNoMoreAvailableMessage';
};

module.exports.id = 5769;
module.exports.class = ItemNoMoreAvailableMessage;