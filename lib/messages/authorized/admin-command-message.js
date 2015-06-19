var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AdminCommandMessage = function() {
  this.content = "";
};

util.inherits(AdminCommandMessage, BaseMessage);

AdminCommandMessage.prototype.serialize = function(output) {
  this.serializeAs_AdminCommandMessage(output);
};

AdminCommandMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AdminCommandMessage(input);
};

AdminCommandMessage.prototype.serializeAs_AdminCommandMessage = function(output) {
  output.writeUTF(this.content);
};

AdminCommandMessage.prototype.deserializeAs_AdminCommandMessage = function(input) {
  this.content = input.readUTF();
};

AdminCommandMessage.prototype.getMessageId = function() {
  return 76;
};

AdminCommandMessage.prototype.getClassName = function() {
  return 'AdminCommandMessage';
};

module.exports.id = 76;
module.exports.class = AdminCommandMessage;