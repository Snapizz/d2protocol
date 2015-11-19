/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockItem = require('../../../../types/game/paddock/paddock-item');
var GameDataPaddockObjectAddMessage = (function (_super) {
    __extends(GameDataPaddockObjectAddMessage, _super);
    function GameDataPaddockObjectAddMessage() {
        this.paddockItemDescription = new PaddockItem();
        _super.call(this);
    }
    GameDataPaddockObjectAddMessage.prototype.getMessageId = function () {
        return GameDataPaddockObjectAddMessage.ID;
    };
    GameDataPaddockObjectAddMessage.prototype.reset = function () {
        this.paddockItemDescription = new PaddockItem();
    };
    GameDataPaddockObjectAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameDataPaddockObjectAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameDataPaddockObjectAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameDataPaddockObjectAddMessage(param1);
    };
    GameDataPaddockObjectAddMessage.prototype.serializeAs_GameDataPaddockObjectAddMessage = function (param1) {
        this.paddockItemDescription.serializeAs_PaddockItem(param1);
    };
    GameDataPaddockObjectAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameDataPaddockObjectAddMessage(param1);
    };
    GameDataPaddockObjectAddMessage.prototype.deserializeAs_GameDataPaddockObjectAddMessage = function (param1) {
        this.paddockItemDescription = new PaddockItem();
        this.paddockItemDescription.deserialize(param1);
    };
    GameDataPaddockObjectAddMessage.ID = 5990;
    return GameDataPaddockObjectAddMessage;
})(network_message_1.NetworkMessage);
module.exports = GameDataPaddockObjectAddMessage;
