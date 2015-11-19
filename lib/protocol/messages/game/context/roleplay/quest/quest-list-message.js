/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestActiveInformations = require('../../../../../types/game/context/roleplay/quest/quest-active-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var QuestListMessage = (function (_super) {
    __extends(QuestListMessage, _super);
    function QuestListMessage() {
        this.finishedQuestsIds = [];
        this.finishedQuestsCounts = [];
        this.activeQuests = [];
        this.reinitDoneQuestsIds = [];
        _super.call(this);
    }
    QuestListMessage.prototype.getMessageId = function () {
        return QuestListMessage.ID;
    };
    QuestListMessage.prototype.reset = function () {
        this.finishedQuestsIds = [];
        this.finishedQuestsCounts = [];
        this.activeQuests = [];
        this.reinitDoneQuestsIds = [];
    };
    QuestListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestListMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestListMessage(param1);
    };
    QuestListMessage.prototype.serializeAs_QuestListMessage = function (param1) {
        param1.writeShort(this.finishedQuestsIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.finishedQuestsIds.length) {
            if (this.finishedQuestsIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.finishedQuestsIds[_loc2_] + ') on element 1 (starting at 1) of finishedQuestsIds.');
            }
            param1.writeVarShort(this.finishedQuestsIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.finishedQuestsCounts.length);
        var _loc3_ = 0;
        while (_loc3_ < this.finishedQuestsCounts.length) {
            if (this.finishedQuestsCounts[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.finishedQuestsCounts[_loc3_] + ') on element 2 (starting at 1) of finishedQuestsCounts.');
            }
            param1.writeVarShort(this.finishedQuestsCounts[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.activeQuests.length);
        var _loc4_ = 0;
        while (_loc4_ < this.activeQuests.length) {
            param1.writeShort((this.activeQuests[_loc4_]).getTypeId());
            (this.activeQuests[_loc4_]).serialize(param1);
            _loc4_++;
        }
        param1.writeShort(this.reinitDoneQuestsIds.length);
        var _loc5_ = 0;
        while (_loc5_ < this.reinitDoneQuestsIds.length) {
            if (this.reinitDoneQuestsIds[_loc5_] < 0) {
                throw new Error('Forbidden value (' + this.reinitDoneQuestsIds[_loc5_] + ') on element 4 (starting at 1) of reinitDoneQuestsIds.');
            }
            param1.writeVarShort(this.reinitDoneQuestsIds[_loc5_]);
            _loc5_++;
        }
    };
    QuestListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestListMessage(param1);
    };
    QuestListMessage.prototype.deserializeAs_QuestListMessage = function (param1) {
        var _loc10_ = 0;
        var _loc11_ = 0;
        var _loc12_ = 0;
        var _loc13_ = null;
        var _loc14_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc10_ = param1.readVarUhShort();
            if (_loc10_ < 0) {
                throw new Error('Forbidden value (' + _loc10_ + ') on elements of finishedQuestsIds.');
            }
            this.finishedQuestsIds.push(_loc10_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc11_ = param1.readVarUhShort();
            if (_loc11_ < 0) {
                throw new Error('Forbidden value (' + _loc11_ + ') on elements of finishedQuestsCounts.');
            }
            this.finishedQuestsCounts.push(_loc11_);
            _loc5_++;
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc12_ = param1.readUnsignedShort();
            _loc13_ = ProtocolTypeManager.getInstance(QuestActiveInformations, _loc12_);
            _loc13_.deserialize(param1);
            this.activeQuests.push(_loc13_);
            _loc7_++;
        }
        var _loc8_ = param1.readUnsignedShort();
        var _loc9_ = 0;
        while (_loc9_ < _loc8_) {
            _loc14_ = param1.readVarUhShort();
            if (_loc14_ < 0) {
                throw new Error('Forbidden value (' + _loc14_ + ') on elements of reinitDoneQuestsIds.');
            }
            this.reinitDoneQuestsIds.push(_loc14_);
            _loc9_++;
        }
    };
    QuestListMessage.ID = 5626;
    return QuestListMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestListMessage;
