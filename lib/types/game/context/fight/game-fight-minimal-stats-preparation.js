var GameFightMinimalStatsPreparation = function() {
  this.initiative = 0;
};



GameFightMinimalStatsPreparation.prototype.serialize = function(output) {
  this.serializeAs_GameFightMinimalStatsPreparation(output);
};

GameFightMinimalStatsPreparation.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMinimalStatsPreparation(input);
};

GameFightMinimalStatsPreparation.prototype.serializeAs_GameFightMinimalStatsPreparation = function(output) {
  this.serializeAs_GameFightMinimalStats(param1);
  if (this.initiative < 0) {
    throw new Error("Forbidden value (" + this.initiative + ") on element initiative.");
  } else {
    param1.writeVarInt(this.initiative);
    return;
  }
};

GameFightMinimalStatsPreparation.prototype.deserializeAs_GameFightMinimalStatsPreparation = function(input) {
  this.deserialize(param1);
  this.initiative = param1.readVarUhInt();
  if (this.initiative < 0) {
    throw new Error("Forbidden value (" + this.initiative + ") on element of GameFightMinimalStatsPreparation.initiative.");
  } else {
    return;
  }
};

GameFightMinimalStatsPreparation.prototype.getTypeId = function() {
  return 360;
};

GameFightMinimalStatsPreparation.prototype.getClassName = function() {
  return 'GameFightMinimalStatsPreparation';
};

module.exports.id = 360;
module.exports.class = GameFightMinimalStatsPreparation;