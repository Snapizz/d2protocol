/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayTaxCollectorFightRequestMessage = (function (_super) {
    __extends(GameRolePlayTaxCollectorFightRequestMessage, _super);
    function GameRolePlayTaxCollectorFightRequestMessage() {
        this.taxCollectorId = 0;
        _super.call(this);
    }
    GameRolePlayTaxCollectorFightRequestMessage.prototype.getMessageId = function () {
        return GameRolePlayTaxCollectorFightRequestMessage.ID;
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.reset = function () {
        this.taxCollectorId = 0;
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayTaxCollectorFightRequestMessage(param1);
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.serializeAs_GameRolePlayTaxCollectorFightRequestMessage = function (param1) {
        param1.writeInt(this.taxCollectorId);
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayTaxCollectorFightRequestMessage(param1);
    };
    GameRolePlayTaxCollectorFightRequestMessage.prototype.deserializeAs_GameRolePlayTaxCollectorFightRequestMessage = function (param1) {
        this.taxCollectorId = param1.readInt();
    };
    GameRolePlayTaxCollectorFightRequestMessage.ID = 5954;
    return GameRolePlayTaxCollectorFightRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayTaxCollectorFightRequestMessage;
