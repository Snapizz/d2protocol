var AbstractFightTeamInformations = function() {
    this.teamId = 2;
    this.leaderId = 0;
    this.teamSide = 0;
    this.teamTypeId = 0;
    this.nbWaves = 0;
};

AbstractFightTeamInformations.prototype.serialize = function(output) {
    this.serializeAs_AbstractFightTeamInformations(output);
};

AbstractFightTeamInformations.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractFightTeamInformations(input);
};

AbstractFightTeamInformations.prototype.serializeAs_AbstractFightTeamInformations = function(param1) {
    param1.writeByte(this.teamId);
    param1.writeInt(this.leaderId);
    param1.writeByte(this.teamSide);
    param1.writeByte(this.teamTypeId);
    if (this.nbWaves < 0) {
        throw new Error("Forbidden value (" + this.nbWaves + ") on element nbWaves.");
    } else {
        param1.writeByte(this.nbWaves);
        return;
    }
};

AbstractFightTeamInformations.prototype.deserializeAs_AbstractFightTeamInformations = function(param1) {
    this.teamId = param1.readByte();
    if (this.teamId < 0) {
        throw new Error("Forbidden value (" + this.teamId + ") on element of AbstractFightTeamInformations.teamId.");
    } else {
        this.leaderId = param1.readInt();
        this.teamSide = param1.readByte();
        this.teamTypeId = param1.readByte();
        if (this.teamTypeId < 0) {
            throw new Error("Forbidden value (" + this.teamTypeId + ") on element of AbstractFightTeamInformations.teamTypeId.");
        } else {
            this.nbWaves = param1.readByte();
            if (this.nbWaves < 0) {
                throw new Error("Forbidden value (" + this.nbWaves + ") on element of AbstractFightTeamInformations.nbWaves.");
            } else {
                return;
            }
        }
    }
};

AbstractFightTeamInformations.prototype.getTypeId = function() {
    return 116;
};

AbstractFightTeamInformations.prototype.getClassName = function() {
    return 'AbstractFightTeamInformations';
};

module.exports.id = 116;
module.exports.class = AbstractFightTeamInformations;
module.exports.getInstance = function() {
    return new AbstractFightTeamInformations;
};