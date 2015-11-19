/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonPartyFinderPlayer = require('../../../../../types/game/context/roleplay/party/dungeon-party-finder-player');
var DungeonPartyFinderRoomContentUpdateMessage = (function (_super) {
    __extends(DungeonPartyFinderRoomContentUpdateMessage, _super);
    function DungeonPartyFinderRoomContentUpdateMessage() {
        this.dungeonId = 0;
        this.addedPlayers = [];
        this.removedPlayersIds = [];
        _super.call(this);
    }
    DungeonPartyFinderRoomContentUpdateMessage.prototype.getMessageId = function () {
        return DungeonPartyFinderRoomContentUpdateMessage.ID;
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.addedPlayers = [];
        this.removedPlayersIds = [];
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1);
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.serializeAs_DungeonPartyFinderRoomContentUpdateMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeShort(this.addedPlayers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.addedPlayers.length) {
            (this.addedPlayers[_loc2_]).serializeAs_DungeonPartyFinderPlayer(param1);
            _loc2_++;
        }
        param1.writeShort(this.removedPlayersIds.length);
        var _loc3_ = 0;
        while (_loc3_ < this.removedPlayersIds.length) {
            if (this.removedPlayersIds[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.removedPlayersIds[_loc3_] + ') on element 3 (starting at 1) of removedPlayersIds.');
            }
            param1.writeVarInt(this.removedPlayersIds[_loc3_]);
            _loc3_++;
        }
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1);
    };
    DungeonPartyFinderRoomContentUpdateMessage.prototype.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = 0;
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonPartyFinderRoomContentUpdateMessage.dungeonId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = new DungeonPartyFinderPlayer();
            _loc6_.deserialize(param1);
            this.addedPlayers.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of removedPlayersIds.');
            }
            this.removedPlayersIds.push(_loc7_);
            _loc5_++;
        }
    };
    DungeonPartyFinderRoomContentUpdateMessage.ID = 6250;
    return DungeonPartyFinderRoomContentUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonPartyFinderRoomContentUpdateMessage;
