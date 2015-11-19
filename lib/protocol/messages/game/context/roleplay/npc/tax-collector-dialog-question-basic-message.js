/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicGuildInformations = require('../../../../../types/game/context/roleplay/basic-guild-informations');
var TaxCollectorDialogQuestionBasicMessage = (function (_super) {
    __extends(TaxCollectorDialogQuestionBasicMessage, _super);
    function TaxCollectorDialogQuestionBasicMessage() {
        this.guildInfo = new BasicGuildInformations();
        _super.call(this);
    }
    TaxCollectorDialogQuestionBasicMessage.prototype.getMessageId = function () {
        return TaxCollectorDialogQuestionBasicMessage.ID;
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.reset = function () {
        this.guildInfo = new BasicGuildInformations();
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorDialogQuestionBasicMessage(param1);
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.serializeAs_TaxCollectorDialogQuestionBasicMessage = function (param1) {
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorDialogQuestionBasicMessage(param1);
    };
    TaxCollectorDialogQuestionBasicMessage.prototype.deserializeAs_TaxCollectorDialogQuestionBasicMessage = function (param1) {
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
    };
    TaxCollectorDialogQuestionBasicMessage.ID = 5619;
    return TaxCollectorDialogQuestionBasicMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorDialogQuestionBasicMessage;
