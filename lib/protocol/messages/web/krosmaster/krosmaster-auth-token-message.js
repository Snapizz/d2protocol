/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterAuthTokenMessage = (function (_super) {
    __extends(KrosmasterAuthTokenMessage, _super);
    function KrosmasterAuthTokenMessage() {
        this.token = '';
        _super.call(this);
    }
    KrosmasterAuthTokenMessage.prototype.getMessageId = function () {
        return KrosmasterAuthTokenMessage.ID;
    };
    KrosmasterAuthTokenMessage.prototype.reset = function () {
        this.token = '';
    };
    KrosmasterAuthTokenMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterAuthTokenMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterAuthTokenMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterAuthTokenMessage(param1);
    };
    KrosmasterAuthTokenMessage.prototype.serializeAs_KrosmasterAuthTokenMessage = function (param1) {
        param1.writeUTF(this.token);
    };
    KrosmasterAuthTokenMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterAuthTokenMessage(param1);
    };
    KrosmasterAuthTokenMessage.prototype.deserializeAs_KrosmasterAuthTokenMessage = function (param1) {
        this.token = param1.readUTF();
    };
    KrosmasterAuthTokenMessage.ID = 6351;
    return KrosmasterAuthTokenMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterAuthTokenMessage;
