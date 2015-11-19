/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightDefenderLeaveMessage = (function (_super) {
    __extends(PrismFightDefenderLeaveMessage, _super);
    function PrismFightDefenderLeaveMessage() {
        this.subAreaId = 0;
        this.fightId = 0;
        this.fighterToRemoveId = 0;
        _super.call(this);
    }
    PrismFightDefenderLeaveMessage.prototype.getMessageId = function () {
        return PrismFightDefenderLeaveMessage.ID;
    };
    PrismFightDefenderLeaveMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.fightId = 0;
        this.fighterToRemoveId = 0;
    };
    PrismFightDefenderLeaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightDefenderLeaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightDefenderLeaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightDefenderLeaveMessage(param1);
    };
    PrismFightDefenderLeaveMessage.prototype.serializeAs_PrismFightDefenderLeaveMessage = function (param1) {
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
    PrismFightDefenderLeaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightDefenderLeaveMessage(param1);
    };
    PrismFightDefenderLeaveMessage.prototype.deserializeAs_PrismFightDefenderLeaveMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightDefenderLeaveMessage.subAreaId.');
        }
        this.fightId = param1.readVarUhShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of PrismFightDefenderLeaveMessage.fightId.');
        }
        this.fighterToRemoveId = param1.readVarUhInt();
        if (this.fighterToRemoveId < 0) {
            throw new Error('Forbidden value (' + this.fighterToRemoveId + ') on element of PrismFightDefenderLeaveMessage.fighterToRemoveId.');
        }
    };
    PrismFightDefenderLeaveMessage.ID = 5892;
    return PrismFightDefenderLeaveMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightDefenderLeaveMessage;
