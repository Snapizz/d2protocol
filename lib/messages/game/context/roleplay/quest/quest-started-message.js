var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestStartedMessage = function() {
  this.questId = 0;
};

util.inherits(QuestStartedMessage, BaseMessage);

QuestStartedMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestStartedMessage(output);
};

QuestStartedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestStartedMessage(input);
};

QuestStartedMessage.prototype.serializeAs_QuestStartedMessage = function(output) {
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element questId.");
  } else {
    param1.writeVarShort(this.questId);
    return;
  }
};

QuestStartedMessage.prototype.deserializeAs_QuestStartedMessage = function(input) {
  this.questId = param1.readVarUhShort();
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element of QuestStartedMessage.questId.");
  } else {
    return;
  }
};

QuestStartedMessage.prototype.getMessageId = function() {
  return 6091;
};

QuestStartedMessage.prototype.getClassName = function() {
  return 'QuestStartedMessage';
};

module.exports.id = 6091;
module.exports.class = QuestStartedMessage;