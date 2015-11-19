/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var HouseInformationsInside = (function () {
    function HouseInformationsInside() {
        this.houseId = 0;
        this.modelId = 0;
        this.ownerId = 0;
        this.ownerName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.price = 0;
        this.isLocked = false;
    }
    HouseInformationsInside.prototype.getTypeId = function () {
        return HouseInformationsInside.ID;
    };
    HouseInformationsInside.prototype.reset = function () {
        this.houseId = 0;
        this.modelId = 0;
        this.ownerId = 0;
        this.ownerName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.price = 0;
        this.isLocked = false;
    };
    HouseInformationsInside.prototype.serialize = function (param1) {
        this.serializeAs_HouseInformationsInside(param1);
    };
    HouseInformationsInside.prototype.serializeAs_HouseInformationsInside = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarShort(this.modelId);
        param1.writeInt(this.ownerId);
        param1.writeUTF(this.ownerName);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeInt(this.price);
        param1.writeBoolean(this.isLocked);
    };
    HouseInformationsInside.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseInformationsInside(param1);
    };
    HouseInformationsInside.prototype.deserializeAs_HouseInformationsInside = function (param1) {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformationsInside.houseId.');
        }
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformationsInside.modelId.');
        }
        this.ownerId = param1.readInt();
        this.ownerName = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of HouseInformationsInside.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of HouseInformationsInside.worldY.');
        }
        this.price = param1.readInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of HouseInformationsInside.price.');
        }
        this.isLocked = param1.readBoolean();
    };
    HouseInformationsInside.ID = 218;
    return HouseInformationsInside;
})();
module.exports = HouseInformationsInside;
