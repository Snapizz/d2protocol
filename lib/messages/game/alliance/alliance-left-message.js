var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceLeftMessage = function() {

};

util.inherits(AllianceLeftMessage, BaseMessage);

AllianceLeftMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceLeftMessage(output);
};

AllianceLeftMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceLeftMessage(input);
};

AllianceLeftMessage.prototype.serializeAs_AllianceLeftMessage = function(param1) {

};

AllianceLeftMessage.prototype.deserializeAs_AllianceLeftMessage = function(param1) {

};

AllianceLeftMessage.prototype.getMessageId = function() {
  return 6398;
};

AllianceLeftMessage.prototype.getClassName = function() {
  return 'AllianceLeftMessage';
};

module.exports.id = 6398;
module.exports.class = AllianceLeftMessage;