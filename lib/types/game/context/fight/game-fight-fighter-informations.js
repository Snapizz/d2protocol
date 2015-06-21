var GameFightFighterInformations = function() {
    this.teamId = 2;
    this.wave = 0;
    this.alive = false;
    this.stats = new GameFightMinimalStats();
    this.previousPositions = [];
};

require('util').inherits(GameFightFighterInformations, require('../game-context-actor-informations.js').GameContextActorInformations);

module.exports = function() {
    return new GameFightFighterInformations();
};

GameFightFighterInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightFighterInformations(output);
};

GameFightFighterInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightFighterInformations(input);
};

GameFightFighterInformations.prototype.serializeAs_GameFightFighterInformations = function(param1) {
    this.serializeAs_GameContextActorInformations(param1);
    param1.writeByte(this.teamId);
    if (this.wave < 0) {
        throw new Error("Forbidden value (" + this.wave + ") on element wave.");
    } else {
        param1.writeByte(this.wave);
        param1.writeBoolean(this.alive);
        param1.writeShort(this.stats.getTypeId());
        this.stats.serialize(param1);
        param1.writeShort(this.previousPositions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.previousPositions.length) {
            if (this.previousPositions[_loc2_] < 0 || this.previousPositions[_loc2_] > 559) {
                throw new Error("Forbidden value (" + this.previousPositions[_loc2_] + ") on element 5 (starting at 1) of previousPositions.");
            } else {
                param1.writeVarShort(this.previousPositions[_loc2_]);
                _loc2_++;
                continue;
            }
        }
        return;
    }
};

GameFightFighterInformations.prototype.deserializeAs_GameFightFighterInformations = function(param1) {
    var _loc5_ = 0;
    this.deserializeAs_GameContextActorInformations(param1);
    this.teamId = param1.readByte();
    if (this.teamId < 0) {
        throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightFighterInformations.teamId.");
    } else {
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error("Forbidden value (" + this.wave + ") on element of GameFightFighterInformations.wave.");
        } else {
            this.alive = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            this.stats = ProtocolTypeManager.getInstance(GameFightMinimalStats, _loc2_);
            this.stats.deserialize(param1);
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = param1.readVarUhShort();
                if (_loc5_ < 0 || _loc5_ > 559) {
                    throw new Error("Forbidden value (" + _loc5_ + ") on elements of previousPositions.");
                } else {
                    this.previousPositions.push(_loc5_);
                    _loc4_++;
                    continue;
                }
            }
            return;
        }
    }
};

GameFightFighterInformations.prototype.getTypeId = function() {
    return 143;
};

GameFightFighterInformations.prototype.getClassName = function() {
    return 'GameFightFighterInformations';
};

module.exports.id = 143;
module.exports.GameFightFighterInformations = GameFightFighterInformations;