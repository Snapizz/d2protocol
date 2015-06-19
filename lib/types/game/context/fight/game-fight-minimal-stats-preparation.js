var BaseMessage = require('./game-fight-minimal-stats.js').class,
  util = require('util');

var GameFightMinimalStatsPreparation = function() {
  this.initiative = 0;
};

util.inherits(GameFightMinimalStatsPreparation, BaseMessage);

GameFightMinimalStatsPreparation.prototype.serialize = function(output) {
  this.serializeAs_GameFightMinimalStatsPreparation(output);
};

GameFightMinimalStatsPreparation.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMinimalStatsPreparation(input);
};

GameFightMinimalStatsPreparation.prototype.serializeAs_GameFightMinimalStatsPreparation = function(output) {
  this.serializeAs_GameFightMinimalStats(output);
  if (this.initiative < 0) {
    throw (new Error((("Forbidden value (" + this.initiative) + ") on element initiative.")));
  };
  output.writeVarInt(this.initiative);
};

GameFightMinimalStatsPreparation.prototype.deserializeAs_GameFightMinimalStatsPreparation = function(input) {
  this.deserialize(input);
  this.initiative = input.readVarUhInt();
  if (this.initiative < 0) {
    throw (new Error((("Forbidden value (" + this.initiative) + ") on element of GameFightMinimalStatsPreparation.initiative.")));
  };
};

GameFightMinimalStatsPreparation.prototype.getTypeId = function() {
  return 360;
};

GameFightMinimalStatsPreparation.prototype.getClassName = function() {
  return 'GameFightMinimalStatsPreparation';
};

module.exports.id = 360;
module.exports.class = GameFightMinimalStatsPreparation;