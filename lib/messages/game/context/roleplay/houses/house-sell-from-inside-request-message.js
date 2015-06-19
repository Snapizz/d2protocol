var d2com = require('d2com'),
  BaseMessage = require('./house-sell-request-message.js').class,
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
  this.serializeAs_HouseSellRequestMessage(output);
};

HouseSellFromInsideRequestMessage.prototype.deserializeAs_HouseSellFromInsideRequestMessage = function(input) {
  this.deserialize(input);
};

HouseSellFromInsideRequestMessage.prototype.getMessageId = function() {
  return 5884;
};

HouseSellFromInsideRequestMessage.prototype.getClassName = function() {
  return 'HouseSellFromInsideRequestMessage';
};

module.exports.id = 5884;
module.exports.class = HouseSellFromInsideRequestMessage;