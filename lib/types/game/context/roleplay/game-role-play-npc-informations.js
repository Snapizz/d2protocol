var GameRolePlayNpcInformations = function() {
    this.npcId = 0;
    this.sex = false;
    this.specialArtworkId = 0;
};

require('util').inherits(GameRolePlayNpcInformations, require('./game-role-play-actor-informations.js'));

module.exports = function() {
    return new GameRolePlayNpcInformations();
};

GameRolePlayNpcInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayNpcInformations(output);
};

GameRolePlayNpcInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayNpcInformations(input);
};

GameRolePlayNpcInformations.prototype.serializeAs_GameRolePlayNpcInformations = function(param1) {
    this.serializeAs_GameRolePlayActorInformations(param1);
    if (this.npcId < 0) {
        throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
    } else {
        param1.writeVarShort(this.npcId);
        param1.writeBoolean(this.sex);
        if (this.specialArtworkId < 0) {
            throw new Error("Forbidden value (" + this.specialArtworkId + ") on element specialArtworkId.");
        } else {
            param1.writeVarShort(this.specialArtworkId);
            return;
        }
    }
};

GameRolePlayNpcInformations.prototype.deserializeAs_GameRolePlayNpcInformations = function(param1) {
    this.deserializeAs_GameRolePlayActorInformations(param1);
    this.npcId = param1.readVarUhShort();
    if (this.npcId < 0) {
        throw new Error("Forbidden value (" + this.npcId + ") on element of GameRolePlayNpcInformations.npcId.");
    } else {
        this.sex = param1.readBoolean();
        this.specialArtworkId = param1.readVarUhShort();
        if (this.specialArtworkId < 0) {
            throw new Error("Forbidden value (" + this.specialArtworkId + ") on element of GameRolePlayNpcInformations.specialArtworkId.");
        } else {
            return;
        }
    }
};

GameRolePlayNpcInformations.prototype.getTypeId = function() {
    return 156;
};

GameRolePlayNpcInformations.prototype.getClassName = function() {
    return 'GameRolePlayNpcInformations';
};

module.exports.id = 156;
module.exports.GameRolePlayNpcInformations = GameRolePlayNpcInformations;