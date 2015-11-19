/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseKickRequestMessage = (function (_super) {
    __extends(HouseKickRequestMessage, _super);
    function HouseKickRequestMessage() {
        this.id = 0;
        _super.call(this);
    }
    HouseKickRequestMessage.prototype.getMessageId = function () {
        return HouseKickRequestMessage.ID;
    };
    HouseKickRequestMessage.prototype.reset = function () {
        this.id = 0;
    };
    HouseKickRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseKickRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseKickRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseKickRequestMessage(param1);
    };
    HouseKickRequestMessage.prototype.serializeAs_HouseKickRequestMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarInt(this.id);
    };
    HouseKickRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseKickRequestMessage(param1);
    };
    HouseKickRequestMessage.prototype.deserializeAs_HouseKickRequestMessage = function (param1) {
        this.id = param1.readVarUhInt();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of HouseKickRequestMessage.id.');
        }
    };
    HouseKickRequestMessage.ID = 5698;
    return HouseKickRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseKickRequestMessage;
