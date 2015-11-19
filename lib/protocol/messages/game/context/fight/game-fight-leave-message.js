/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightLeaveMessage = (function (_super) {
    __extends(GameFightLeaveMessage, _super);
    function GameFightLeaveMessage() {
        this.charId = 0;
        _super.call(this);
    }
    GameFightLeaveMessage.prototype.getMessageId = function () {
        return GameFightLeaveMessage.ID;
    };
    GameFightLeaveMessage.prototype.reset = function () {
        this.charId = 0;
    };
    GameFightLeaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightLeaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightLeaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightLeaveMessage(param1);
    };
    GameFightLeaveMessage.prototype.serializeAs_GameFightLeaveMessage = function (param1) {
        param1.writeInt(this.charId);
    };
    GameFightLeaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightLeaveMessage(param1);
    };
    GameFightLeaveMessage.prototype.deserializeAs_GameFightLeaveMessage = function (param1) {
        this.charId = param1.readInt();
    };
    GameFightLeaveMessage.ID = 721;
    return GameFightLeaveMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightLeaveMessage;
