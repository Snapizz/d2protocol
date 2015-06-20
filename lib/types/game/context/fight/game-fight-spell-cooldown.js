var GameFightSpellCooldown = function() {
  this.spellId = 0;
  this.cooldown = 0;
};



GameFightSpellCooldown.prototype.serialize = function(output) {
  this.serializeAs_GameFightSpellCooldown(output);
};

GameFightSpellCooldown.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightSpellCooldown(input);
};

GameFightSpellCooldown.prototype.serializeAs_GameFightSpellCooldown = function(param1) {
  param1.writeInt(this.spellId);
  if (this.cooldown < 0) {
    throw new Error("Forbidden value (" + this.cooldown + ") on element cooldown.");
  } else {
    param1.writeByte(this.cooldown);
    return;
  }
};

GameFightSpellCooldown.prototype.deserializeAs_GameFightSpellCooldown = function(param1) {
  this.spellId = param1.readInt();
  this.cooldown = param1.readByte();
  if (this.cooldown < 0) {
    throw new Error("Forbidden value (" + this.cooldown + ") on element of GameFightSpellCooldown.cooldown.");
  } else {
    return;
  }
};

GameFightSpellCooldown.prototype.getTypeId = function() {
  return 205;
};

GameFightSpellCooldown.prototype.getClassName = function() {
  return 'GameFightSpellCooldown';
};

module.exports.id = 205;
module.exports.class = GameFightSpellCooldown;
module.exports.getInstance = function() {
  return new GameFightSpellCooldown();
};