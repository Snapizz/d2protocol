var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var SpouseGetInformationsMessage = function() {

};

util.inherits(SpouseGetInformationsMessage, BaseMessage);

SpouseGetInformationsMessage.prototype.serialize = function(output) {
  this.serializeAs_SpouseGetInformationsMessage(output);
};

SpouseGetInformationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpouseGetInformationsMessage(input);
};

SpouseGetInformationsMessage.prototype.serializeAs_SpouseGetInformationsMessage = function(param1) {

};

SpouseGetInformationsMessage.prototype.deserializeAs_SpouseGetInformationsMessage = function(param1) {

};

SpouseGetInformationsMessage.prototype.getMessageId = function() {
  return 6355;
};

SpouseGetInformationsMessage.prototype.getClassName = function() {
  return 'SpouseGetInformationsMessage';
};

module.exports.id = 6355;
module.exports.class = SpouseGetInformationsMessage;