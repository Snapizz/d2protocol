var GameRolePlayTaxCollectorInformations = function() {
    this.identification = new TaxCollectorStaticInformations();
    this.guildLevel = 0;
    this.taxCollectorAttack = 0;
};

require('util').inherits(GameRolePlayTaxCollectorInformations, require('./roleplay/game-role-play-actor-informations.js').class);

GameRolePlayTaxCollectorInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayTaxCollectorInformations(output);
};

GameRolePlayTaxCollectorInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayTaxCollectorInformations(input);
};

GameRolePlayTaxCollectorInformations.prototype.serializeAs_GameRolePlayTaxCollectorInformations = function(param1) {
    this.serializeAs_GameRolePlayActorInformationsAs_GameRolePlayActorInformations(param1);
    param1.writeShort(this.identification.getTypeId());
    this.identification.serialize(param1);
    if (this.guildLevel < 0 || this.guildLevel > 255) {
        throw new Error("Forbidden value (" + this.guildLevel + ") on element guildLevel.");
    } else {
        param1.writeByte(this.guildLevel);
        param1.writeInt(this.taxCollectorAttack);
        return;
    }
};

GameRolePlayTaxCollectorInformations.prototype.deserializeAs_GameRolePlayTaxCollectorInformations = function(param1) {
    this.deserializeAs_GameRolePlayActorInformations(param1);
    var _loc2_ = param1.readUnsignedShort();
    this.identification = ProtocolTypeManager.getInstance(TaxCollectorStaticInformations, _loc2_);
    this.identification.deserialize(param1);
    this.guildLevel = param1.readUnsignedByte();
    if (this.guildLevel < 0 || this.guildLevel > 255) {
        throw new Error("Forbidden value (" + this.guildLevel + ") on element of GameRolePlayTaxCollectorInformations.guildLevel.");
    } else {
        this.taxCollectorAttack = param1.readInt();
        return;
    }
};

GameRolePlayTaxCollectorInformations.prototype.getTypeId = function() {
    return 148;
};

GameRolePlayTaxCollectorInformations.prototype.getClassName = function() {
    return 'GameRolePlayTaxCollectorInformations';
};

module.exports.id = 148;
module.exports.class = GameRolePlayTaxCollectorInformations;
module.exports.getInstance = function() {
    return new GameRolePlayTaxCollectorInformations;
};