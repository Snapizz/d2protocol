var GameActionMark = function() {
  this.markAuthorId = 0;
  this.markTeamId = 2;
  this.markSpellId = 0;
  this.markSpellLevel = 0;
  this.markId = 0;
  this.markType = 0;
  this.markimpactCell = 0;
  this.cells = [];
  this.active = false;
};



GameActionMark.prototype.serialize = function(output) {
  this.serializeAs_GameActionMark(output);
};

GameActionMark.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionMark(input);
};

GameActionMark.prototype.serializeAs_GameActionMark = function(output) {
  output.writeInt(this.markAuthorId);
  output.writeByte(this.markTeamId);
  if (this.markSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.markSpellId) + ") on element markSpellId.")));
  };
  output.writeInt(this.markSpellId);
  if ((((this.markSpellLevel < 1)) || ((this.markSpellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.markSpellLevel) + ") on element markSpellLevel.")));
  };
  output.writeByte(this.markSpellLevel);
  output.writeShort(this.markId);
  output.writeByte(this.markType);
  if ((((this.markimpactCell < -1)) || ((this.markimpactCell > 559)))) {
    throw (new Error((("Forbidden value (" + this.markimpactCell) + ") on element markimpactCell.")));
  };
  output.writeShort(this.markimpactCell);
  output.writeShort(this.cells.length);
  var _i8 = 0;
  while (_i8 < this.cells.length) {
    (this.cells[_i8]).serializeAs_GameActionMarkedCell(output);
    _i8++;
  };
  output.writeBoolean(this.active);
};

GameActionMark.prototype.deserializeAs_GameActionMark = function(input) {
  var _item8;
  this.markAuthorId = input.readInt();
  this.markTeamId = input.readByte();
  if (this.markTeamId < 0) {
    throw (new Error((("Forbidden value (" + this.markTeamId) + ") on element of GameActionMark.markTeamId.")));
  };
  this.markSpellId = input.readInt();
  if (this.markSpellId < 0) {
    throw (new Error((("Forbidden value (" + this.markSpellId) + ") on element of GameActionMark.markSpellId.")));
  };
  this.markSpellLevel = input.readByte();
  if ((((this.markSpellLevel < 1)) || ((this.markSpellLevel > 6)))) {
    throw (new Error((("Forbidden value (" + this.markSpellLevel) + ") on element of GameActionMark.markSpellLevel.")));
  };
  this.markId = input.readShort();
  this.markType = input.readByte();
  this.markimpactCell = input.readShort();
  if ((((this.markimpactCell < -1)) || ((this.markimpactCell > 559)))) {
    throw (new Error((("Forbidden value (" + this.markimpactCell) + ") on element of GameActionMark.markimpactCell.")));
  };
  var _cellsLen = input.readUnsignedShort();
  var _i8 = 0;
  while (_i8 < _cellsLen) {
    _item8 = new GameActionMarkedCell();
    _item8.deserialize(input);
    this.cells.push(_item8);
    _i8++;
  };
  this.active = input.readBoolean();
};

GameActionMark.prototype.getTypeId = function() {
  return 351;
};

GameActionMark.prototype.getClassName = function() {
  return 'GameActionMark';
};

module.exports.id = 351;
module.exports.class = GameActionMark;