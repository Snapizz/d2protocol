/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GoldItem = require('../../../../types/game/data/items/gold-item');
var GoldAddedMessage = (function (_super) {
    __extends(GoldAddedMessage, _super);
    function GoldAddedMessage() {
        this.gold = new GoldItem();
        _super.call(this);
    }
    GoldAddedMessage.prototype.getMessageId = function () {
        return GoldAddedMessage.ID;
    };
    GoldAddedMessage.prototype.reset = function () {
        this.gold = new GoldItem();
    };
    GoldAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GoldAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GoldAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GoldAddedMessage(param1);
    };
    GoldAddedMessage.prototype.serializeAs_GoldAddedMessage = function (param1) {
        this.gold.serializeAs_GoldItem(param1);
    };
    GoldAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GoldAddedMessage(param1);
    };
    GoldAddedMessage.prototype.deserializeAs_GoldAddedMessage = function (param1) {
        this.gold = new GoldItem();
        this.gold.deserialize(param1);
    };
    GoldAddedMessage.ID = 6030;
    return GoldAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = GoldAddedMessage;
