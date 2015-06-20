var d2com = require('d2com'),
  BaseMessage = require('./quest-list-request-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var QuestListRequestMessage = function() {

};

util.inherits(QuestListRequestMessage, BaseMessage);

QuestListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestListRequestMessage(output);
};

QuestListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestListRequestMessage(input);
};

QuestListRequestMessage.prototype.serializeAs_QuestListRequestMessage = function(param1) {

};

QuestListRequestMessage.prototype.deserializeAs_QuestListRequestMessage = function(param1) {

};

QuestListRequestMessage.prototype.getMessageId = function() {
  return 5623;
};

QuestListRequestMessage.prototype.getClassName = function() {
  return 'QuestListRequestMessage';
};

module.exports.id = 5623;
module.exports.class = QuestListRequestMessage;
module.exports.getInstance = function() {
  return new QuestListRequestMessage();
};