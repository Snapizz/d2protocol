var DungeonPartyFinderPlayer = function() {
  this.playerId = 0;
  this.playerName = "";
  this.breed = 0;
  this.sex = false;
  this.level = 0;
};



DungeonPartyFinderPlayer.prototype.serialize = function(output) {
  this.serializeAs_DungeonPartyFinderPlayer(output);
};

DungeonPartyFinderPlayer.prototype.deserialize = function(input) {
  this.deserializeAs_DungeonPartyFinderPlayer(input);
};

DungeonPartyFinderPlayer.prototype.serializeAs_DungeonPartyFinderPlayer = function(output) {
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeUTF(this.playerName);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
};

DungeonPartyFinderPlayer.prototype.deserializeAs_DungeonPartyFinderPlayer = function(input) {
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of DungeonPartyFinderPlayer.playerId.")));
  };
  this.playerName = input.readUTF();
  this.breed = input.readByte();
  if ((((this.breed < PlayableBreedEnum.Feca)) || ((this.breed > PlayableBreedEnum.Eliatrope)))) {
    throw (new Error((("Forbidden value (" + this.breed) + ") on element of DungeonPartyFinderPlayer.breed.")));
  };
  this.sex = input.readBoolean();
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of DungeonPartyFinderPlayer.level.")));
  };
};

DungeonPartyFinderPlayer.prototype.getTypeId = function() {
  return 373;
};

DungeonPartyFinderPlayer.prototype.getClassName = function() {
  return 'DungeonPartyFinderPlayer';
};

module.exports.id = 373;
module.exports.class = DungeonPartyFinderPlayer;