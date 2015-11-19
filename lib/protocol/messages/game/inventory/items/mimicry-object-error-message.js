/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectErrorMessage = require('./symbiotic-object-error-message');
var MimicryObjectErrorMessage = (function (_super) {
    __extends(MimicryObjectErrorMessage, _super);
    function MimicryObjectErrorMessage() {
        this.preview = false;
        _super.call(this);
    }
    MimicryObjectErrorMessage.prototype.getMessageId = function () {
        return MimicryObjectErrorMessage.ID;
    };
    MimicryObjectErrorMessage.prototype.reset = function () {
        this.preview = false;
    };
    MimicryObjectErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MimicryObjectErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MimicryObjectErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_MimicryObjectErrorMessage(param1);
    };
    MimicryObjectErrorMessage.prototype.serializeAs_MimicryObjectErrorMessage = function (param1) {
        _super.prototype.serializeAs_SymbioticObjectErrorMessage.call(this, param1);
        param1.writeBoolean(this.preview);
    };
    MimicryObjectErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MimicryObjectErrorMessage(param1);
    };
    MimicryObjectErrorMessage.prototype.deserializeAs_MimicryObjectErrorMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.preview = param1.readBoolean();
    };
    MimicryObjectErrorMessage.ID = 6461;
    return MimicryObjectErrorMessage;
})(SymbioticObjectErrorMessage);
module.exports = MimicryObjectErrorMessage;
