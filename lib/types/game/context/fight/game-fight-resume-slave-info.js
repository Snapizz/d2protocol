var GameFightResumeSlaveInfo = function() {
  this.slaveId = 0;
  this.spellCooldowns = [];
  this.summonCount = 0;
  this.bombCount = 0;
};



GameFightResumeSlaveInfo.prototype.serialize = function(output) {
  this.serializeAs_GameFightResumeSlaveInfo(output);
};

GameFightResumeSlaveInfo.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightResumeSlaveInfo(input);
};

GameFightResumeSlaveInfo.prototype.serializeAs_GameFightResumeSlaveInfo = function(output) {
  param1.writeInt(this.slaveId);
  param1.writeShort(this.spellCooldowns.length);
  var _loc2_ = 0;
  while (_loc2_ < this.spellCooldowns.length) {
    (this.spellCooldowns[_loc2_]).serializeAs_GameFightSpellCooldown(param1);
    _loc2_++;
  }
  if (this.summonCount < 0) {
    throw new Error("Forbidden value (" + this.summonCount + ") on element summonCount.");
  } else {
    param1.writeByte(this.summonCount);
    if (this.bombCount < 0) {
      throw new Error("Forbidden value (" + this.bombCount + ") on element bombCount.");
    } else {
      param1.writeByte(this.bombCount);
      return;
    }
  }
};

GameFightResumeSlaveInfo.prototype.deserializeAs_GameFightResumeSlaveInfo = function(input) {
  var _loc4_ = null;
  this.slaveId = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new GameFightSpellCooldown();
    _loc4_.deserialize(param1);
    this.spellCooldowns.push(_loc4_);
    _loc3_++;
  }
  this.summonCount = param1.readByte();
  if (this.summonCount < 0) {
    throw new Error("Forbidden value (" + this.summonCount + ") on element of GameFightResumeSlaveInfo.summonCount.");
  } else {
    this.bombCount = param1.readByte();
    if (this.bombCount < 0) {
      throw new Error("Forbidden value (" + this.bombCount + ") on element of GameFightResumeSlaveInfo.bombCount.");
    } else {
      return;
    }
  }
};

GameFightResumeSlaveInfo.prototype.getTypeId = function() {
  return 364;
};

GameFightResumeSlaveInfo.prototype.getClassName = function() {
  return 'GameFightResumeSlaveInfo';
};

module.exports.id = 364;
module.exports.class = GameFightResumeSlaveInfo;