var BaseMessage = require('./game-action-mark.js').class,
  util = require('util');

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

util.inherits(GameActionMark, BaseMessage);

GameActionMark.prototype.serialize = function(output) {
  this.serializeAs_GameActionMark(output);
};

GameActionMark.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionMark(input);
};

GameActionMark.prototype.serializeAs_GameActionMark = function(param1) {
  param1.writeInt(this.markAuthorId);
  param1.writeByte(this.markTeamId);
  if (this.markSpellId < 0) {
    throw new Error("Forbidden value (" + this.markSpellId + ") on element markSpellId.");
  } else {
    param1.writeInt(this.markSpellId);
    if (this.markSpellLevel < 1 || this.markSpellLevel > 6) {
      throw new Error("Forbidden value (" + this.markSpellLevel + ") on element markSpellLevel.");
    } else {
      param1.writeByte(this.markSpellLevel);
      param1.writeShort(this.markId);
      param1.writeByte(this.markType);
      if (this.markimpactCell < -1 || this.markimpactCell > 559) {
        throw new Error("Forbidden value (" + this.markimpactCell + ") on element markimpactCell.");
      } else {
        param1.writeShort(this.markimpactCell);
        param1.writeShort(this.cells.length);
        var _loc2_ = 0;
        while (_loc2_ < this.cells.length) {
          (this.cells[_loc2_]).serializeAs_GameActionMarkedCell(param1);
          _loc2_++;
        }
        param1.writeBoolean(this.active);
        return;
      }
    }
  }
};

GameActionMark.prototype.deserializeAs_GameActionMark = function(param1) {
  var _loc4_ = null;
  this.markAuthorId = param1.readInt();
  this.markTeamId = param1.readByte();
  if (this.markTeamId < 0) {
    throw new Error("Forbidden value (" + this.markTeamId + ") on element of GameActionMark.markTeamId.");
  } else {
    this.markSpellId = param1.readInt();
    if (this.markSpellId < 0) {
      throw new Error("Forbidden value (" + this.markSpellId + ") on element of GameActionMark.markSpellId.");
    } else {
      this.markSpellLevel = param1.readByte();
      if (this.markSpellLevel < 1 || this.markSpellLevel > 6) {
        throw new Error("Forbidden value (" + this.markSpellLevel + ") on element of GameActionMark.markSpellLevel.");
      } else {
        this.markId = param1.readShort();
        this.markType = param1.readByte();
        this.markimpactCell = param1.readShort();
        if (this.markimpactCell < -1 || this.markimpactCell > 559) {
          throw new Error("Forbidden value (" + this.markimpactCell + ") on element of GameActionMark.markimpactCell.");
        } else {
          var _loc2_ = param1.readUnsignedShort();
          var _loc3_ = 0;
          while (_loc3_ < _loc2_) {
            _loc4_ = new GameActionMarkedCell();
            _loc4_.deserialize(param1);
            this.cells.push(_loc4_);
            _loc3_++;
          }
          this.active = param1.readBoolean();
          return;
        }
      }
    }
  }
};

GameActionMark.prototype.getTypeId = function() {
  return 351;
};

GameActionMark.prototype.getClassName = function() {
  return 'GameActionMark';
};

module.exports.id = 351;
module.exports.class = GameActionMark;
module.exports.getInstance = function() {
  return new GameActionMark();
};