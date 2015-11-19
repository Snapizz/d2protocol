/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionFightTargetedAbilityMessage = require('./abstract-game-action-fight-targeted-ability-message');
var GameActionFightCloseCombatMessage = (function (_super) {
    __extends(GameActionFightCloseCombatMessage, _super);
    function GameActionFightCloseCombatMessage() {
        this.weaponGenericId = 0;
        _super.call(this);
    }
    GameActionFightCloseCombatMessage.prototype.getMessageId = function () {
        return GameActionFightCloseCombatMessage.ID;
    };
    GameActionFightCloseCombatMessage.prototype.reset = function () {
        this.weaponGenericId = 0;
    };
    GameActionFightCloseCombatMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightCloseCombatMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightCloseCombatMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightCloseCombatMessage(param1);
    };
    GameActionFightCloseCombatMessage.prototype.serializeAs_GameActionFightCloseCombatMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionFightTargetedAbilityMessage.call(this, param1);
        if (this.weaponGenericId < 0) {
            throw new Error('Forbidden value (' + this.weaponGenericId + ') on element weaponGenericId.');
        }
        param1.writeVarShort(this.weaponGenericId);
    };
    GameActionFightCloseCombatMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightCloseCombatMessage(param1);
    };
    GameActionFightCloseCombatMessage.prototype.deserializeAs_GameActionFightCloseCombatMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.weaponGenericId = param1.readVarUhShort();
        if (this.weaponGenericId < 0) {
            throw new Error('Forbidden value (' + this.weaponGenericId + ') on element of GameActionFightCloseCombatMessage.weaponGenericId.');
        }
    };
    GameActionFightCloseCombatMessage.ID = 6116;
    return GameActionFightCloseCombatMessage;
})(AbstractGameActionFightTargetedAbilityMessage);
module.exports = GameActionFightCloseCombatMessage;
