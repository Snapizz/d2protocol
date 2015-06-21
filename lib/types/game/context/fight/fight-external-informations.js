var FightExternalInformations = module.exports = function() {
    this.fightId = 0;
    this.fightType = 0;
    this.fightStart = 0;
    this.fightSpectatorLocked = false;
    this.fightTeams = [];
    this.fightTeamsOptions = [];

    return this;
};

FightExternalInformations.prototype.serialize = function(output) {
    this.serializeAs_FightExternalInformations(output);
};

FightExternalInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightExternalInformations(input);
};

FightExternalInformations.prototype.serializeAs_FightExternalInformations = function(param1) {
    param1.writeInt(this.fightId);
    param1.writeByte(this.fightType);
    if (this.fightStart < 0) {
        throw new Error("Forbidden value (" + this.fightStart + ") on element fightStart.");
    } else {
        param1.writeInt(this.fightStart);
        param1.writeBoolean(this.fightSpectatorLocked);
        var _loc2_ = 0;
        while (_loc2_ < 2) {
            this.fightTeams[_loc2_].serializeAs_FightTeamLightInformations(param1);
            _loc2_++;
        }
        var _loc3_ = 0;
        while (_loc3_ < 2) {
            this.fightTeamsOptions[_loc3_].serializeAs_FightOptionsInformations(param1);
            _loc3_++;
        }
        return;
    }
};

FightExternalInformations.prototype.deserializeAs_FightExternalInformations = function(param1) {
    this.fightId = param1.readInt();
    this.fightType = param1.readByte();
    if (this.fightType < 0) {
        throw new Error("Forbidden value (" + this.fightType + ") on element of FightExternalInformations.fightType.");
    } else {
        this.fightStart = param1.readInt();
        if (this.fightStart < 0) {
            throw new Error("Forbidden value (" + this.fightStart + ") on element of FightExternalInformations.fightStart.");
        } else {
            this.fightSpectatorLocked = param1.readBoolean();
            var _loc2_ = 0;
            while (_loc2_ < 2) {
                this.fightTeams[_loc2_] = new FightTeamLightInformations();
                this.fightTeams[_loc2_].deserialize(param1);
                _loc2_++;
            }
            var _loc3_ = 0;
            while (_loc3_ < 2) {
                this.fightTeamsOptions[_loc3_] = new FightOptionsInformations();
                this.fightTeamsOptions[_loc3_].deserialize(param1);
                _loc3_++;
            }
            return;
        }
    }
};

FightExternalInformations.prototype.getTypeId = function() {
    return 117;
};

FightExternalInformations.prototype.getClassName = function() {
    return 'FightExternalInformations';
};

module.exports.id = 117;