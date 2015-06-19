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
  output.writeInt(this.slaveId);
  output.writeShort(this.spellCooldowns.length);
  var _i2;
  while (_i2 < this.spellCooldowns.length) {
    (this.spellCooldowns[_i2]).serializeAs_GameFightSpellCooldown(output);
    _i2++;
  };
  if (this.summonCount < 0) {
    throw (new Error((("Forbidden value (" + this.summonCount) + ") on element summonCount.")));
  };
  output.writeByte(this.summonCount);
  if (this.bombCount < 0) {
    throw (new Error((("Forbidden value (" + this.bombCount) + ") on element bombCount.")));
  };
  output.writeByte(this.bombCount);
};

GameFightResumeSlaveInfo.prototype.deserializeAs_GameFightResumeSlaveInfo = function(input) {
  var _item2;
  this.slaveId = input.readInt();
  var _spellCooldownsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _spellCooldownsLen) {
    _item2 = new GameFightSpellCooldown();
    _item2.deserialize(input);
    this.spellCooldowns.push(_item2);
    _i2++;
  };
  this.summonCount = input.readByte();
  if (this.summonCount < 0) {
    throw (new Error((("Forbidden value (" + this.summonCount) + ") on element of GameFightResumeSlaveInfo.summonCount.")));
  };
  this.bombCount = input.readByte();
  if (this.bombCount < 0) {
    throw (new Error((("Forbidden value (" + this.bombCount) + ") on element of GameFightResumeSlaveInfo.bombCount.")));
  };
};

GameFightResumeSlaveInfo.prototype.getTypeId = function() {
  return 364;
};

GameFightResumeSlaveInfo.prototype.getClassName = function() {
  return 'GameFightResumeSlaveInfo';
};

module.exports.id = 364;
module.exports.class = GameFightResumeSlaveInfo;