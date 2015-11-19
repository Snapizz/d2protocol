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
var PrismFightDefenderAddMessage = (function (_super) {
    __extends(PrismFightDefenderAddMessage, _super);
    function PrismFightDefenderAddMessage() {
        this.subAreaId = 0;
        this.fightId = 0;
        this.defender = new CharacterMinimalPlusLookInformations();
        _super.call(this);
    }
    PrismFightDefenderAddMessage.prototype.getMessageId = function () {
        return PrismFightDefenderAddMessage.ID;
    };
    PrismFightDefenderAddMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.fightId = 0;
        this.defender = new CharacterMinimalPlusLookInformations();
    };
    PrismFightDefenderAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightDefenderAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightDefenderAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightDefenderAddMessage(param1);
    };
    PrismFightDefenderAddMessage.prototype.serializeAs_PrismFightDefenderAddMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeVarShort(this.fightId);
        param1.writeShort(this.defender.getTypeId());
        this.defender.serialize(param1);
    };
    PrismFightDefenderAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightDefenderAddMessage(param1);
    };
    PrismFightDefenderAddMessage.prototype.deserializeAs_PrismFightDefenderAddMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightDefenderAddMessage.subAreaId.');
        }
        this.fightId = param1.readVarUhShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of PrismFightDefenderAddMessage.fightId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        this.defender = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc2_);
        this.defender.deserialize(param1);
    };
    PrismFightDefenderAddMessage.ID = 5895;
    return PrismFightDefenderAddMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightDefenderAddMessage;
