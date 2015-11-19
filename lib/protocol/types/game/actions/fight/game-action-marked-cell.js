/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GameActionMarkedCell = (function () {
    function GameActionMarkedCell() {
        this.cellId = 0;
        this.zoneSize = 0;
        this.cellColor = 0;
        this.cellsType = 0;
    }
    GameActionMarkedCell.prototype.getTypeId = function () {
        return GameActionMarkedCell.ID;
    };
    GameActionMarkedCell.prototype.reset = function () {
        this.cellId = 0;
        this.zoneSize = 0;
        this.cellColor = 0;
        this.cellsType = 0;
    };
    GameActionMarkedCell.prototype.serialize = function (param1) {
        this.serializeAs_GameActionMarkedCell(param1);
    };
    GameActionMarkedCell.prototype.serializeAs_GameActionMarkedCell = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
        param1.writeByte(this.zoneSize);
        param1.writeInt(this.cellColor);
        param1.writeByte(this.cellsType);
    };
    GameActionMarkedCell.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionMarkedCell(param1);
    };
    GameActionMarkedCell.prototype.deserializeAs_GameActionMarkedCell = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionMarkedCell.cellId.');
        }
        this.zoneSize = param1.readByte();
        this.cellColor = param1.readInt();
        this.cellsType = param1.readByte();
    };
    GameActionMarkedCell.ID = 85;
    return GameActionMarkedCell;
})();
module.exports = GameActionMarkedCell;
