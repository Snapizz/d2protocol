/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorStateUpdateMessage = (function (_super) {
    __extends(TaxCollectorStateUpdateMessage, _super);
    function TaxCollectorStateUpdateMessage() {
        this.uniqueId = 0;
        this.state = 0;
        _super.call(this);
    }
    TaxCollectorStateUpdateMessage.prototype.getMessageId = function () {
        return TaxCollectorStateUpdateMessage.ID;
    };
    TaxCollectorStateUpdateMessage.prototype.reset = function () {
        this.uniqueId = 0;
        this.state = 0;
    };
    TaxCollectorStateUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorStateUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorStateUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorStateUpdateMessage(param1);
    };
    TaxCollectorStateUpdateMessage.prototype.serializeAs_TaxCollectorStateUpdateMessage = function (param1) {
        param1.writeInt(this.uniqueId);
        param1.writeByte(this.state);
    };
    TaxCollectorStateUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorStateUpdateMessage(param1);
    };
    TaxCollectorStateUpdateMessage.prototype.deserializeAs_TaxCollectorStateUpdateMessage = function (param1) {
        this.uniqueId = param1.readInt();
        this.state = param1.readByte();
    };
    TaxCollectorStateUpdateMessage.ID = 6455;
    return TaxCollectorStateUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorStateUpdateMessage;
