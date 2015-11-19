/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorMovementRemoveMessage = (function (_super) {
    __extends(TaxCollectorMovementRemoveMessage, _super);
    function TaxCollectorMovementRemoveMessage() {
        this.collectorId = 0;
        _super.call(this);
    }
    TaxCollectorMovementRemoveMessage.prototype.getMessageId = function () {
        return TaxCollectorMovementRemoveMessage.ID;
    };
    TaxCollectorMovementRemoveMessage.prototype.reset = function () {
        this.collectorId = 0;
    };
    TaxCollectorMovementRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorMovementRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorMovementRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorMovementRemoveMessage(param1);
    };
    TaxCollectorMovementRemoveMessage.prototype.serializeAs_TaxCollectorMovementRemoveMessage = function (param1) {
        param1.writeInt(this.collectorId);
    };
    TaxCollectorMovementRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorMovementRemoveMessage(param1);
    };
    TaxCollectorMovementRemoveMessage.prototype.deserializeAs_TaxCollectorMovementRemoveMessage = function (param1) {
        this.collectorId = param1.readInt();
    };
    TaxCollectorMovementRemoveMessage.ID = 5915;
    return TaxCollectorMovementRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorMovementRemoveMessage;
