var FightAllianceTeamInformations = function() {
    this.relation = 0;
};

require('util').inherits(FightAllianceTeamInformations, require('./fight-team-informations.js').class);

FightAllianceTeamInformations.prototype.serialize = function(output) {
    this.serializeAs_FightAllianceTeamInformations(output);
};

FightAllianceTeamInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightAllianceTeamInformations(input);
};

FightAllianceTeamInformations.prototype.serializeAs_FightAllianceTeamInformations = function(param1) {
    this.serializeAs_FightTeamInformationsAs_FightTeamInformations(param1);
    param1.writeByte(this.relation);
};

FightAllianceTeamInformations.prototype.deserializeAs_FightAllianceTeamInformations = function(param1) {
    this.deserializeAs_FightTeamInformations(param1);
    this.relation = param1.readByte();
    if (this.relation < 0) {
        throw new Error("Forbidden value (" + this.relation + ") on element of FightAllianceTeamInformations.relation.");
    } else {
        return;
    }
};

FightAllianceTeamInformations.prototype.getTypeId = function() {
    return 439;
};

FightAllianceTeamInformations.prototype.getClassName = function() {
    return 'FightAllianceTeamInformations';
};

module.exports.id = 439;
module.exports.class = FightAllianceTeamInformations;
module.exports.getInstance = function() {
    return new FightAllianceTeamInformations;
};