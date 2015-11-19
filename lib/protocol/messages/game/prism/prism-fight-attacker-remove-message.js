/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightAttackerRemoveMessage = (function (_super) {
    __extends(PrismFightAttackerRemoveMessage, _super);
    function PrismFightAttackerRemoveMessage() {
        this.subAreaId = 0;
        this.fightId = 0;
        this.fighterToRemoveId = 0;
        _super.call(this);
    }
    PrismFightAttackerRemoveMessage.prototype.getMessageId = function () {
        return PrismFightAttackerRemoveMessage.ID;
    };
    PrismFightAttackerRemoveMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.fightId = 0;
        this.fighterToRemoveId = 0;
    };
    PrismFightAttackerRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightAttackerRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightAttackerRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightAttackerRemoveMessage(param1);
    };
    PrismFightAttackerRemoveMessage.prototype.serializeAs_PrismFightAttackerRemoveMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeVarShort(this.fightId);
        if (this.fighterToRemoveId < 0) {
            throw new Error('Forbidden value (' + this.fighterToRemoveId + ') on element fighterToRemoveId.');
        }
        param1.writeVarInt(this.fighterToRemoveId);
    };
    PrismFightAttackerRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightAttackerRemoveMessage(param1);
    };
    PrismFightAttackerRemoveMessage.prototype.deserializeAs_PrismFightAttackerRemoveMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightAttackerRemoveMessage.subAreaId.');
        }
        this.fightId = param1.readVarUhShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of PrismFightAttackerRemoveMessage.fightId.');
        }
        this.fighterToRemoveId = param1.readVarUhInt();
        if (this.fighterToRemoveId < 0) {
            throw new Error('Forbidden value (' + this.fighterToRemoveId + ') on element of PrismFightAttackerRemoveMessage.fighterToRemoveId.');
        }
    };
    PrismFightAttackerRemoveMessage.ID = 5897;
    return PrismFightAttackerRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightAttackerRemoveMessage;
