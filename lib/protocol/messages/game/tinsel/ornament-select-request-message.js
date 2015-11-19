/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var OrnamentSelectRequestMessage = (function (_super) {
    __extends(OrnamentSelectRequestMessage, _super);
    function OrnamentSelectRequestMessage() {
        this.ornamentId = 0;
        _super.call(this);
    }
    OrnamentSelectRequestMessage.prototype.getMessageId = function () {
        return OrnamentSelectRequestMessage.ID;
    };
    OrnamentSelectRequestMessage.prototype.reset = function () {
        this.ornamentId = 0;
    };
    OrnamentSelectRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    OrnamentSelectRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    OrnamentSelectRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_OrnamentSelectRequestMessage(param1);
    };
    OrnamentSelectRequestMessage.prototype.serializeAs_OrnamentSelectRequestMessage = function (param1) {
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
        }
        param1.writeVarShort(this.ornamentId);
    };
    OrnamentSelectRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_OrnamentSelectRequestMessage(param1);
    };
    OrnamentSelectRequestMessage.prototype.deserializeAs_OrnamentSelectRequestMessage = function (param1) {
        this.ornamentId = param1.readVarUhShort();
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element of OrnamentSelectRequestMessage.ornamentId.');
        }
    };
    OrnamentSelectRequestMessage.ID = 6374;
    return OrnamentSelectRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = OrnamentSelectRequestMessage;
