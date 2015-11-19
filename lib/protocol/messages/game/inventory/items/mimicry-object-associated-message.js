/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectAssociatedMessage = require('./symbiotic-object-associated-message');
var MimicryObjectAssociatedMessage = (function (_super) {
    __extends(MimicryObjectAssociatedMessage, _super);
    function MimicryObjectAssociatedMessage() {
        _super.call(this);
    }
    MimicryObjectAssociatedMessage.prototype.getMessageId = function () {
        return MimicryObjectAssociatedMessage.ID;
    };
    MimicryObjectAssociatedMessage.prototype.reset = function () {
    };
    MimicryObjectAssociatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MimicryObjectAssociatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MimicryObjectAssociatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_MimicryObjectAssociatedMessage(param1);
    };
    MimicryObjectAssociatedMessage.prototype.serializeAs_MimicryObjectAssociatedMessage = function (param1) {
        _super.prototype.serializeAs_SymbioticObjectAssociatedMessage.call(this, param1);
    };
    MimicryObjectAssociatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MimicryObjectAssociatedMessage(param1);
    };
    MimicryObjectAssociatedMessage.prototype.deserializeAs_MimicryObjectAssociatedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    MimicryObjectAssociatedMessage.ID = 6462;
    return MimicryObjectAssociatedMessage;
})(SymbioticObjectAssociatedMessage);
module.exports = MimicryObjectAssociatedMessage;
