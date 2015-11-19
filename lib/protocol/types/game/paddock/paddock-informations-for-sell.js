/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PaddockInformationsForSell = (function () {
    function PaddockInformationsForSell() {
        this.guildOwner = '';
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.nbMount = 0;
        this.nbObject = 0;
        this.price = 0;
    }
    PaddockInformationsForSell.prototype.getTypeId = function () {
        return PaddockInformationsForSell.ID;
    };
    PaddockInformationsForSell.prototype.reset = function () {
        this.guildOwner = '';
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.nbMount = 0;
        this.nbObject = 0;
        this.price = 0;
    };
    PaddockInformationsForSell.prototype.serialize = function (param1) {
        this.serializeAs_PaddockInformationsForSell(param1);
    };
    PaddockInformationsForSell.prototype.serializeAs_PaddockInformationsForSell = function (param1) {
        param1.writeUTF(this.guildOwner);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.nbMount);
        param1.writeByte(this.nbObject);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    PaddockInformationsForSell.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockInformationsForSell(param1);
    };
    PaddockInformationsForSell.prototype.deserializeAs_PaddockInformationsForSell = function (param1) {
        this.guildOwner = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PaddockInformationsForSell.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PaddockInformationsForSell.worldY.');
        }
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PaddockInformationsForSell.subAreaId.');
        }
        this.nbMount = param1.readByte();
        this.nbObject = param1.readByte();
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockInformationsForSell.price.');
        }
    };
    PaddockInformationsForSell.ID = 222;
    return PaddockInformationsForSell;
})();
module.exports = PaddockInformationsForSell;
