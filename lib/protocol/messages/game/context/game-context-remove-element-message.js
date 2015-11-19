/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextRemoveElementMessage = (function (_super) {
    __extends(GameContextRemoveElementMessage, _super);
    function GameContextRemoveElementMessage() {
        this.id = 0;
        _super.call(this);
    }
    GameContextRemoveElementMessage.prototype.getMessageId = function () {
        return GameContextRemoveElementMessage.ID;
    };
    GameContextRemoveElementMessage.prototype.reset = function () {
        this.id = 0;
    };
    GameContextRemoveElementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextRemoveElementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextRemoveElementMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextRemoveElementMessage(param1);
    };
    GameContextRemoveElementMessage.prototype.serializeAs_GameContextRemoveElementMessage = function (param1) {
        param1.writeInt(this.id);
    };
    GameContextRemoveElementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextRemoveElementMessage(param1);
    };
    GameContextRemoveElementMessage.prototype.deserializeAs_GameContextRemoveElementMessage = function (param1) {
        this.id = param1.readInt();
    };
    GameContextRemoveElementMessage.ID = 251;
    return GameContextRemoveElementMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextRemoveElementMessage;
