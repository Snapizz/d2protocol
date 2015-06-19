var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestStartRequestMessage = function() {
  this.questId = 0;
};

util.inherits(QuestStartRequestMessage, BaseMessage);

QuestStartRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestStartRequestMessage(output);
};

QuestStartRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestStartRequestMessage(input);
};

QuestStartRequestMessage.prototype.serializeAs_QuestStartRequestMessage = function(output) {
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element questId.")));
  };
  output.writeVarShort(this.questId);
};

QuestStartRequestMessage.prototype.deserializeAs_QuestStartRequestMessage = function(input) {
  this.questId = input.readVarUhShort();
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element of QuestStartRequestMessage.questId.")));
  };
};

QuestStartRequestMessage.prototype.getMessageId = function() {
  return 5643;
};

QuestStartRequestMessage.prototype.getClassName = function() {
  return 'QuestStartRequestMessage';
};

module.exports.id = 5643;
module.exports.class = QuestStartRequestMessage;