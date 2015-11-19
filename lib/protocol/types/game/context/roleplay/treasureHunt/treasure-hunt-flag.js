/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var TreasureHuntFlag = (function () {
    function TreasureHuntFlag() {
        this.mapId = 0;
        this.state = 0;
    }
    TreasureHuntFlag.prototype.getTypeId = function () {
        return TreasureHuntFlag.ID;
    };
    TreasureHuntFlag.prototype.reset = function () {
        this.mapId = 0;
        this.state = 0;
    };
    TreasureHuntFlag.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntFlag(param1);
    };
    TreasureHuntFlag.prototype.serializeAs_TreasureHuntFlag = function (param1) {
        param1.writeInt(this.mapId);
        param1.writeByte(this.state);
    };
    TreasureHuntFlag.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntFlag(param1);
    };
    TreasureHuntFlag.prototype.deserializeAs_TreasureHuntFlag = function (param1) {
        this.mapId = param1.readInt();
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of TreasureHuntFlag.state.');
        }
    };
    TreasureHuntFlag.ID = 473;
    return TreasureHuntFlag;
})();
module.exports = TreasureHuntFlag;
