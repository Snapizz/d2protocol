var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var AllianceInsiderInfoRequestMessage = function() {

};

util.inherits(AllianceInsiderInfoRequestMessage, BaseMessage);

AllianceInsiderInfoRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceInsiderInfoRequestMessage(output);
};

AllianceInsiderInfoRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceInsiderInfoRequestMessage(input);
};

AllianceInsiderInfoRequestMessage.prototype.serializeAs_AllianceInsiderInfoRequestMessage = function(param1) {

};

AllianceInsiderInfoRequestMessage.prototype.deserializeAs_AllianceInsiderInfoRequestMessage = function(param1) {

};

AllianceInsiderInfoRequestMessage.prototype.getMessageId = function() {
  return 6417;
};

AllianceInsiderInfoRequestMessage.prototype.getClassName = function() {
  return 'AllianceInsiderInfoRequestMessage';
};

module.exports.id = 6417;
module.exports.class = AllianceInsiderInfoRequestMessage;