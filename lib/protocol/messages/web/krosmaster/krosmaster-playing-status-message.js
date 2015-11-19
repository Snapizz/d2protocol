/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterPlayingStatusMessage = (function (_super) {
    __extends(KrosmasterPlayingStatusMessage, _super);
    function KrosmasterPlayingStatusMessage() {
        this.playing = false;
        _super.call(this);
    }
    KrosmasterPlayingStatusMessage.prototype.getMessageId = function () {
        return KrosmasterPlayingStatusMessage.ID;
    };
    KrosmasterPlayingStatusMessage.prototype.reset = function () {
        this.playing = false;
    };
    KrosmasterPlayingStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterPlayingStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterPlayingStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterPlayingStatusMessage(param1);
    };
    KrosmasterPlayingStatusMessage.prototype.serializeAs_KrosmasterPlayingStatusMessage = function (param1) {
        param1.writeBoolean(this.playing);
    };
    KrosmasterPlayingStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterPlayingStatusMessage(param1);
    };
    KrosmasterPlayingStatusMessage.prototype.deserializeAs_KrosmasterPlayingStatusMessage = function (param1) {
        this.playing = param1.readBoolean();
    };
    KrosmasterPlayingStatusMessage.ID = 6347;
    return KrosmasterPlayingStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterPlayingStatusMessage;
