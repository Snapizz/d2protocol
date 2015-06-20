var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseSellFromInsideRequestMessage = function() {

};

util.inherits(HouseSellFromInsideRequestMessage, BaseMessage);

HouseSellFromInsideRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseSellFromInsideRequestMessage(output);
};

HouseSellFromInsideRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseSellFromInsideRequestMessage(input);
};

HouseSellFromInsideRequestMessage.prototype.serializeAs_HouseSellFromInsideRequestMessage = function(output) {
  this.serializeAs_HouseSellRequestMessage(param1);
};

HouseSellFromInsideRequestMessage.prototype.deserializeAs_HouseSellFromInsideRequestMessage = function(input) {
  this.deserialize(param1);
};

HouseSellFromInsideRequestMessage.prototype.getMessageId = function() {
  return 5884;
};

HouseSellFromInsideRequestMessage.prototype.getClassName = function() {
  return 'HouseSellFromInsideRequestMessage';
};

module.exports.id = 5884;
module.exports.class = HouseSellFromInsideRequestMessage;