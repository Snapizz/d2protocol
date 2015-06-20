var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GoldAddedMessage = function() {
  this.gold;
};

util.inherits(GoldAddedMessage, BaseMessage);

GoldAddedMessage.prototype.serialize = function(output) {
  this.serializeAs_GoldAddedMessage(output);
};

GoldAddedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GoldAddedMessage(input);
};

GoldAddedMessage.prototype.serializeAs_GoldAddedMessage = function(param1) {
  this.gold.serializeAs_GoldItem(param1);
};

GoldAddedMessage.prototype.deserializeAs_GoldAddedMessage = function(param1) {
  this.gold = new GoldItem();
  this.gold.deserialize(param1);
};

GoldAddedMessage.prototype.getMessageId = function() {
  return 6030;
};

GoldAddedMessage.prototype.getClassName = function() {
  return 'GoldAddedMessage';
};

module.exports.id = 6030;
module.exports.class = GoldAddedMessage;