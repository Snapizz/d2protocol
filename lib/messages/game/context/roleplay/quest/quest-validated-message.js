var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestValidatedMessage = function() {
  this.questId = 0;
};

util.inherits(QuestValidatedMessage, BaseMessage);

QuestValidatedMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestValidatedMessage(output);
};

QuestValidatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestValidatedMessage(input);
};

QuestValidatedMessage.prototype.serializeAs_QuestValidatedMessage = function(output) {
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element questId.")));
  };
  output.writeVarShort(this.questId);
};

QuestValidatedMessage.prototype.deserializeAs_QuestValidatedMessage = function(input) {
  this.questId = input.readVarUhShort();
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element of QuestValidatedMessage.questId.")));
  };
};

QuestValidatedMessage.prototype.getMessageId = function() {
  return 6097;
};

QuestValidatedMessage.prototype.getClassName = function() {
  return 'QuestValidatedMessage';
};

module.exports.id = 6097;
module.exports.class = QuestValidatedMessage;