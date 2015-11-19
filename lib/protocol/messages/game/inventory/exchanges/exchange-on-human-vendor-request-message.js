/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeOnHumanVendorRequestMessage = (function (_super) {
    __extends(ExchangeOnHumanVendorRequestMessage, _super);
    function ExchangeOnHumanVendorRequestMessage() {
        this.humanVendorId = 0;
        this.humanVendorCell = 0;
        _super.call(this);
    }
    ExchangeOnHumanVendorRequestMessage.prototype.getMessageId = function () {
        return ExchangeOnHumanVendorRequestMessage.ID;
    };
    ExchangeOnHumanVendorRequestMessage.prototype.reset = function () {
        this.humanVendorId = 0;
        this.humanVendorCell = 0;
    };
    ExchangeOnHumanVendorRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeOnHumanVendorRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeOnHumanVendorRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeOnHumanVendorRequestMessage(param1);
    };
    ExchangeOnHumanVendorRequestMessage.prototype.serializeAs_ExchangeOnHumanVendorRequestMessage = function (param1) {
        if (this.humanVendorId < 0) {
            throw new Error('Forbidden value (' + this.humanVendorId + ') on element humanVendorId.');
        }
        param1.writeVarInt(this.humanVendorId);
        if (this.humanVendorCell < 0 || this.humanVendorCell > 559) {
            throw new Error('Forbidden value (' + this.humanVendorCell + ') on element humanVendorCell.');
        }
        param1.writeVarShort(this.humanVendorCell);
    };
    ExchangeOnHumanVendorRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeOnHumanVendorRequestMessage(param1);
    };
    ExchangeOnHumanVendorRequestMessage.prototype.deserializeAs_ExchangeOnHumanVendorRequestMessage = function (param1) {
        this.humanVendorId = param1.readVarUhInt();
        if (this.humanVendorId < 0) {
            throw new Error('Forbidden value (' + this.humanVendorId + ') on element of ExchangeOnHumanVendorRequestMessage.humanVendorId.');
        }
        this.humanVendorCell = param1.readVarUhShort();
        if (this.humanVendorCell < 0 || this.humanVendorCell > 559) {
            throw new Error('Forbidden value (' + this.humanVendorCell + ') on element of ExchangeOnHumanVendorRequestMessage.humanVendorCell.');
        }
    };
    ExchangeOnHumanVendorRequestMessage.ID = 5772;
    return ExchangeOnHumanVendorRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeOnHumanVendorRequestMessage;
