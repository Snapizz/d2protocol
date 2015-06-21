var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var QuestActiveInformations = require('../../../../../types/game/context/roleplay/quest/quest-active-informations.js').QuestActiveInformations;

var QuestListMessage = function() {
    this.finishedQuestsIds = [];
    this.finishedQuestsCounts = [];
    this.activeQuests = [];
};

require('util').inherits(QuestListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new QuestListMessage();
};

QuestListMessage.prototype.serialize = function(output) {
    this.serializeAs_QuestListMessage(output);
};

QuestListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QuestListMessage(input);
};

QuestListMessage.prototype.serializeAs_QuestListMessage = function(param1) {
    param1.writeShort(this.finishedQuestsIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.finishedQuestsIds.length) {
        if (this.finishedQuestsIds[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.finishedQuestsIds[_loc2_] + ") on element 1 (starting at 1) of finishedQuestsIds.");
        } else {
            param1.writeVarShort(this.finishedQuestsIds[_loc2_]);
            _loc2_++;
            continue;
        }
    }
    param1.writeShort(this.finishedQuestsCounts.length);
    var _loc3_ = 0;
    while (_loc3_ < this.finishedQuestsCounts.length) {
        if (this.finishedQuestsCounts[_loc3_] < 0) {
            throw new Error("Forbidden value (" + this.finishedQuestsCounts[_loc3_] + ") on element 2 (starting at 1) of finishedQuestsCounts.");
        } else {
            param1.writeVarShort(this.finishedQuestsCounts[_loc3_]);
            _loc3_++;
            continue;
        }
    }
    param1.writeShort(this.activeQuests.length);
    var _loc4_ = 0;
    while (_loc4_ < this.activeQuests.length) {
        param1.writeShort((this.activeQuests[_loc4_]).getTypeId());
        (this.activeQuests[_loc4_]).serialize(param1);
        _loc4_++;
    }
};

QuestListMessage.prototype.deserializeAs_QuestListMessage = function(param1) {
    var _loc8_ = 0;
    var _loc9_ = 0;
    var _loc10_ = 0;
    var _loc11_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc8_ = param1.readVarUhShort();
        if (_loc8_ < 0) {
            throw new Error("Forbidden value (" + _loc8_ + ") on elements of finishedQuestsIds.");
        } else {
            this.finishedQuestsIds.push(_loc8_);
            _loc3_++;
            continue;
        }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
        _loc9_ = param1.readVarUhShort();
        if (_loc9_ < 0) {
            throw new Error("Forbidden value (" + _loc9_ + ") on elements of finishedQuestsCounts.");
        } else {
            this.finishedQuestsCounts.push(_loc9_);
            _loc5_++;
            continue;
        }
    }
    var _loc6_ = param1.readUnsignedShort();
    var _loc7_ = 0;
    while (_loc7_ < _loc6_) {
        _loc10_ = param1.readUnsignedShort();
        _loc11_ = ProtocolTypeManager.getInstance(QuestActiveInformations, _loc10_);
        _loc11_.deserialize(param1);
        this.activeQuests.push(_loc11_);
        _loc7_++;
    }
};

QuestListMessage.prototype.getMessageId = function() {
    return 5626;
};

QuestListMessage.prototype.getClassName = function() {
    return 'QuestListMessage';
};

module.exports.id = 5626;
module.exports.QuestListMessage = QuestListMessage;