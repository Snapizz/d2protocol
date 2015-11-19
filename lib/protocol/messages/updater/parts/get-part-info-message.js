/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GetPartInfoMessage = (function (_super) {
    __extends(GetPartInfoMessage, _super);
    function GetPartInfoMessage() {
        this.id = '';
        _super.call(this);
    }
    GetPartInfoMessage.prototype.getMessageId = function () {
        return GetPartInfoMessage.ID;
    };
    GetPartInfoMessage.prototype.reset = function () {
        this.id = '';
    };
    GetPartInfoMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GetPartInfoMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GetPartInfoMessage.prototype.serialize = function (param1) {
        this.serializeAs_GetPartInfoMessage(param1);
    };
    GetPartInfoMessage.prototype.serializeAs_GetPartInfoMessage = function (param1) {
        param1.writeUTF(this.id);
    };
    GetPartInfoMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GetPartInfoMessage(param1);
    };
    GetPartInfoMessage.prototype.deserializeAs_GetPartInfoMessage = function (param1) {
        this.id = param1.readUTF();
    };
    GetPartInfoMessage.ID = 1506;
    return GetPartInfoMessage;
})(network_message_1.NetworkMessage);
module.exports = GetPartInfoMessage;
