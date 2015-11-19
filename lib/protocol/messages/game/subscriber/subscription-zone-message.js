/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SubscriptionZoneMessage = (function (_super) {
    __extends(SubscriptionZoneMessage, _super);
    function SubscriptionZoneMessage() {
        this.active = false;
        _super.call(this);
    }
    SubscriptionZoneMessage.prototype.getMessageId = function () {
        return SubscriptionZoneMessage.ID;
    };
    SubscriptionZoneMessage.prototype.reset = function () {
        this.active = false;
    };
    SubscriptionZoneMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SubscriptionZoneMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SubscriptionZoneMessage.prototype.serialize = function (param1) {
        this.serializeAs_SubscriptionZoneMessage(param1);
    };
    SubscriptionZoneMessage.prototype.serializeAs_SubscriptionZoneMessage = function (param1) {
        param1.writeBoolean(this.active);
    };
    SubscriptionZoneMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SubscriptionZoneMessage(param1);
    };
    SubscriptionZoneMessage.prototype.deserializeAs_SubscriptionZoneMessage = function (param1) {
        this.active = param1.readBoolean();
    };
    SubscriptionZoneMessage.ID = 5573;
    return SubscriptionZoneMessage;
})(network_message_1.NetworkMessage);
module.exports = SubscriptionZoneMessage;
