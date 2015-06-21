var GameFightMutantInformations = function() {
    this.powerLevel = 0;
};

require('util').inherits(GameFightMutantInformations, require('./game-fight-fighter-named-informations.js').class);

GameFightMutantInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightMutantInformations(output);
};

GameFightMutantInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightMutantInformations(input);
};

GameFightMutantInformations.prototype.serializeAs_GameFightMutantInformations = function(param1) {
    this.serializeAs_GameFightFighterNamedInformationsAs_GameFightFighterNamedInformations(param1);
    if (this.powerLevel < 0) {
        throw new Error("Forbidden value (" + this.powerLevel + ") on element powerLevel.");
    } else {
        param1.writeByte(this.powerLevel);
        return;
    }
};

GameFightMutantInformations.prototype.deserializeAs_GameFightMutantInformations = function(param1) {
    this.deserializeAs_GameFightFighterNamedInformations(param1);
    this.powerLevel = param1.readByte();
    if (this.powerLevel < 0) {
        throw new Error("Forbidden value (" + this.powerLevel + ") on element of GameFightMutantInformations.powerLevel.");
    } else {
        return;
    }
};

GameFightMutantInformations.prototype.getTypeId = function() {
    return 50;
};

GameFightMutantInformations.prototype.getClassName = function() {
    return 'GameFightMutantInformations';
};

module.exports.id = 50;
module.exports.class = GameFightMutantInformations;
module.exports.getInstance = function() {
    return new GameFightMutantInformations;
};