/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseGuildNoneMessage = (function (_super) {
    __extends(HouseGuildNoneMessage, _super);
    function HouseGuildNoneMessage() {
        this.houseId = 0;
        _super.call(this);
    }
    HouseGuildNoneMessage.prototype.getMessageId = function () {
        return HouseGuildNoneMessage.ID;
    };
    HouseGuildNoneMessage.prototype.reset = function () {
        this.houseId = 0;
    };
    HouseGuildNoneMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseGuildNoneMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseGuildNoneMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseGuildNoneMessage(param1);
    };
    HouseGuildNoneMessage.prototype.serializeAs_HouseGuildNoneMessage = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
    };
    HouseGuildNoneMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseGuildNoneMessage(param1);
    };
    HouseGuildNoneMessage.prototype.deserializeAs_HouseGuildNoneMessage = function (param1) {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseGuildNoneMessage.houseId.');
        }
    };
    HouseGuildNoneMessage.ID = 5701;
    return HouseGuildNoneMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseGuildNoneMessage;
