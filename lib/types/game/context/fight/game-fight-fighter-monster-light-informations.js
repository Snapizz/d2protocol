var GameFightFighterMonsterLightInformations = function() {
    this.creatureGenericId = 0;
};

require('util').inherits(GameFightFighterMonsterLightInformations, require('./game-fight-fighter-light-informations.js').class);

GameFightFighterMonsterLightInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightFighterMonsterLightInformations(output);
};

GameFightFighterMonsterLightInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightFighterMonsterLightInformations(input);
};

GameFightFighterMonsterLightInformations.prototype.serializeAs_GameFightFighterMonsterLightInformations = function(param1) {
    this.serializeAs_GameFightFighterLightInformationsAs_GameFightFighterLightInformations(param1);
    if (this.creatureGenericId < 0) {
        throw new Error("Forbidden value (" + this.creatureGenericId + ") on element creatureGenericId.");
    } else {
        param1.writeVarShort(this.creatureGenericId);
        return;
    }
};

GameFightFighterMonsterLightInformations.prototype.deserializeAs_GameFightFighterMonsterLightInformations = function(param1) {
    this.deserializeAs_GameFightFighterLightInformations(param1);
    this.creatureGenericId = param1.readVarUhShort();
    if (this.creatureGenericId < 0) {
        throw new Error("Forbidden value (" + this.creatureGenericId + ") on element of GameFightFighterMonsterLightInformations.creatureGenericId.");
    } else {
        return;
    }
};

GameFightFighterMonsterLightInformations.prototype.getTypeId = function() {
    return 455;
};

GameFightFighterMonsterLightInformations.prototype.getClassName = function() {
    return 'GameFightFighterMonsterLightInformations';
};

module.exports.id = 455;
module.exports.class = GameFightFighterMonsterLightInformations;
module.exports.getInstance = function() {
    return new GameFightFighterMonsterLightInformations;
};