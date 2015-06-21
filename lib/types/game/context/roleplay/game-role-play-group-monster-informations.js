var GameRolePlayGroupMonsterInformations = function() {
    this.staticInfos = new GroupMonsterStaticInformations();
    this.ageBonus = 0;
    this.lootShare = 0;
    this.alignmentSide = 0;
    this.keyRingBonus = false;
    this.hasHardcoreDrop = false;
    this.hasAVARewardToken = false;
};

require('util').inherits(GameRolePlayGroupMonsterInformations, require('./game-role-play-actor-informations.js').class);

GameRolePlayGroupMonsterInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayGroupMonsterInformations(output);
};

GameRolePlayGroupMonsterInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayGroupMonsterInformations(input);
};

GameRolePlayGroupMonsterInformations.prototype.serializeAs_GameRolePlayGroupMonsterInformations = function(param1) {
    this.serializeAs_GameRolePlayActorInformations(param1);
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.keyRingBonus);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasHardcoreDrop);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAVARewardToken);
    param1.writeByte(_loc2_);
    param1.writeShort(this.staticInfos.getTypeId());
    this.staticInfos.serialize(param1);
    if (this.ageBonus < -1 || this.ageBonus > 1000) {
        throw new Error("Forbidden value (" + this.ageBonus + ") on element ageBonus.");
    } else {
        param1.writeShort(this.ageBonus);
        if (this.lootShare < -1 || this.lootShare > 8) {
            throw new Error("Forbidden value (" + this.lootShare + ") on element lootShare.");
        } else {
            param1.writeByte(this.lootShare);
            param1.writeByte(this.alignmentSide);
            return;
        }
    }
};

GameRolePlayGroupMonsterInformations.prototype.deserializeAs_GameRolePlayGroupMonsterInformations = function(param1) {
    this.deserializeAs_GameRolePlayActorInformations(param1);
    var _loc2_ = param1.readByte();
    this.keyRingBonus = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.hasHardcoreDrop = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.hasAVARewardToken = BooleanByteWrapper.getFlag(_loc2_, 2);
    var _loc3_ = param1.readUnsignedShort();
    this.staticInfos = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc3_);
    this.staticInfos.deserialize(param1);
    this.ageBonus = param1.readShort();
    if (this.ageBonus < -1 || this.ageBonus > 1000) {
        throw new Error("Forbidden value (" + this.ageBonus + ") on element of GameRolePlayGroupMonsterInformations.ageBonus.");
    } else {
        this.lootShare = param1.readByte();
        if (this.lootShare < -1 || this.lootShare > 8) {
            throw new Error("Forbidden value (" + this.lootShare + ") on element of GameRolePlayGroupMonsterInformations.lootShare.");
        } else {
            this.alignmentSide = param1.readByte();
            return;
        }
    }
};

GameRolePlayGroupMonsterInformations.prototype.getTypeId = function() {
    return 160;
};

GameRolePlayGroupMonsterInformations.prototype.getClassName = function() {
    return 'GameRolePlayGroupMonsterInformations';
};

module.exports.id = 160;
module.exports.class = GameRolePlayGroupMonsterInformations;
module.exports.getInstance = function() {
    return new GameRolePlayGroupMonsterInformations;
};