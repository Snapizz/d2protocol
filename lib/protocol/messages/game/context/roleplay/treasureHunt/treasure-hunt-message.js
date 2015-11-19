/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntStep = require('../../../../../types/game/context/roleplay/treasureHunt/treasure-hunt-step');
var TreasureHuntFlag = require('../../../../../types/game/context/roleplay/treasureHunt/treasure-hunt-flag');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var TreasureHuntMessage = (function (_super) {
    __extends(TreasureHuntMessage, _super);
    function TreasureHuntMessage() {
        this.questType = 0;
        this.startMapId = 0;
        this.knownStepsList = [];
        this.totalStepCount = 0;
        this.checkPointCurrent = 0;
        this.checkPointTotal = 0;
        this.availableRetryCount = 0;
        this.flags = [];
        _super.call(this);
    }
    TreasureHuntMessage.prototype.getMessageId = function () {
        return TreasureHuntMessage.ID;
    };
    TreasureHuntMessage.prototype.reset = function () {
        this.questType = 0;
        this.startMapId = 0;
        this.knownStepsList = [];
        this.totalStepCount = 0;
        this.checkPointCurrent = 0;
        this.checkPointTotal = 0;
        this.availableRetryCount = 0;
        this.flags = [];
    };
    TreasureHuntMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntMessage(param1);
    };
    TreasureHuntMessage.prototype.serializeAs_TreasureHuntMessage = function (param1) {
        param1.writeByte(this.questType);
        param1.writeInt(this.startMapId);
        param1.writeShort(this.knownStepsList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.knownStepsList.length) {
            param1.writeShort((this.knownStepsList[_loc2_]).getTypeId());
            (this.knownStepsList[_loc2_]).serialize(param1);
            _loc2_++;
        }
        if (this.totalStepCount < 0) {
            throw new Error('Forbidden value (' + this.totalStepCount + ') on element totalStepCount.');
        }
        param1.writeByte(this.totalStepCount);
        if (this.checkPointCurrent < 0) {
            throw new Error('Forbidden value (' + this.checkPointCurrent + ') on element checkPointCurrent.');
        }
        param1.writeVarInt(this.checkPointCurrent);
        if (this.checkPointTotal < 0) {
            throw new Error('Forbidden value (' + this.checkPointTotal + ') on element checkPointTotal.');
        }
        param1.writeVarInt(this.checkPointTotal);
        param1.writeInt(this.availableRetryCount);
        param1.writeShort(this.flags.length);
        var _loc3_ = 0;
        while (_loc3_ < this.flags.length) {
            (this.flags[_loc3_]).serializeAs_TreasureHuntFlag(param1);
            _loc3_++;
        }
    };
    TreasureHuntMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntMessage(param1);
    };
    TreasureHuntMessage.prototype.deserializeAs_TreasureHuntMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = null;
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntMessage.questType.');
        }
        this.startMapId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(TreasureHuntStep, _loc6_);
            _loc7_.deserialize(param1);
            this.knownStepsList.push(_loc7_);
            _loc3_++;
        }
        this.totalStepCount = param1.readByte();
        if (this.totalStepCount < 0) {
            throw new Error('Forbidden value (' + this.totalStepCount + ') on element of TreasureHuntMessage.totalStepCount.');
        }
        this.checkPointCurrent = param1.readVarUhInt();
        if (this.checkPointCurrent < 0) {
            throw new Error('Forbidden value (' + this.checkPointCurrent + ') on element of TreasureHuntMessage.checkPointCurrent.');
        }
        this.checkPointTotal = param1.readVarUhInt();
        if (this.checkPointTotal < 0) {
            throw new Error('Forbidden value (' + this.checkPointTotal + ') on element of TreasureHuntMessage.checkPointTotal.');
        }
        this.availableRetryCount = param1.readInt();
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = new TreasureHuntFlag();
            _loc8_.deserialize(param1);
            this.flags.push(_loc8_);
            _loc5_++;
        }
    };
    TreasureHuntMessage.ID = 6486;
    return TreasureHuntMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntMessage;
