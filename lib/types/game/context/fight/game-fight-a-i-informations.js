var GameFightAIInformations = function() {

};

require('util').inherits(GameFightAIInformations, require('./game-fight-fighter-informations.js').class);

GameFightAIInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightAIInformations(output);
};

GameFightAIInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightAIInformations(input);
};

GameFightAIInformations.prototype.serializeAs_GameFightAIInformations = function(param1) {
    this.serializeAs_GameFightFighterInformations(param1);
};

GameFightAIInformations.prototype.deserializeAs_GameFightAIInformations = function(param1) {
    this.deserializeAs_GameFightFighterInformations(param1);
};

GameFightAIInformations.prototype.getTypeId = function() {
    return 151;
};

GameFightAIInformations.prototype.getClassName = function() {
    return 'GameFightAIInformations';
};

module.exports.id = 151;
module.exports.class = GameFightAIInformations;
module.exports.getInstance = function() {
    return new GameFightAIInformations;
};