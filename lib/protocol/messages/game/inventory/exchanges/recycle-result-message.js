/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var RecycleResultMessage = (function (_super) {
    __extends(RecycleResultMessage, _super);
    function RecycleResultMessage() {
        this.nuggetsForPrism = 0;
        this.nuggetsForPlayer = 0;
        _super.call(this);
    }
    RecycleResultMessage.prototype.getMessageId = function () {
        return RecycleResultMessage.ID;
    };
    RecycleResultMessage.prototype.reset = function () {
        this.nuggetsForPrism = 0;
        this.nuggetsForPlayer = 0;
    };
    RecycleResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    RecycleResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    RecycleResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_RecycleResultMessage(param1);
    };
    RecycleResultMessage.prototype.serializeAs_RecycleResultMessage = function (param1) {
        if (this.nuggetsForPrism < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPrism + ') on element nuggetsForPrism.');
        }
        param1.writeVarInt(this.nuggetsForPrism);
        if (this.nuggetsForPlayer < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPlayer + ') on element nuggetsForPlayer.');
        }
        param1.writeVarInt(this.nuggetsForPlayer);
    };
    RecycleResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_RecycleResultMessage(param1);
    };
    RecycleResultMessage.prototype.deserializeAs_RecycleResultMessage = function (param1) {
        this.nuggetsForPrism = param1.readVarUhInt();
        if (this.nuggetsForPrism < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPrism + ') on element of RecycleResultMessage.nuggetsForPrism.');
        }
        this.nuggetsForPlayer = param1.readVarUhInt();
        if (this.nuggetsForPlayer < 0) {
            throw new Error('Forbidden value (' + this.nuggetsForPlayer + ') on element of RecycleResultMessage.nuggetsForPlayer.');
        }
    };
    RecycleResultMessage.ID = 6601;
    return RecycleResultMessage;
})(network_message_1.NetworkMessage);
module.exports = RecycleResultMessage;
