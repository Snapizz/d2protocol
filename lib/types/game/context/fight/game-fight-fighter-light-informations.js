var GameFightFighterLightInformations = function() {
  this.id = 0;
  this.wave = 0;
  this.level = 0;
  this.breed = 0;
  this.sex = false;
  this.alive = false;
};



GameFightFighterLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterLightInformations(output);
};

GameFightFighterLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterLightInformations(input);
};

GameFightFighterLightInformations.prototype.serializeAs_GameFightFighterLightInformations = function(output) {
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.sex);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.alive);
  output.writeByte(_box0);
  output.writeInt(this.id);
  if (this.wave < 0) {
    throw (new Error((("Forbidden value (" + this.wave) + ") on element wave.")));
  };
  output.writeByte(this.wave);
  if (this.level < 0) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeVarShort(this.level);
  output.writeByte(this.breed);
};

GameFightFighterLightInformations.prototype.deserializeAs_GameFightFighterLightInformations = function(input) {
  var _box0 = input.readByte();
  this.sex = BooleanByteWrapper.getFlag(_box0, 0);
  this.alive = BooleanByteWrapper.getFlag(_box0, 1);
  this.id = input.readInt();
  this.wave = input.readByte();
  if (this.wave < 0) {
    throw (new Error((("Forbidden value (" + this.wave) + ") on element of GameFightFighterLightInformations.wave.")));
  };
  this.level = input.readVarUhShort();
  if (this.level < 0) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of GameFightFighterLightInformations.level.")));
  };
  this.breed = input.readByte();
};

GameFightFighterLightInformations.prototype.getTypeId = function() {
  return 413;
};

GameFightFighterLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterLightInformations';
};

module.exports.id = 413;
module.exports.class = GameFightFighterLightInformations;