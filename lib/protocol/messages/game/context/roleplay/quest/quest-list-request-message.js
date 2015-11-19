/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestListRequestMessage = (function (_super) {
    __extends(QuestListRequestMessage, _super);
    function QuestListRequestMessage() {
        _super.call(this);
    }
    QuestListRequestMessage.prototype.getMessageId = function () {
        return QuestListRequestMessage.ID;
    };
    QuestListRequestMessage.prototype.reset = function () {
    };
    QuestListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestListRequestMessage(param1);
    };
    QuestListRequestMessage.prototype.serializeAs_QuestListRequestMessage = function (param1) {
    };
    QuestListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestListRequestMessage(param1);
    };
    QuestListRequestMessage.prototype.deserializeAs_QuestListRequestMessage = function (param1) {
    };
    QuestListRequestMessage.ID = 5623;
    return QuestListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestListRequestMessage;
