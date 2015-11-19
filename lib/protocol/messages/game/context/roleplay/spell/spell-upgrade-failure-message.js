/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellUpgradeFailureMessage = (function (_super) {
    __extends(SpellUpgradeFailureMessage, _super);
    function SpellUpgradeFailureMessage() {
        _super.call(this);
    }
    SpellUpgradeFailureMessage.prototype.getMessageId = function () {
        return SpellUpgradeFailureMessage.ID;
    };
    SpellUpgradeFailureMessage.prototype.reset = function () {
    };
    SpellUpgradeFailureMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellUpgradeFailureMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellUpgradeFailureMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellUpgradeFailureMessage(param1);
    };
    SpellUpgradeFailureMessage.prototype.serializeAs_SpellUpgradeFailureMessage = function (param1) {
    };
    SpellUpgradeFailureMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellUpgradeFailureMessage(param1);
    };
    SpellUpgradeFailureMessage.prototype.deserializeAs_SpellUpgradeFailureMessage = function (param1) {
    };
    SpellUpgradeFailureMessage.ID = 1202;
    return SpellUpgradeFailureMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellUpgradeFailureMessage;
