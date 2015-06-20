var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ObjectAveragePricesErrorMessage = function() {

};

util.inherits(ObjectAveragePricesErrorMessage, BaseMessage);

ObjectAveragePricesErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectAveragePricesErrorMessage(output);
};

ObjectAveragePricesErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectAveragePricesErrorMessage(input);
};

ObjectAveragePricesErrorMessage.prototype.serializeAs_ObjectAveragePricesErrorMessage = function(param1) {

};

ObjectAveragePricesErrorMessage.prototype.deserializeAs_ObjectAveragePricesErrorMessage = function(param1) {

};

ObjectAveragePricesErrorMessage.prototype.getMessageId = function() {
  return 6336;
};

ObjectAveragePricesErrorMessage.prototype.getClassName = function() {
  return 'ObjectAveragePricesErrorMessage';
};

module.exports.id = 6336;
module.exports.class = ObjectAveragePricesErrorMessage;
module.exports.getInstance = function() {
  return new ObjectAveragePricesErrorMessage();
};