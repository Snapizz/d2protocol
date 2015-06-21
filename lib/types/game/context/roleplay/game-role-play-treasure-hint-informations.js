var GameRolePlayTreasureHintInformations = function() {
    this.npcId = 0;
};

require('util').inherits(GameRolePlayTreasureHintInformations, require('./game-role-play-actor-informations.js').GameRolePlayActorInformations);

module.exports = function() {
    return new GameRolePlayTreasureHintInformations();
};

GameRolePlayTreasureHintInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayTreasureHintInformations(output);
};

GameRolePlayTreasureHintInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayTreasureHintInformations(input);
};

GameRolePlayTreasureHintInformations.prototype.serializeAs_GameRolePlayTreasureHintInformations = function(param1) {
    this.serializeAs_GameRolePlayActorInformations(param1);
    if (this.npcId < 0) {
        throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
    } else {
        param1.writeVarShort(this.npcId);
        return;
    }
};

GameRolePlayTreasureHintInformations.prototype.deserializeAs_GameRolePlayTreasureHintInformations = function(param1) {
    this.deserializeAs_GameRolePlayActorInformations(param1);
    this.npcId = param1.readVarUhShort();
    if (this.npcId < 0) {
        throw new Error("Forbidden value (" + this.npcId + ") on element of GameRolePlayTreasureHintInformations.npcId.");
    } else {
        return;
    }
};

GameRolePlayTreasureHintInformations.prototype.getTypeId = function() {
    return 471;
};

GameRolePlayTreasureHintInformations.prototype.getClassName = function() {
    return 'GameRolePlayTreasureHintInformations';
};

module.exports.id = 471;
module.exports.GameRolePlayTreasureHintInformations = GameRolePlayTreasureHintInformations;