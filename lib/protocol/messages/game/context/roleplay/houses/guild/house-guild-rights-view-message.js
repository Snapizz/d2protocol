/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseGuildRightsViewMessage = (function (_super) {
    __extends(HouseGuildRightsViewMessage, _super);
    function HouseGuildRightsViewMessage() {
        _super.call(this);
    }
    HouseGuildRightsViewMessage.prototype.getMessageId = function () {
        return HouseGuildRightsViewMessage.ID;
    };
    HouseGuildRightsViewMessage.prototype.reset = function () {
    };
    HouseGuildRightsViewMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseGuildRightsViewMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseGuildRightsViewMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseGuildRightsViewMessage(param1);
    };
    HouseGuildRightsViewMessage.prototype.serializeAs_HouseGuildRightsViewMessage = function (param1) {
    };
    HouseGuildRightsViewMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseGuildRightsViewMessage(param1);
    };
    HouseGuildRightsViewMessage.prototype.deserializeAs_HouseGuildRightsViewMessage = function (param1) {
    };
    HouseGuildRightsViewMessage.ID = 5700;
    return HouseGuildRightsViewMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseGuildRightsViewMessage;
