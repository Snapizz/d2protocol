var FightTeamInformations = function() {
    this.teamMembers = [];
};

require('util').inherits(FightTeamInformations, require('./abstract-fight-team-informations.js'));

module.exports = function() {
    return new FightTeamInformations();
};

FightTeamInformations.prototype.serialize = function(output) {
    this.serializeAs_FightTeamInformations(output);
};

FightTeamInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightTeamInformations(input);
};

FightTeamInformations.prototype.serializeAs_FightTeamInformations = function(param1) {
    this.serializeAs_AbstractFightTeamInformations(param1);
    param1.writeShort(this.teamMembers.length);
    var _loc2_ = 0;
    while (_loc2_ < this.teamMembers.length) {
        param1.writeShort((this.teamMembers[_loc2_]).getTypeId());
        (this.teamMembers[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

FightTeamInformations.prototype.deserializeAs_FightTeamInformations = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    this.deserializeAs_AbstractFightTeamInformations(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
        _loc5_ = ProtocolTypeManager.getInstance(FightTeamMemberInformations, _loc4_);
        _loc5_.deserialize(param1);
        this.teamMembers.push(_loc5_);
        _loc3_++;
    }
};

FightTeamInformations.prototype.getTypeId = function() {
    return 33;
};

FightTeamInformations.prototype.getClassName = function() {
    return 'FightTeamInformations';
};

module.exports.id = 33;
module.exports.FightTeamInformations = FightTeamInformations;