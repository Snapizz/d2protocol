var GameFightMinimalStatsPreparation = function() {
    this.initiative = 0;
};

require('util').inherits(GameFightMinimalStatsPreparation, require('./game-fight-minimal-stats.js'));

module.exports = function() {
    return new GameFightMinimalStatsPreparation();
};

GameFightMinimalStatsPreparation.prototype.serialize = function(output) {
    this.serializeAs_GameFightMinimalStatsPreparation(output);
};

GameFightMinimalStatsPreparation.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightMinimalStatsPreparation(input);
};

GameFightMinimalStatsPreparation.prototype.serializeAs_GameFightMinimalStatsPreparation = function(param1) {
    this.serializeAs_GameFightMinimalStats(param1);
    if (this.initiative < 0) {
        throw new Error("Forbidden value (" + this.initiative + ") on element initiative.");
    } else {
        param1.writeVarInt(this.initiative);
        return;
    }
};

GameFightMinimalStatsPreparation.prototype.deserializeAs_GameFightMinimalStatsPreparation = function(param1) {
    this.deserializeAs_GameFightMinimalStats(param1);
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
module.exports.GameFightMinimalStatsPreparation = GameFightMinimalStatsPreparation;