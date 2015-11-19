/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations');
var BasicAllianceInformations = require('../../../types/game/context/roleplay/basic-alliance-informations');
var KohUpdateMessage = (function (_super) {
    __extends(KohUpdateMessage, _super);
    function KohUpdateMessage() {
        this.alliances = [];
        this.allianceNbMembers = [];
        this.allianceRoundWeigth = [];
        this.allianceMatchScore = [];
        this.allianceMapWinner = new BasicAllianceInformations();
        this.allianceMapWinnerScore = 0;
        this.allianceMapMyAllianceScore = 0;
        this.nextTickTime = 0;
        _super.call(this);
    }
    KohUpdateMessage.prototype.getMessageId = function () {
        return KohUpdateMessage.ID;
    };
    KohUpdateMessage.prototype.reset = function () {
        this.alliances = [];
        this.allianceNbMembers = [];
        this.allianceRoundWeigth = [];
        this.allianceMatchScore = [];
        this.allianceMapWinner = new BasicAllianceInformations();
        this.allianceMapWinnerScore = 0;
        this.allianceMapMyAllianceScore = 0;
        this.nextTickTime = 0;
    };
    KohUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KohUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KohUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_KohUpdateMessage(param1);
    };
    KohUpdateMessage.prototype.serializeAs_KohUpdateMessage = function (param1) {
        param1.writeShort(this.alliances.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alliances.length) {
            (this.alliances[_loc2_]).serializeAs_AllianceInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.allianceNbMembers.length);
        var _loc3_ = 0;
        while (_loc3_ < this.allianceNbMembers.length) {
            if (this.allianceNbMembers[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.allianceNbMembers[_loc3_] + ') on element 2 (starting at 1) of allianceNbMembers.');
            }
            param1.writeVarShort(this.allianceNbMembers[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.allianceRoundWeigth.length);
        var _loc4_ = 0;
        while (_loc4_ < this.allianceRoundWeigth.length) {
            if (this.allianceRoundWeigth[_loc4_] < 0) {
                throw new Error('Forbidden value (' + this.allianceRoundWeigth[_loc4_] + ') on element 3 (starting at 1) of allianceRoundWeigth.');
            }
            param1.writeVarInt(this.allianceRoundWeigth[_loc4_]);
            _loc4_++;
        }
        param1.writeShort(this.allianceMatchScore.length);
        var _loc5_ = 0;
        while (_loc5_ < this.allianceMatchScore.length) {
            if (this.allianceMatchScore[_loc5_] < 0) {
                throw new Error('Forbidden value (' + this.allianceMatchScore[_loc5_] + ') on element 4 (starting at 1) of allianceMatchScore.');
            }
            param1.writeByte(this.allianceMatchScore[_loc5_]);
            _loc5_++;
        }
        this.allianceMapWinner.serializeAs_BasicAllianceInformations(param1);
        if (this.allianceMapWinnerScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapWinnerScore + ') on element allianceMapWinnerScore.');
        }
        param1.writeVarInt(this.allianceMapWinnerScore);
        if (this.allianceMapMyAllianceScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapMyAllianceScore + ') on element allianceMapMyAllianceScore.');
        }
        param1.writeVarInt(this.allianceMapMyAllianceScore);
        if (this.nextTickTime < 0 || this.nextTickTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.nextTickTime + ') on element nextTickTime.');
        }
        param1.writeDouble(this.nextTickTime);
    };
    KohUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KohUpdateMessage(param1);
    };
    KohUpdateMessage.prototype.deserializeAs_KohUpdateMessage = function (param1) {
        var _loc10_ = null;
        var _loc11_ = 0;
        var _loc12_ = 0;
        var _loc13_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc10_ = new AllianceInformations();
            _loc10_.deserialize(param1);
            this.alliances.push(_loc10_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc11_ = param1.readVarUhShort();
            if (_loc11_ < 0) {
                throw new Error('Forbidden value (' + _loc11_ + ') on elements of allianceNbMembers.');
            }
            this.allianceNbMembers.push(_loc11_);
            _loc5_++;
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc12_ = param1.readVarUhInt();
            if (_loc12_ < 0) {
                throw new Error('Forbidden value (' + _loc12_ + ') on elements of allianceRoundWeigth.');
            }
            this.allianceRoundWeigth.push(_loc12_);
            _loc7_++;
        }
        var _loc8_ = param1.readUnsignedShort();
        var _loc9_ = 0;
        while (_loc9_ < _loc8_) {
            _loc13_ = param1.readByte();
            if (_loc13_ < 0) {
                throw new Error('Forbidden value (' + _loc13_ + ') on elements of allianceMatchScore.');
            }
            this.allianceMatchScore.push(_loc13_);
            _loc9_++;
        }
        this.allianceMapWinner = new BasicAllianceInformations();
        this.allianceMapWinner.deserialize(param1);
        this.allianceMapWinnerScore = param1.readVarUhInt();
        if (this.allianceMapWinnerScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapWinnerScore + ') on element of KohUpdateMessage.allianceMapWinnerScore.');
        }
        this.allianceMapMyAllianceScore = param1.readVarUhInt();
        if (this.allianceMapMyAllianceScore < 0) {
            throw new Error('Forbidden value (' + this.allianceMapMyAllianceScore + ') on element of KohUpdateMessage.allianceMapMyAllianceScore.');
        }
        this.nextTickTime = param1.readDouble();
        if (this.nextTickTime < 0 || this.nextTickTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.nextTickTime + ') on element of KohUpdateMessage.nextTickTime.');
        }
    };
    KohUpdateMessage.ID = 6439;
    return KohUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = KohUpdateMessage;
