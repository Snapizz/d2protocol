/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PartyMemberGeoPosition = (function () {
    function PartyMemberGeoPosition() {
        this.memberId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    }
    PartyMemberGeoPosition.prototype.getTypeId = function () {
        return PartyMemberGeoPosition.ID;
    };
    PartyMemberGeoPosition.prototype.reset = function () {
        this.memberId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    };
    PartyMemberGeoPosition.prototype.serialize = function (param1) {
        this.serializeAs_PartyMemberGeoPosition(param1);
    };
    PartyMemberGeoPosition.prototype.serializeAs_PartyMemberGeoPosition = function (param1) {
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeInt(this.memberId);
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
    };
    PartyMemberGeoPosition.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyMemberGeoPosition(param1);
    };
    PartyMemberGeoPosition.prototype.deserializeAs_PartyMemberGeoPosition = function (param1) {
        this.memberId = param1.readInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of PartyMemberGeoPosition.memberId.');
        }
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PartyMemberGeoPosition.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PartyMemberGeoPosition.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyMemberGeoPosition.subAreaId.');
        }
    };
    PartyMemberGeoPosition.ID = 378;
    return PartyMemberGeoPosition;
})();
module.exports = PartyMemberGeoPosition;
