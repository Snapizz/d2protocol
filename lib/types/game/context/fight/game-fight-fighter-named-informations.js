var GameFightFighterNamedInformations = function() {
    this.name = "";
    this.status = new PlayerStatus();
};

require('util').inherits(GameFightFighterNamedInformations, require('./game-fight-fighter-informations.js'));

module.exports = function() {
    return new GameFightFighterNamedInformations();
};

GameFightFighterNamedInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightFighterNamedInformations(output);
};

GameFightFighterNamedInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightFighterNamedInformations(input);
};

GameFightFighterNamedInformations.prototype.serializeAs_GameFightFighterNamedInformations = function(param1) {
    this.serializeAs_GameFightFighterInformations(param1);
    param1.writeUTF(this.name);
    this.status.serializeAs_PlayerStatus(param1);
};

GameFightFighterNamedInformations.prototype.deserializeAs_GameFightFighterNamedInformations = function(param1) {
    this.deserializeAs_GameFightFighterInformations(param1);
    this.name = param1.readUTF();
    this.status = new PlayerStatus();
    this.status.deserialize(param1);
};

GameFightFighterNamedInformations.prototype.getTypeId = function() {
    return 158;
};

GameFightFighterNamedInformations.prototype.getClassName = function() {
    return 'GameFightFighterNamedInformations';
};

module.exports.id = 158;
module.exports.GameFightFighterNamedInformations = GameFightFighterNamedInformations;