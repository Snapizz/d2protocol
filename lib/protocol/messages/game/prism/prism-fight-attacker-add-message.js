/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterMinimalPlusLookInformations = require('../../../types/game/character/character-minimal-plus-look-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var PrismFightAttackerAddMessage = (function (_super) {
    __extends(PrismFightAttackerAddMessage, _super);
    function PrismFightAttackerAddMessage() {
        this.subAreaId = 0;
        this.fightId = 0;
        this.attacker = new CharacterMinimalPlusLookInformations();
        _super.call(this);
    }
    PrismFightAttackerAddMessage.prototype.getMessageId = function () {
        return PrismFightAttackerAddMessage.ID;
    };
    PrismFightAttackerAddMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.fightId = 0;
        this.attacker = new CharacterMinimalPlusLookInformations();
    };
    PrismFightAttackerAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightAttackerAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightAttackerAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightAttackerAddMessage(param1);
    };
    PrismFightAttackerAddMessage.prototype.serializeAs_PrismFightAttackerAddMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeVarShort(this.fightId);
        param1.writeShort(this.attacker.getTypeId());
        this.attacker.serialize(param1);
    };
    PrismFightAttackerAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightAttackerAddMessage(param1);
    };
    PrismFightAttackerAddMessage.prototype.deserializeAs_PrismFightAttackerAddMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightAttackerAddMessage.subAreaId.');
        }
        this.fightId = param1.readVarUhShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of PrismFightAttackerAddMessage.fightId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        this.attacker = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc2_);
        this.attacker.deserialize(param1);
    };
    PrismFightAttackerAddMessage.ID = 5893;
    return PrismFightAttackerAddMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightAttackerAddMessage;
