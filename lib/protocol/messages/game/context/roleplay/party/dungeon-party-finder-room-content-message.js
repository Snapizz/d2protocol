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
var DungeonPartyFinderRoomContentMessage = (function (_super) {
    __extends(DungeonPartyFinderRoomContentMessage, _super);
    function DungeonPartyFinderRoomContentMessage() {
        this.dungeonId = 0;
        this.players = [];
        _super.call(this);
    }
    DungeonPartyFinderRoomContentMessage.prototype.getMessageId = function () {
        return DungeonPartyFinderRoomContentMessage.ID;
    };
    DungeonPartyFinderRoomContentMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.players = [];
    };
    DungeonPartyFinderRoomContentMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonPartyFinderRoomContentMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonPartyFinderRoomContentMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderRoomContentMessage(param1);
    };
    DungeonPartyFinderRoomContentMessage.prototype.serializeAs_DungeonPartyFinderRoomContentMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        param1.writeShort(this.players.length);
        var _loc2_ = 0;
        while (_loc2_ < this.players.length) {
            (this.players[_loc2_]).serializeAs_DungeonPartyFinderPlayer(param1);
            _loc2_++;
        }
    };
    DungeonPartyFinderRoomContentMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderRoomContentMessage(param1);
    };
    DungeonPartyFinderRoomContentMessage.prototype.deserializeAs_DungeonPartyFinderRoomContentMessage = function (param1) {
        var _loc4_ = null;
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of DungeonPartyFinderRoomContentMessage.dungeonId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new DungeonPartyFinderPlayer();
            _loc4_.deserialize(param1);
            this.players.push(_loc4_);
            _loc3_++;
        }
    };
    DungeonPartyFinderRoomContentMessage.ID = 6247;
    return DungeonPartyFinderRoomContentMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonPartyFinderRoomContentMessage;
