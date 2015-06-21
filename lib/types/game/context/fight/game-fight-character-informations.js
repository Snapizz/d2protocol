var GameFightCharacterInformations = function() {
    this.level = 0;
    this.alignmentInfos = new ActorAlignmentInformations();
    this.breed = 0;
    this.sex = false;
};

require('util').inherits(GameFightCharacterInformations, require('./game-fight-fighter-named-informations.js'));

module.exports = function() {
    return new GameFightCharacterInformations();
};

GameFightCharacterInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightCharacterInformations(output);
};

GameFightCharacterInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightCharacterInformations(input);
};

GameFightCharacterInformations.prototype.serializeAs_GameFightCharacterInformations = function(param1) {
    this.serializeAs_GameFightFighterNamedInformations(param1);
    if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element level.");
    } else {
        param1.writeByte(this.level);
        this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        return;
    }
};

GameFightCharacterInformations.prototype.deserializeAs_GameFightCharacterInformations = function(param1) {
    this.deserializeAs_GameFightFighterNamedInformations(param1);
    this.level = param1.readUnsignedByte();
    if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element of GameFightCharacterInformations.level.");
    } else {
        this.alignmentInfos = new ActorAlignmentInformations();
        this.alignmentInfos.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        return;
    }
};

GameFightCharacterInformations.prototype.getTypeId = function() {
    return 46;
};

GameFightCharacterInformations.prototype.getClassName = function() {
    return 'GameFightCharacterInformations';
};

module.exports.id = 46;
module.exports.GameFightCharacterInformations = GameFightCharacterInformations;