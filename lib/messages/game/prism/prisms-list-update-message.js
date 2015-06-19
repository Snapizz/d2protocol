var d2com = require('d2com'),
  BaseMessage = require('./prisms-list-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismsListUpdateMessage = function() {

};

util.inherits(PrismsListUpdateMessage, BaseMessage);

PrismsListUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismsListUpdateMessage(output);
};

PrismsListUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismsListUpdateMessage(input);
};

PrismsListUpdateMessage.prototype.serializeAs_PrismsListUpdateMessage = function(output) {
  this.serializeAs_PrismsListMessage(output);
};

PrismsListUpdateMessage.prototype.deserializeAs_PrismsListUpdateMessage = function(input) {
  this.deserialize(input);
};

PrismsListUpdateMessage.prototype.getMessageId = function() {
  return 6438;
};

PrismsListUpdateMessage.prototype.getClassName = function() {
  return 'PrismsListUpdateMessage';
};

module.exports.id = 6438;
module.exports.class = PrismsListUpdateMessage;