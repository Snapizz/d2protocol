/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayFreeSoulRequestMessage = (function (_super) {
    __extends(GameRolePlayFreeSoulRequestMessage, _super);
    function GameRolePlayFreeSoulRequestMessage() {
        _super.call(this);
    }
    GameRolePlayFreeSoulRequestMessage.prototype.getMessageId = function () {
        return GameRolePlayFreeSoulRequestMessage.ID;
    };
    GameRolePlayFreeSoulRequestMessage.prototype.reset = function () {
    };
    GameRolePlayFreeSoulRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayFreeSoulRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayFreeSoulRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayFreeSoulRequestMessage(param1);
    };
    GameRolePlayFreeSoulRequestMessage.prototype.serializeAs_GameRolePlayFreeSoulRequestMessage = function (param1) {
    };
    GameRolePlayFreeSoulRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayFreeSoulRequestMessage(param1);
    };
    GameRolePlayFreeSoulRequestMessage.prototype.deserializeAs_GameRolePlayFreeSoulRequestMessage = function (param1) {
    };
    GameRolePlayFreeSoulRequestMessage.ID = 745;
    return GameRolePlayFreeSoulRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayFreeSoulRequestMessage;
