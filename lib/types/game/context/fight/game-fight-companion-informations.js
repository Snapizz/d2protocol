var GameFightCompanionInformations = function() {
    this.companionGenericId = 0;
    this.level = 0;
    this.masterId = 0;
};

require('util').inherits(GameFightCompanionInformations, require('./game-fight-fighter-informations.js'));

module.exports = function() {
    return new GameFightCompanionInformations();
};

GameFightCompanionInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightCompanionInformations(output);
};

GameFightCompanionInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightCompanionInformations(input);
};

GameFightCompanionInformations.prototype.serializeAs_GameFightCompanionInformations = function(param1) {
    this.serializeAs_GameFightFighterInformations(param1);
    if (this.companionGenericId < 0) {
        throw new Error("Forbidden value (" + this.companionGenericId + ") on element companionGenericId.");
    } else {
        param1.writeByte(this.companionGenericId);
        if (this.level < 0 || this.level > 255) {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        } else {
            param1.writeByte(this.level);
            param1.writeInt(this.masterId);
            return;
        }
    }
};

GameFightCompanionInformations.prototype.deserializeAs_GameFightCompanionInformations = function(param1) {
    this.deserializeAs_GameFightFighterInformations(param1);
    this.companionGenericId = param1.readByte();
    if (this.companionGenericId < 0) {
        throw new Error("Forbidden value (" + this.companionGenericId + ") on element of GameFightCompanionInformations.companionGenericId.");
    } else {
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error("Forbidden value (" + this.level + ") on element of GameFightCompanionInformations.level.");
        } else {
            this.masterId = param1.readInt();
            return;
        }
    }
};

GameFightCompanionInformations.prototype.getTypeId = function() {
    return 450;
};

GameFightCompanionInformations.prototype.getClassName = function() {
    return 'GameFightCompanionInformations';
};

module.exports.id = 450;
module.exports.GameFightCompanionInformations = GameFightCompanionInformations;