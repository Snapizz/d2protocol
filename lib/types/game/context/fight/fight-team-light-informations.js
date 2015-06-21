var FightTeamLightInformations = function() {
    this.teamMembersCount = 0;
    this.meanLevel = 0;
    this.hasFriend = false;
    this.hasGuildMember = false;
    this.hasAllianceMember = false;
    this.hasGroupMember = false;
    this.hasMyTaxCollector = false;
};

require('util').inherits(FightTeamLightInformations, require('./abstract-fight-team-informations.js'));

module.exports = function() {
    return new FightTeamLightInformations();
};

FightTeamLightInformations.prototype.serialize = function(output) {
    this.serializeAs_FightTeamLightInformations(output);
};

FightTeamLightInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightTeamLightInformations(input);
};

FightTeamLightInformations.prototype.serializeAs_FightTeamLightInformations = function(param1) {
    this.serializeAs_AbstractFightTeamInformations(param1);
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasFriend);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasGuildMember);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAllianceMember);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.hasGroupMember);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.hasMyTaxCollector);
    param1.writeByte(_loc2_);
    if (this.teamMembersCount < 0) {
        throw new Error("Forbidden value (" + this.teamMembersCount + ") on element teamMembersCount.");
    } else {
        param1.writeByte(this.teamMembersCount);
        if (this.meanLevel < 0) {
            throw new Error("Forbidden value (" + this.meanLevel + ") on element meanLevel.");
        } else {
            param1.writeVarInt(this.meanLevel);
            return;
        }
    }
};

FightTeamLightInformations.prototype.deserializeAs_FightTeamLightInformations = function(param1) {
    this.deserializeAs_AbstractFightTeamInformations(param1);
    var _loc2_ = param1.readByte();
    this.hasFriend = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.hasGuildMember = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.hasAllianceMember = BooleanByteWrapper.getFlag(_loc2_, 2);
    this.hasGroupMember = BooleanByteWrapper.getFlag(_loc2_, 3);
    this.hasMyTaxCollector = BooleanByteWrapper.getFlag(_loc2_, 4);
    this.teamMembersCount = param1.readByte();
    if (this.teamMembersCount < 0) {
        throw new Error("Forbidden value (" + this.teamMembersCount + ") on element of FightTeamLightInformations.teamMembersCount.");
    } else {
        this.meanLevel = param1.readVarUhInt();
        if (this.meanLevel < 0) {
            throw new Error("Forbidden value (" + this.meanLevel + ") on element of FightTeamLightInformations.meanLevel.");
        } else {
            return;
        }
    }
};

FightTeamLightInformations.prototype.getTypeId = function() {
    return 115;
};

FightTeamLightInformations.prototype.getClassName = function() {
    return 'FightTeamLightInformations';
};

module.exports.id = 115;
module.exports.FightTeamLightInformations = FightTeamLightInformations;