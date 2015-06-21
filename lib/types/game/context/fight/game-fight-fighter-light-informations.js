var GameFightFighterLightInformations = module.exports = function() {
    this.id = 0;
    this.wave = 0;
    this.level = 0;
    this.breed = 0;
    this.sex = false;
    this.alive = false;

    return this;
};

GameFightFighterLightInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightFighterLightInformations(output);
};

GameFightFighterLightInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightFighterLightInformations(input);
};

GameFightFighterLightInformations.prototype.serializeAs_GameFightFighterLightInformations = function(param1) {
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.sex);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.alive);
    param1.writeByte(_loc2_);
    param1.writeInt(this.id);
    if (this.wave < 0) {
        throw new Error("Forbidden value (" + this.wave + ") on element wave.");
    } else {
        param1.writeByte(this.wave);
        if (this.level < 0) {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        } else {
            param1.writeVarShort(this.level);
            param1.writeByte(this.breed);
            return;
        }
    }
};

GameFightFighterLightInformations.prototype.deserializeAs_GameFightFighterLightInformations = function(param1) {
    var _loc2_ = param1.readByte();
    this.sex = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.alive = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.id = param1.readInt();
    this.wave = param1.readByte();
    if (this.wave < 0) {
        throw new Error("Forbidden value (" + this.wave + ") on element of GameFightFighterLightInformations.wave.");
    } else {
        this.level = param1.readVarUhShort();
        if (this.level < 0) {
            throw new Error("Forbidden value (" + this.level + ") on element of GameFightFighterLightInformations.level.");
        } else {
            this.breed = param1.readByte();
            return;
        }
    }
};

GameFightFighterLightInformations.prototype.getTypeId = function() {
    return 413;
};

GameFightFighterLightInformations.prototype.getClassName = function() {
    return 'GameFightFighterLightInformations';
};

module.exports.id = 413;