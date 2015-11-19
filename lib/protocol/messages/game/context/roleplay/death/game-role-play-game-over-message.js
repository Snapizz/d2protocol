/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayGameOverMessage = (function (_super) {
    __extends(GameRolePlayGameOverMessage, _super);
    function GameRolePlayGameOverMessage() {
        _super.call(this);
    }
    GameRolePlayGameOverMessage.prototype.getMessageId = function () {
        return GameRolePlayGameOverMessage.ID;
    };
    GameRolePlayGameOverMessage.prototype.reset = function () {
    };
    GameRolePlayGameOverMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayGameOverMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayGameOverMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayGameOverMessage(param1);
    };
    GameRolePlayGameOverMessage.prototype.serializeAs_GameRolePlayGameOverMessage = function (param1) {
    };
    GameRolePlayGameOverMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayGameOverMessage(param1);
    };
    GameRolePlayGameOverMessage.prototype.deserializeAs_GameRolePlayGameOverMessage = function (param1) {
    };
    GameRolePlayGameOverMessage.ID = 746;
    return GameRolePlayGameOverMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayGameOverMessage;
