/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations');
var GameEntityDispositionMessage = (function (_super) {
    __extends(GameEntityDispositionMessage, _super);
    function GameEntityDispositionMessage() {
        this.disposition = new IdentifiedEntityDispositionInformations();
        _super.call(this);
    }
    GameEntityDispositionMessage.prototype.getMessageId = function () {
        return GameEntityDispositionMessage.ID;
    };
    GameEntityDispositionMessage.prototype.reset = function () {
        this.disposition = new IdentifiedEntityDispositionInformations();
    };
    GameEntityDispositionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameEntityDispositionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameEntityDispositionMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameEntityDispositionMessage(param1);
    };
    GameEntityDispositionMessage.prototype.serializeAs_GameEntityDispositionMessage = function (param1) {
        this.disposition.serializeAs_IdentifiedEntityDispositionInformations(param1);
    };
    GameEntityDispositionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameEntityDispositionMessage(param1);
    };
    GameEntityDispositionMessage.prototype.deserializeAs_GameEntityDispositionMessage = function (param1) {
        this.disposition = new IdentifiedEntityDispositionInformations();
        this.disposition.deserialize(param1);
    };
    GameEntityDispositionMessage.ID = 5693;
    return GameEntityDispositionMessage;
})(network_message_1.NetworkMessage);
module.exports = GameEntityDispositionMessage;
