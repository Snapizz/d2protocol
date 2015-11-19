/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameEntityDispositionErrorMessage = (function (_super) {
    __extends(GameEntityDispositionErrorMessage, _super);
    function GameEntityDispositionErrorMessage() {
        _super.call(this);
    }
    GameEntityDispositionErrorMessage.prototype.getMessageId = function () {
        return GameEntityDispositionErrorMessage.ID;
    };
    GameEntityDispositionErrorMessage.prototype.reset = function () {
    };
    GameEntityDispositionErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameEntityDispositionErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameEntityDispositionErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameEntityDispositionErrorMessage(param1);
    };
    GameEntityDispositionErrorMessage.prototype.serializeAs_GameEntityDispositionErrorMessage = function (param1) {
    };
    GameEntityDispositionErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameEntityDispositionErrorMessage(param1);
    };
    GameEntityDispositionErrorMessage.prototype.deserializeAs_GameEntityDispositionErrorMessage = function (param1) {
    };
    GameEntityDispositionErrorMessage.ID = 5695;
    return GameEntityDispositionErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = GameEntityDispositionErrorMessage;
