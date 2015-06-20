var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var IgnoredGetListMessage = function() {

};

util.inherits(IgnoredGetListMessage, BaseMessage);

IgnoredGetListMessage.prototype.serialize = function(output) {
  this.serializeAs_IgnoredGetListMessage(output);
};

IgnoredGetListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IgnoredGetListMessage(input);
};

IgnoredGetListMessage.prototype.serializeAs_IgnoredGetListMessage = function(param1) {

};

IgnoredGetListMessage.prototype.deserializeAs_IgnoredGetListMessage = function(param1) {

};

IgnoredGetListMessage.prototype.getMessageId = function() {
  return 5676;
};

IgnoredGetListMessage.prototype.getClassName = function() {
  return 'IgnoredGetListMessage';
};

module.exports.id = 5676;
module.exports.class = IgnoredGetListMessage;