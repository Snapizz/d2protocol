var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PrismInfoCloseMessage = function() {

};

util.inherits(PrismInfoCloseMessage, BaseMessage);

PrismInfoCloseMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismInfoCloseMessage(output);
};

PrismInfoCloseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismInfoCloseMessage(input);
};

PrismInfoCloseMessage.prototype.serializeAs_PrismInfoCloseMessage = function(param1) {

};

PrismInfoCloseMessage.prototype.deserializeAs_PrismInfoCloseMessage = function(param1) {

};

PrismInfoCloseMessage.prototype.getMessageId = function() {
  return 5853;
};

PrismInfoCloseMessage.prototype.getClassName = function() {
  return 'PrismInfoCloseMessage';
};

module.exports.id = 5853;
module.exports.class = PrismInfoCloseMessage;
module.exports.getInstance = function() {
  return new PrismInfoCloseMessage();
};