var GameRolePlayMountInformations = function() {
    this.ownerName = "";
    this.level = 0;
};

require('util').inherits(GameRolePlayMountInformations, require('./game-role-play-named-actor-informations.js').class);

GameRolePlayMountInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayMountInformations(output);
};

GameRolePlayMountInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayMountInformations(input);
};

GameRolePlayMountInformations.prototype.serializeAs_GameRolePlayMountInformations = function(param1) {
    this.serializeAs_GameRolePlayNamedActorInformationsAs_GameRolePlayNamedActorInformations(param1);
    param1.writeUTF(this.ownerName);
    if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element level.");
    } else {
        param1.writeByte(this.level);
        return;
    }
};

GameRolePlayMountInformations.prototype.deserializeAs_GameRolePlayMountInformations = function(param1) {
    this.deserializeAs_GameRolePlayNamedActorInformations(param1);
    this.ownerName = param1.readUTF();
    this.level = param1.readUnsignedByte();
    if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element of GameRolePlayMountInformations.level.");
    } else {
        return;
    }
};

GameRolePlayMountInformations.prototype.getTypeId = function() {
    return 180;
};

GameRolePlayMountInformations.prototype.getClassName = function() {
    return 'GameRolePlayMountInformations';
};

module.exports.id = 180;
module.exports.class = GameRolePlayMountInformations;
module.exports.getInstance = function() {
    return new GameRolePlayMountInformations;
};