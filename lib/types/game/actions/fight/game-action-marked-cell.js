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

GameActionMarkedCell.prototype.serializeAs_GameActionMarkedCell = function(output) {
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
  output.writeByte(this.zoneSize);
  output.writeInt(this.cellColor);
  output.writeByte(this.cellsType);
};

GameActionMarkedCell.prototype.deserializeAs_GameActionMarkedCell = function(input) {
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionMarkedCell.cellId.")));
  };
  this.zoneSize = input.readByte();
  this.cellColor = input.readInt();
  this.cellsType = input.readByte();
};

GameActionMarkedCell.prototype.getTypeId = function() {
  return 85;
};

GameActionMarkedCell.prototype.getClassName = function() {
  return 'GameActionMarkedCell';
};

module.exports.id = 85;
module.exports.class = GameActionMarkedCell;