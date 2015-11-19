/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PlayableBreedEnum = require('../../../../../enums/playable-breed-enum');
var DungeonPartyFinderPlayer = (function () {
    function DungeonPartyFinderPlayer() {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
        this.level = 0;
    }
    DungeonPartyFinderPlayer.prototype.getTypeId = function () {
        return DungeonPartyFinderPlayer.ID;
    };
    DungeonPartyFinderPlayer.prototype.reset = function () {
        this.playerId = 0;
        this.playerName = '';
        this.breed = 0;
        this.sex = false;
        this.level = 0;
    };
    DungeonPartyFinderPlayer.prototype.serialize = function (param1) {
        this.serializeAs_DungeonPartyFinderPlayer(param1);
    };
    DungeonPartyFinderPlayer.prototype.serializeAs_DungeonPartyFinderPlayer = function (param1) {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
    };
    DungeonPartyFinderPlayer.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonPartyFinderPlayer(param1);
    };
    DungeonPartyFinderPlayer.prototype.deserializeAs_DungeonPartyFinderPlayer = function (param1) {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of DungeonPartyFinderPlayer.playerId.');
        }
        this.playerName = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of DungeonPartyFinderPlayer.breed.');
        }
        this.sex = param1.readBoolean();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of DungeonPartyFinderPlayer.level.');
        }
    };
    DungeonPartyFinderPlayer.ID = 373;
    return DungeonPartyFinderPlayer;
})();
module.exports = DungeonPartyFinderPlayer;
