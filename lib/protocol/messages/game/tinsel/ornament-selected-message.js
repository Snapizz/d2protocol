/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var OrnamentSelectedMessage = (function (_super) {
    __extends(OrnamentSelectedMessage, _super);
    function OrnamentSelectedMessage() {
        this.ornamentId = 0;
        _super.call(this);
    }
    OrnamentSelectedMessage.prototype.getMessageId = function () {
        return OrnamentSelectedMessage.ID;
    };
    OrnamentSelectedMessage.prototype.reset = function () {
        this.ornamentId = 0;
    };
    OrnamentSelectedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    OrnamentSelectedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    OrnamentSelectedMessage.prototype.serialize = function (param1) {
        this.serializeAs_OrnamentSelectedMessage(param1);
    };
    OrnamentSelectedMessage.prototype.serializeAs_OrnamentSelectedMessage = function (param1) {
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
        }
        param1.writeVarShort(this.ornamentId);
    };
    OrnamentSelectedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_OrnamentSelectedMessage(param1);
    };
    OrnamentSelectedMessage.prototype.deserializeAs_OrnamentSelectedMessage = function (param1) {
        this.ornamentId = param1.readVarUhShort();
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element of OrnamentSelectedMessage.ornamentId.');
        }
    };
    OrnamentSelectedMessage.ID = 6369;
    return OrnamentSelectedMessage;
})(network_message_1.NetworkMessage);
module.exports = OrnamentSelectedMessage;
