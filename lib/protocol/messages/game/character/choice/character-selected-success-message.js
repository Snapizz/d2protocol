/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations');
var CharacterSelectedSuccessMessage = (function (_super) {
    __extends(CharacterSelectedSuccessMessage, _super);
    function CharacterSelectedSuccessMessage() {
        this.infos = new CharacterBaseInformations();
        this.isCollectingStats = false;
        _super.call(this);
    }
    CharacterSelectedSuccessMessage.prototype.getMessageId = function () {
        return CharacterSelectedSuccessMessage.ID;
    };
    CharacterSelectedSuccessMessage.prototype.reset = function () {
        this.infos = new CharacterBaseInformations();
        this.isCollectingStats = false;
    };
    CharacterSelectedSuccessMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterSelectedSuccessMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterSelectedSuccessMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterSelectedSuccessMessage(param1);
    };
    CharacterSelectedSuccessMessage.prototype.serializeAs_CharacterSelectedSuccessMessage = function (param1) {
        this.infos.serializeAs_CharacterBaseInformations(param1);
        param1.writeBoolean(this.isCollectingStats);
    };
    CharacterSelectedSuccessMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterSelectedSuccessMessage(param1);
    };
    CharacterSelectedSuccessMessage.prototype.deserializeAs_CharacterSelectedSuccessMessage = function (param1) {
        this.infos = new CharacterBaseInformations();
        this.infos.deserialize(param1);
        this.isCollectingStats = param1.readBoolean();
    };
    CharacterSelectedSuccessMessage.ID = 153;
    return CharacterSelectedSuccessMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterSelectedSuccessMessage;
