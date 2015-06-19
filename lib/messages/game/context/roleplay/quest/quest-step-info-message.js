var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestStepInfoMessage = function() {
  this.infos;
};

util.inherits(QuestStepInfoMessage, BaseMessage);

QuestStepInfoMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestStepInfoMessage(output);
};

QuestStepInfoMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestStepInfoMessage(input);
};

QuestStepInfoMessage.prototype.serializeAs_QuestStepInfoMessage = function(output) {
  output.writeShort(this.infos.getTypeId());
  this.infos.serialize(output);
};

QuestStepInfoMessage.prototype.deserializeAs_QuestStepInfoMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.infos = ProtocolTypeManager.getInstance(QuestActiveInformations, _id1);
  this.infos.deserialize(input);
};

QuestStepInfoMessage.prototype.getMessageId = function() {
  return 5625;
};

QuestStepInfoMessage.prototype.getClassName = function() {
  return 'QuestStepInfoMessage';
};

module.exports.id = 5625;
module.exports.class = QuestStepInfoMessage;