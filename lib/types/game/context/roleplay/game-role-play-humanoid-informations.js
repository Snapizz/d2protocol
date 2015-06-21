var GameRolePlayHumanoidInformations = function() {
    this.humanoidInfo = new HumanInformations();
    this.accountId = 0;
};

require('util').inherits(GameRolePlayHumanoidInformations, require('./game-role-play-named-actor-informations.js').GameRolePlayNamedActorInformations);

module.exports = function() {
    return new GameRolePlayHumanoidInformations();
};

GameRolePlayHumanoidInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayHumanoidInformations(output);
};

GameRolePlayHumanoidInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayHumanoidInformations(input);
};

GameRolePlayHumanoidInformations.prototype.serializeAs_GameRolePlayHumanoidInformations = function(param1) {
    this.serializeAs_GameRolePlayNamedActorInformations(param1);
    param1.writeShort(this.humanoidInfo.getTypeId());
    this.humanoidInfo.serialize(param1);
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        return;
    }
};

GameRolePlayHumanoidInformations.prototype.deserializeAs_GameRolePlayHumanoidInformations = function(param1) {
    this.deserializeAs_GameRolePlayNamedActorInformations(param1);
    var _loc2_ = param1.readUnsignedShort();
    this.humanoidInfo = ProtocolTypeManager.getInstance(HumanInformations, _loc2_);
    this.humanoidInfo.deserialize(param1);
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of GameRolePlayHumanoidInformations.accountId.");
    } else {
        return;
    }
};

GameRolePlayHumanoidInformations.prototype.getTypeId = function() {
    return 159;
};

GameRolePlayHumanoidInformations.prototype.getClassName = function() {
    return 'GameRolePlayHumanoidInformations';
};

module.exports.id = 159;
module.exports.GameRolePlayHumanoidInformations = GameRolePlayHumanoidInformations;