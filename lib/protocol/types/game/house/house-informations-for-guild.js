/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var HouseInformationsForGuild = (function () {
    function HouseInformationsForGuild() {
        this.houseId = 0;
        this.modelId = 0;
        this.ownerName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.skillListIds = [];
        this.guildshareParams = 0;
    }
    HouseInformationsForGuild.prototype.getTypeId = function () {
        return HouseInformationsForGuild.ID;
    };
    HouseInformationsForGuild.prototype.reset = function () {
        this.houseId = 0;
        this.modelId = 0;
        this.ownerName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.skillListIds = [];
        this.guildshareParams = 0;
    };
    HouseInformationsForGuild.prototype.serialize = function (param1) {
        this.serializeAs_HouseInformationsForGuild(param1);
    };
    HouseInformationsForGuild.prototype.serializeAs_HouseInformationsForGuild = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarInt(this.modelId);
        param1.writeUTF(this.ownerName);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeShort(this.skillListIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.skillListIds.length) {
            param1.writeInt(this.skillListIds[_loc2_]);
            _loc2_++;
        }
        if (this.guildshareParams < 0) {
            throw new Error('Forbidden value (' + this.guildshareParams + ') on element guildshareParams.');
        }
        param1.writeVarInt(this.guildshareParams);
    };
    HouseInformationsForGuild.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseInformationsForGuild(param1);
    };
    HouseInformationsForGuild.prototype.deserializeAs_HouseInformationsForGuild = function (param1) {
        var _loc4_ = 0;
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformationsForGuild.houseId.');
        }
        this.modelId = param1.readVarUhInt();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformationsForGuild.modelId.');
        }
        this.ownerName = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of HouseInformationsForGuild.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of HouseInformationsForGuild.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of HouseInformationsForGuild.subAreaId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.skillListIds.push(_loc4_);
            _loc3_++;
        }
        this.guildshareParams = param1.readVarUhInt();
        if (this.guildshareParams < 0) {
            throw new Error('Forbidden value (' + this.guildshareParams + ') on element of HouseInformationsForGuild.guildshareParams.');
        }
    };
    HouseInformationsForGuild.ID = 170;
    return HouseInformationsForGuild;
})();
module.exports = HouseInformationsForGuild;
