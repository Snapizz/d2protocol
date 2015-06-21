var FightTeamMemberMonsterInformations = function() {
    this.monsterId = 0;
    this.grade = 0;
};

require('util').inherits(FightTeamMemberMonsterInformations, require('./fight-team-member-informations.js').class);

FightTeamMemberMonsterInformations.prototype.serialize = function(output) {
    this.serializeAs_FightTeamMemberMonsterInformations(output);
};

FightTeamMemberMonsterInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightTeamMemberMonsterInformations(input);
};

FightTeamMemberMonsterInformations.prototype.serializeAs_FightTeamMemberMonsterInformations = function(param1) {
    this.serializeAs_FightTeamMemberInformationsAs_FightTeamMemberInformations(param1);
    param1.writeInt(this.monsterId);
    if (this.grade < 0) {
        throw new Error("Forbidden value (" + this.grade + ") on element grade.");
    } else {
        param1.writeByte(this.grade);
        return;
    }
};

FightTeamMemberMonsterInformations.prototype.deserializeAs_FightTeamMemberMonsterInformations = function(param1) {
    this.deserializeAs_FightTeamMemberInformations(param1);
    this.monsterId = param1.readInt();
    this.grade = param1.readByte();
    if (this.grade < 0) {
        throw new Error("Forbidden value (" + this.grade + ") on element of FightTeamMemberMonsterInformations.grade.");
    } else {
        return;
    }
};

FightTeamMemberMonsterInformations.prototype.getTypeId = function() {
    return 6;
};

FightTeamMemberMonsterInformations.prototype.getClassName = function() {
    return 'FightTeamMemberMonsterInformations';
};

module.exports.id = 6;
module.exports.class = FightTeamMemberMonsterInformations;
module.exports.getInstance = function() {
    return new FightTeamMemberMonsterInformations;
};