var d2com = require('d2com'),
  BaseMessage = require('./admin-command-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AdminQuietCommandMessage = function() {

};

util.inherits(AdminQuietCommandMessage, BaseMessage);

AdminQuietCommandMessage.prototype.serialize = function(output) {
  this.serializeAs_AdminQuietCommandMessage(output);
};

AdminQuietCommandMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AdminQuietCommandMessage(input);
};

AdminQuietCommandMessage.prototype.serializeAs_AdminQuietCommandMessage = function(output) {
  this.serializeAs_AdminCommandMessage(output);
};

AdminQuietCommandMessage.prototype.deserializeAs_AdminQuietCommandMessage = function(input) {
  this.deserialize(input);
};

AdminQuietCommandMessage.prototype.getMessageId = function() {
  return 5662;
};

AdminQuietCommandMessage.prototype.getClassName = function() {
  return 'AdminQuietCommandMessage';
};

module.exports.id = 5662;
module.exports.class = AdminQuietCommandMessage;