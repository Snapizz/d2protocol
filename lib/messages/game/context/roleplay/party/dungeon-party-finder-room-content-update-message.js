var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var DungeonPartyFinderPlayer = require('../../../../../types/game/context/roleplay/party/dungeon-party-finder-player.js').class;

var DungeonPartyFinderRoomContentUpdateMessage = module.exports = function() {
    this.dungeonId = 0;
    this.addedPlayers = [];
    this.removedPlayersIds = [];

    return this;
};

require('util').inherits(DungeonPartyFinderRoomContentUpdateMessage, d2com.NetworkMessage.class);

DungeonPartyFinderRoomContentUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_DungeonPartyFinderRoomContentUpdateMessage(output);
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(input);
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.serializeAs_DungeonPartyFinderRoomContentUpdateMessage = function(param1) {
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element dungeonId.");
    } else {
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
                throw new Error("Forbidden value (" + this.removedPlayersIds[_loc3_] + ") on element 3 (starting at 1) of removedPlayersIds.");
            } else {
                param1.writeVarInt(this.removedPlayersIds[_loc3_]);
                _loc3_++;
                continue;
            }
        }
        return;
    }
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.deserializeAs_DungeonPartyFinderRoomContentUpdateMessage = function(param1) {
    var _loc6_ = null;
    var _loc7_ = 0;
    this.dungeonId = param1.readVarUhShort();
    if (this.dungeonId < 0) {
        throw new Error("Forbidden value (" + this.dungeonId + ") on element of DungeonPartyFinderRoomContentUpdateMessage.dungeonId.");
    } else {
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
                throw new Error("Forbidden value (" + _loc7_ + ") on elements of removedPlayersIds.");
            } else {
                this.removedPlayersIds.push(_loc7_);
                _loc5_++;
                continue;
            }
        }
        return;
    }
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.getMessageId = function() {
    return 6250;
};

DungeonPartyFinderRoomContentUpdateMessage.prototype.getClassName = function() {
    return 'DungeonPartyFinderRoomContentUpdateMessage';
};

module.exports.id = 6250;