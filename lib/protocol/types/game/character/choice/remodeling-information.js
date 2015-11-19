/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var RemodelingInformation = (function () {
    function RemodelingInformation() {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.cosmeticId = 0;
        this.colors = [];
    }
    RemodelingInformation.prototype.getTypeId = function () {
        return RemodelingInformation.ID;
    };
    RemodelingInformation.prototype.reset = function () {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.cosmeticId = 0;
        this.colors = [];
    };
    RemodelingInformation.prototype.serialize = function (param1) {
        this.serializeAs_RemodelingInformation(param1);
    };
    RemodelingInformation.prototype.serializeAs_RemodelingInformation = function (param1) {
        param1.writeUTF(this.name);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarShort(this.cosmeticId);
        param1.writeShort(this.colors.length);
        var _loc2_ = 0;
        while (_loc2_ < this.colors.length) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }
    };
    RemodelingInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_RemodelingInformation(param1);
    };
    RemodelingInformation.prototype.deserializeAs_RemodelingInformation = function (param1) {
        var _loc4_ = 0;
        this.name = param1.readUTF();
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        this.cosmeticId = param1.readVarUhShort();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of RemodelingInformation.cosmeticId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.colors.push(_loc4_);
            _loc3_++;
        }
    };
    RemodelingInformation.ID = 480;
    return RemodelingInformation;
})();
module.exports = RemodelingInformation;
