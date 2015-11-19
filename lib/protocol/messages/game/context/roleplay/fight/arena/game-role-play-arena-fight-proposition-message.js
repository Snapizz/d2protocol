/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaFightPropositionMessage = (function (_super) {
    __extends(GameRolePlayArenaFightPropositionMessage, _super);
    function GameRolePlayArenaFightPropositionMessage() {
        this.fightId = 0;
        this.alliesId = [];
        this.duration = 0;
        _super.call(this);
    }
    GameRolePlayArenaFightPropositionMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaFightPropositionMessage.ID;
    };
    GameRolePlayArenaFightPropositionMessage.prototype.reset = function () {
        this.fightId = 0;
        this.alliesId = [];
        this.duration = 0;
    };
    GameRolePlayArenaFightPropositionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaFightPropositionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaFightPropositionMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaFightPropositionMessage(param1);
    };
    GameRolePlayArenaFightPropositionMessage.prototype.serializeAs_GameRolePlayArenaFightPropositionMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        param1.writeShort(this.alliesId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alliesId.length) {
            param1.writeInt(this.alliesId[_loc2_]);
            _loc2_++;
        }
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element duration.');
        }
        param1.writeVarShort(this.duration);
    };
    GameRolePlayArenaFightPropositionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaFightPropositionMessage(param1);
    };
    GameRolePlayArenaFightPropositionMessage.prototype.deserializeAs_GameRolePlayArenaFightPropositionMessage = function (param1) {
        var _loc4_ = 0;
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameRolePlayArenaFightPropositionMessage.fightId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.alliesId.push(_loc4_);
            _loc3_++;
        }
        this.duration = param1.readVarUhShort();
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element of GameRolePlayArenaFightPropositionMessage.duration.');
        }
    };
    GameRolePlayArenaFightPropositionMessage.ID = 6276;
    return GameRolePlayArenaFightPropositionMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaFightPropositionMessage;
