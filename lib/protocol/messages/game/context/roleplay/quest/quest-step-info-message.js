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
var QuestStepInfoMessage = (function (_super) {
    __extends(QuestStepInfoMessage, _super);
    function QuestStepInfoMessage() {
        this.infos = new QuestActiveInformations();
        _super.call(this);
    }
    QuestStepInfoMessage.prototype.getMessageId = function () {
        return QuestStepInfoMessage.ID;
    };
    QuestStepInfoMessage.prototype.reset = function () {
        this.infos = new QuestActiveInformations();
    };
    QuestStepInfoMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestStepInfoMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestStepInfoMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestStepInfoMessage(param1);
    };
    QuestStepInfoMessage.prototype.serializeAs_QuestStepInfoMessage = function (param1) {
        param1.writeShort(this.infos.getTypeId());
        this.infos.serialize(param1);
    };
    QuestStepInfoMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestStepInfoMessage(param1);
    };
    QuestStepInfoMessage.prototype.deserializeAs_QuestStepInfoMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.infos = ProtocolTypeManager.getInstance(QuestActiveInformations, _loc2_);
        this.infos.deserialize(param1);
    };
    QuestStepInfoMessage.ID = 5625;
    return QuestStepInfoMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestStepInfoMessage;
