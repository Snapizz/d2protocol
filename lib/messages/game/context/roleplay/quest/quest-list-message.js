var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestListMessage = function() {
  this.finishedQuestsIds = [];
  this.finishedQuestsCounts = [];
  this.activeQuests = [];
};

util.inherits(QuestListMessage, BaseMessage);

QuestListMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestListMessage(output);
};

QuestListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestListMessage(input);
};

QuestListMessage.prototype.serializeAs_QuestListMessage = function(output) {
  output.writeShort(this.finishedQuestsIds.length);
  var _i1;
  while (_i1 < this.finishedQuestsIds.length) {
    if (this.finishedQuestsIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.finishedQuestsIds[_i1]) + ") on element 1 (starting at 1) of finishedQuestsIds.")));
    };
    output.writeVarShort(this.finishedQuestsIds[_i1]);
    _i1++;
  };
  output.writeShort(this.finishedQuestsCounts.length);
  var _i2;
  while (_i2 < this.finishedQuestsCounts.length) {
    if (this.finishedQuestsCounts[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.finishedQuestsCounts[_i2]) + ") on element 2 (starting at 1) of finishedQuestsCounts.")));
    };
    output.writeVarShort(this.finishedQuestsCounts[_i2]);
    _i2++;
  };
  output.writeShort(this.activeQuests.length);
  var _i3;
  while (_i3 < this.activeQuests.length) {
    output.writeShort((this.activeQuests[_i3]).getTypeId());
    (this.activeQuests[_i3]).serialize(output);
    _i3++;
  };
};

QuestListMessage.prototype.deserializeAs_QuestListMessage = function(input) {
  var _val1;
  var _val2;
  var _id3;
  var _item3;
  var _finishedQuestsIdsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _finishedQuestsIdsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of finishedQuestsIds.")));
    };
    this.finishedQuestsIds.push(_val1);
    _i1++;
  };
  var _finishedQuestsCountsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _finishedQuestsCountsLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of finishedQuestsCounts.")));
    };
    this.finishedQuestsCounts.push(_val2);
    _i2++;
  };
  var _activeQuestsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _activeQuestsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(QuestActiveInformations, _id3);
    _item3.deserialize(input);
    this.activeQuests.push(_item3);
    _i3++;
  };
};

QuestListMessage.prototype.getMessageId = function() {
  return 5626;
};

QuestListMessage.prototype.getClassName = function() {
  return 'QuestListMessage';
};

module.exports.id = 5626;
module.exports.class = QuestListMessage;