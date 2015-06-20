var d2com = require('d2com'),
  BaseMessage = require('./alliance-left-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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
module.exports.getInstance = function() {
  return new AllianceLeftMessage();
};