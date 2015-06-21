var GameRolePlayActorInformations = function() {

};

require('util').inherits(GameRolePlayActorInformations, require('../game-context-actor-informations.js').class);

GameRolePlayActorInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayActorInformations(output);
};

GameRolePlayActorInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayActorInformations(input);
};

GameRolePlayActorInformations.prototype.serializeAs_GameRolePlayActorInformations = function(param1) {
    this.serializeAs_GameContextActorInformationsAs_GameContextActorInformations(param1);
};

GameRolePlayActorInformations.prototype.deserializeAs_GameRolePlayActorInformations = function(param1) {
    this.deserializeAs_GameContextActorInformations(param1);
};

GameRolePlayActorInformations.prototype.getTypeId = function() {
    return 141;
};

GameRolePlayActorInformations.prototype.getClassName = function() {
    return 'GameRolePlayActorInformations';
};

module.exports.id = 141;
module.exports.class = GameRolePlayActorInformations;
module.exports.getInstance = function() {
    return new GameRolePlayActorInformations;
};