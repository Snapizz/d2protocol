var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var QuestActiveInformations = require('../../../../../types/game/context/roleplay/quest/quest-active-informations.js').class;

var QuestStepInfoMessage = function() {
  this.infos = new QuestActiveInformations();
};

util.inherits(QuestStepInfoMessage, BaseMessage);

QuestStepInfoMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestStepInfoMessage(output);
};

QuestStepInfoMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestStepInfoMessage(input);
};

QuestStepInfoMessage.prototype.serializeAs_QuestStepInfoMessage = function(param1) {
  param1.writeShort(this.infos.getTypeId());
  this.infos.serialize(param1);
};

QuestStepInfoMessage.prototype.deserializeAs_QuestStepInfoMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.infos = ProtocolTypeManager.getInstance(QuestActiveInformations, _loc2_);
  this.infos.deserialize(param1);
};

QuestStepInfoMessage.prototype.getMessageId = function() {
  return 5625;
};

QuestStepInfoMessage.prototype.getClassName = function() {
  return 'QuestStepInfoMessage';
};

module.exports.id = 5625;
module.exports.class = QuestStepInfoMessage;
module.exports.getInstance = function() {
  return new QuestStepInfoMessage();
};