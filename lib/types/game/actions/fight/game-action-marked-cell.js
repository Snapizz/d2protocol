var GameActionMarkedCell = function() {
    this.cellId = 0;
    this.zoneSize = 0;
    this.cellColor = 0;
    this.cellsType = 0;
};

GameActionMarkedCell.prototype.serialize = function(output) {
    this.serializeAs_GameActionMarkedCell(output);
};

GameActionMarkedCell.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionMarkedCell(input);
};

GameActionMarkedCell.prototype.serializeAs_GameActionMarkedCell = function(param1) {
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
    } else {
        param1.writeVarShort(this.cellId);
        param1.writeByte(this.zoneSize);
        param1.writeInt(this.cellColor);
        param1.writeByte(this.cellsType);
        return;
    }
};

GameActionMarkedCell.prototype.deserializeAs_GameActionMarkedCell = function(param1) {
    this.cellId = param1.readVarUhShort();
    if (this.cellId < 0 || this.cellId > 559) {
        throw new Error("Forbidden value (" + this.cellId + ") on element of GameActionMarkedCell.cellId.");
    } else {
        this.zoneSize = param1.readByte();
        this.cellColor = param1.readInt();
        this.cellsType = param1.readByte();
        return;
    }
};

GameActionMarkedCell.prototype.getTypeId = function() {
    return 85;
};

GameActionMarkedCell.prototype.getClassName = function() {
    return 'GameActionMarkedCell';
};

module.exports.id = 85;
module.exports.class = GameActionMarkedCell;
module.exports.getInstance = function() {
    return new GameActionMarkedCell;
};