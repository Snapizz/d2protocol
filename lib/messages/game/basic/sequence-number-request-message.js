var d2com = require('d2com'),
  BaseMessage = require('./sequence-number-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var SequenceNumberRequestMessage = function() {

};

util.inherits(SequenceNumberRequestMessage, BaseMessage);

SequenceNumberRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_SequenceNumberRequestMessage(output);
};

SequenceNumberRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SequenceNumberRequestMessage(input);
};

SequenceNumberRequestMessage.prototype.serializeAs_SequenceNumberRequestMessage = function(param1) {

};

SequenceNumberRequestMessage.prototype.deserializeAs_SequenceNumberRequestMessage = function(param1) {

};

SequenceNumberRequestMessage.prototype.getMessageId = function() {
  return 6316;
};

SequenceNumberRequestMessage.prototype.getClassName = function() {
  return 'SequenceNumberRequestMessage';
};

module.exports.id = 6316;
module.exports.class = SequenceNumberRequestMessage;
module.exports.getInstance = function() {
  return new SequenceNumberRequestMessage();
};