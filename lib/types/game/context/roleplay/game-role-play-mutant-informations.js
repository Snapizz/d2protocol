var GameRolePlayMutantInformations = module.exports = function() {
    this.monsterId = 0;
    this.powerLevel = 0;

    return this;
};

require('util').inherits(GameRolePlayMutantInformations, require('./game-role-play-humanoid-informations.js'));

GameRolePlayMutantInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayMutantInformations(output);
};

GameRolePlayMutantInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayMutantInformations(input);
};

GameRolePlayMutantInformations.prototype.serializeAs_GameRolePlayMutantInformations = function(param1) {
    this.serializeAs_GameRolePlayHumanoidInformations(param1);
    if (this.monsterId < 0) {
        throw new Error("Forbidden value (" + this.monsterId + ") on element monsterId.");
    } else {
        param1.writeVarShort(this.monsterId);
        param1.writeByte(this.powerLevel);
        return;
    }
};

GameRolePlayMutantInformations.prototype.deserializeAs_GameRolePlayMutantInformations = function(param1) {
    this.deserializeAs_GameRolePlayHumanoidInformations(param1);
    this.monsterId = param1.readVarUhShort();
    if (this.monsterId < 0) {
        throw new Error("Forbidden value (" + this.monsterId + ") on element of GameRolePlayMutantInformations.monsterId.");
    } else {
        this.powerLevel = param1.readByte();
        return;
    }
};

GameRolePlayMutantInformations.prototype.getTypeId = function() {
    return 3;
};

GameRolePlayMutantInformations.prototype.getClassName = function() {
    return 'GameRolePlayMutantInformations';
};

module.exports.id = 3;