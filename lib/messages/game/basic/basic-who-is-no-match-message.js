var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var BasicWhoIsNoMatchMessage = function() {
  this.search = "";
};

util.inherits(BasicWhoIsNoMatchMessage, BaseMessage);

BasicWhoIsNoMatchMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicWhoIsNoMatchMessage(output);
};

BasicWhoIsNoMatchMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicWhoIsNoMatchMessage(input);
};

BasicWhoIsNoMatchMessage.prototype.serializeAs_BasicWhoIsNoMatchMessage = function(param1) {
  param1.writeUTF(this.search);
};

BasicWhoIsNoMatchMessage.prototype.deserializeAs_BasicWhoIsNoMatchMessage = function(param1) {
  this.search = param1.readUTF();
};

BasicWhoIsNoMatchMessage.prototype.getMessageId = function() {
  return 179;
};

BasicWhoIsNoMatchMessage.prototype.getClassName = function() {
  return 'BasicWhoIsNoMatchMessage';
};

module.exports.id = 179;
module.exports.class = BasicWhoIsNoMatchMessage;