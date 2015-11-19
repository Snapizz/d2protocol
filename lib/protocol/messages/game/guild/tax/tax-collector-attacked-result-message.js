/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorBasicInformations = require('../../../../types/game/guild/tax/tax-collector-basic-informations');
var BasicGuildInformations = require('../../../../types/game/context/roleplay/basic-guild-informations');
var TaxCollectorAttackedResultMessage = (function (_super) {
    __extends(TaxCollectorAttackedResultMessage, _super);
    function TaxCollectorAttackedResultMessage() {
        this.deadOrAlive = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.guild = new BasicGuildInformations();
        _super.call(this);
    }
    TaxCollectorAttackedResultMessage.prototype.getMessageId = function () {
        return TaxCollectorAttackedResultMessage.ID;
    };
    TaxCollectorAttackedResultMessage.prototype.reset = function () {
        this.deadOrAlive = false;
        this.basicInfos = new TaxCollectorBasicInformations();
        this.guild = new BasicGuildInformations();
    };
    TaxCollectorAttackedResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorAttackedResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorAttackedResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorAttackedResultMessage(param1);
    };
    TaxCollectorAttackedResultMessage.prototype.serializeAs_TaxCollectorAttackedResultMessage = function (param1) {
        param1.writeBoolean(this.deadOrAlive);
        this.basicInfos.serializeAs_TaxCollectorBasicInformations(param1);
        this.guild.serializeAs_BasicGuildInformations(param1);
    };
    TaxCollectorAttackedResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorAttackedResultMessage(param1);
    };
    TaxCollectorAttackedResultMessage.prototype.deserializeAs_TaxCollectorAttackedResultMessage = function (param1) {
        this.deadOrAlive = param1.readBoolean();
        this.basicInfos = new TaxCollectorBasicInformations();
        this.basicInfos.deserialize(param1);
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);
    };
    TaxCollectorAttackedResultMessage.ID = 5635;
    return TaxCollectorAttackedResultMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorAttackedResultMessage;
