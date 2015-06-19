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

GameFightSpellCooldown.prototype.serializeAs_GameFightSpellCooldown = function(output) {
  output.writeInt(this.spellId);
  if (this.cooldown < 0) {
    throw (new Error((("Forbidden value (" + this.cooldown) + ") on element cooldown.")));
  };
  output.writeByte(this.cooldown);
};

GameFightSpellCooldown.prototype.deserializeAs_GameFightSpellCooldown = function(input) {
  this.spellId = input.readInt();
  this.cooldown = input.readByte();
  if (this.cooldown < 0) {
    throw (new Error((("Forbidden value (" + this.cooldown) + ") on element of GameFightSpellCooldown.cooldown.")));
  };
};

GameFightSpellCooldown.prototype.getTypeId = function() {
  return 205;
};

GameFightSpellCooldown.prototype.getClassName = function() {
  return 'GameFightSpellCooldown';
};

module.exports.id = 205;
module.exports.class = GameFightSpellCooldown;