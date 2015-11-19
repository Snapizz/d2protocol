/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations');
var FighterStatsListMessage = (function (_super) {
    __extends(FighterStatsListMessage, _super);
    function FighterStatsListMessage() {
        this.stats = new CharacterCharacteristicsInformations();
        _super.call(this);
    }
    FighterStatsListMessage.prototype.getMessageId = function () {
        return FighterStatsListMessage.ID;
    };
    FighterStatsListMessage.prototype.reset = function () {
        this.stats = new CharacterCharacteristicsInformations();
    };
    FighterStatsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FighterStatsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FighterStatsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_FighterStatsListMessage(param1);
    };
    FighterStatsListMessage.prototype.serializeAs_FighterStatsListMessage = function (param1) {
        this.stats.serializeAs_CharacterCharacteristicsInformations(param1);
    };
    FighterStatsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FighterStatsListMessage(param1);
    };
    FighterStatsListMessage.prototype.deserializeAs_FighterStatsListMessage = function (param1) {
        this.stats = new CharacterCharacteristicsInformations();
        this.stats.deserialize(param1);
    };
    FighterStatsListMessage.ID = 6322;
    return FighterStatsListMessage;
})(network_message_1.NetworkMessage);
module.exports = FighterStatsListMessage;
