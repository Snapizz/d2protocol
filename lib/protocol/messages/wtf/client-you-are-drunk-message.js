/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DebugInClientMessage = require('../debug/debug-in-client-message');
var ClientYouAreDrunkMessage = (function (_super) {
    __extends(ClientYouAreDrunkMessage, _super);
    function ClientYouAreDrunkMessage() {
        _super.call(this);
    }
    ClientYouAreDrunkMessage.prototype.getMessageId = function () {
        return ClientYouAreDrunkMessage.ID;
    };
    ClientYouAreDrunkMessage.prototype.reset = function () {
    };
    ClientYouAreDrunkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ClientYouAreDrunkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ClientYouAreDrunkMessage.prototype.serialize = function (param1) {
        this.serializeAs_ClientYouAreDrunkMessage(param1);
    };
    ClientYouAreDrunkMessage.prototype.serializeAs_ClientYouAreDrunkMessage = function (param1) {
        _super.prototype.serializeAs_DebugInClientMessage.call(this, param1);
    };
    ClientYouAreDrunkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ClientYouAreDrunkMessage(param1);
    };
    ClientYouAreDrunkMessage.prototype.deserializeAs_ClientYouAreDrunkMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    ClientYouAreDrunkMessage.ID = 6594;
    return ClientYouAreDrunkMessage;
})(DebugInClientMessage);
module.exports = ClientYouAreDrunkMessage;
