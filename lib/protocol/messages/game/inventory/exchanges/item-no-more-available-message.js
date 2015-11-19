/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ItemNoMoreAvailableMessage = (function (_super) {
    __extends(ItemNoMoreAvailableMessage, _super);
    function ItemNoMoreAvailableMessage() {
        _super.call(this);
    }
    ItemNoMoreAvailableMessage.prototype.getMessageId = function () {
        return ItemNoMoreAvailableMessage.ID;
    };
    ItemNoMoreAvailableMessage.prototype.reset = function () {
    };
    ItemNoMoreAvailableMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ItemNoMoreAvailableMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ItemNoMoreAvailableMessage.prototype.serialize = function (param1) {
        this.serializeAs_ItemNoMoreAvailableMessage(param1);
    };
    ItemNoMoreAvailableMessage.prototype.serializeAs_ItemNoMoreAvailableMessage = function (param1) {
    };
    ItemNoMoreAvailableMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ItemNoMoreAvailableMessage(param1);
    };
    ItemNoMoreAvailableMessage.prototype.deserializeAs_ItemNoMoreAvailableMessage = function (param1) {
    };
    ItemNoMoreAvailableMessage.ID = 5769;
    return ItemNoMoreAvailableMessage;
})(network_message_1.NetworkMessage);
module.exports = ItemNoMoreAvailableMessage;
