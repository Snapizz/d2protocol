var FightCommonInformations = module.exports = function() {
    this.fightId = 0;
    this.fightType = 0;
    this.fightTeams = [];
    this.fightTeamsPositions = [];
    this.fightTeamsOptions = [];

    return this;
};

FightCommonInformations.prototype.serialize = function(output) {
    this.serializeAs_FightCommonInformations(output);
};

FightCommonInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightCommonInformations(input);
};

FightCommonInformations.prototype.serializeAs_FightCommonInformations = function(param1) {
    param1.writeInt(this.fightId);
    param1.writeByte(this.fightType);
    param1.writeShort(this.fightTeams.length);
    var _loc2_ = 0;
    while (_loc2_ < this.fightTeams.length) {
        param1.writeShort((this.fightTeams[_loc2_]).getTypeId());
        (this.fightTeams[_loc2_]).serialize(param1);
        _loc2_++;
    }
    param1.writeShort(this.fightTeamsPositions.length);
    var _loc3_ = 0;
    while (_loc3_ < this.fightTeamsPositions.length) {
        if (this.fightTeamsPositions[_loc3_] < 0 || this.fightTeamsPositions[_loc3_] > 559) {
            throw new Error("Forbidden value (" + this.fightTeamsPositions[_loc3_] + ") on element 4 (starting at 1) of fightTeamsPositions.");
        } else {
            param1.writeVarShort(this.fightTeamsPositions[_loc3_]);
            _loc3_++;
            continue;
        }
    }
    param1.writeShort(this.fightTeamsOptions.length);
    var _loc4_ = 0;
    while (_loc4_ < this.fightTeamsOptions.length) {
        (this.fightTeamsOptions[_loc4_]).serializeAs_FightOptionsInformations(param1);
        _loc4_++;
    }
};

FightCommonInformations.prototype.deserializeAs_FightCommonInformations = function(param1) {
    var _loc8_ = 0;
    var _loc9_ = null;
    var _loc10_ = 0;
    var _loc11_ = null;
    this.fightId = param1.readInt();
    this.fightType = param1.readByte();
    if (this.fightType < 0) {
        throw new Error("Forbidden value (" + this.fightType + ") on element of FightCommonInformations.fightType.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc8_ = param1.readUnsignedShort();
            _loc9_ = ProtocolTypeManager.getInstance(FightTeamInformations, _loc8_);
            _loc9_.deserialize(param1);
            this.fightTeams.push(_loc9_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc10_ = param1.readVarUhShort();
            if (_loc10_ < 0 || _loc10_ > 559) {
                throw new Error("Forbidden value (" + _loc10_ + ") on elements of fightTeamsPositions.");
            } else {
                this.fightTeamsPositions.push(_loc10_);
                _loc5_++;
                continue;
            }
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc11_ = new FightOptionsInformations();
            _loc11_.deserialize(param1);
            this.fightTeamsOptions.push(_loc11_);
            _loc7_++;
        }
        return;
    }
};

FightCommonInformations.prototype.getTypeId = function() {
    return 43;
};

FightCommonInformations.prototype.getClassName = function() {
    return 'FightCommonInformations';
};

module.exports.id = 43;