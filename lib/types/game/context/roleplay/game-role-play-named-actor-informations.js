var GameRolePlayNamedActorInformations = function() {
    this.name = "";
};

require('util').inherits(GameRolePlayNamedActorInformations, require('./game-role-play-actor-informations.js').class);

GameRolePlayNamedActorInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayNamedActorInformations(output);
};

GameRolePlayNamedActorInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayNamedActorInformations(input);
};

GameRolePlayNamedActorInformations.prototype.serializeAs_GameRolePlayNamedActorInformations = function(param1) {
    this.serializeAs_GameRolePlayActorInformationsAs_GameRolePlayActorInformations(param1);
    param1.writeUTF(this.name);
};

GameRolePlayNamedActorInformations.prototype.deserializeAs_GameRolePlayNamedActorInformations = function(param1) {
    this.deserializeAs_GameRolePlayActorInformations(param1);
    this.name = param1.readUTF();
};

GameRolePlayNamedActorInformations.prototype.getTypeId = function() {
    return 154;
};

GameRolePlayNamedActorInformations.prototype.getClassName = function() {
    return 'GameRolePlayNamedActorInformations';
};

module.exports.id = 154;
module.exports.class = GameRolePlayNamedActorInformations;
module.exports.getInstance = function() {
    return new GameRolePlayNamedActorInformations;
};