/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableChangeCodeMessage = require('../lockable/lockable-change-code-message');
var HouseLockFromInsideRequestMessage = (function (_super) {
    __extends(HouseLockFromInsideRequestMessage, _super);
    function HouseLockFromInsideRequestMessage() {
        _super.call(this);
    }
    HouseLockFromInsideRequestMessage.prototype.getMessageId = function () {
        return HouseLockFromInsideRequestMessage.ID;
    };
    HouseLockFromInsideRequestMessage.prototype.reset = function () {
    };
    HouseLockFromInsideRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseLockFromInsideRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseLockFromInsideRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseLockFromInsideRequestMessage(param1);
    };
    HouseLockFromInsideRequestMessage.prototype.serializeAs_HouseLockFromInsideRequestMessage = function (param1) {
        _super.prototype.serializeAs_LockableChangeCodeMessage.call(this, param1);
    };
    HouseLockFromInsideRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseLockFromInsideRequestMessage(param1);
    };
    HouseLockFromInsideRequestMessage.prototype.deserializeAs_HouseLockFromInsideRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    HouseLockFromInsideRequestMessage.ID = 5885;
    return HouseLockFromInsideRequestMessage;
})(LockableChangeCodeMessage);
module.exports = HouseLockFromInsideRequestMessage;
