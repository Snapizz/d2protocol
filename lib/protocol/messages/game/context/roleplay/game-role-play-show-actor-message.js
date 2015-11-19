/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayShowActorMessage = (function (_super) {
    __extends(GameRolePlayShowActorMessage, _super);
    function GameRolePlayShowActorMessage() {
        this.informations = new GameRolePlayActorInformations();
        _super.call(this);
    }
    GameRolePlayShowActorMessage.prototype.getMessageId = function () {
        return GameRolePlayShowActorMessage.ID;
    };
    GameRolePlayShowActorMessage.prototype.reset = function () {
        this.informations = new GameRolePlayActorInformations();
    };
    GameRolePlayShowActorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayShowActorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayShowActorMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayShowActorMessage(param1);
    };
    GameRolePlayShowActorMessage.prototype.serializeAs_GameRolePlayShowActorMessage = function (param1) {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);
    };
    GameRolePlayShowActorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayShowActorMessage(param1);
    };
    GameRolePlayShowActorMessage.prototype.deserializeAs_GameRolePlayShowActorMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameRolePlayActorInformations, _loc2_);
        this.informations.deserialize(param1);
    };
    GameRolePlayShowActorMessage.ID = 5632;
    return GameRolePlayShowActorMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayShowActorMessage;
