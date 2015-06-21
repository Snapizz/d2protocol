var GameFightMonsterWithAlignmentInformations = function() {
    this.alignmentInfos = new ActorAlignmentInformations();
};

require('util').inherits(GameFightMonsterWithAlignmentInformations, require('./game-fight-monster-informations.js').GameFightMonsterInformations);

module.exports = function() {
    return new GameFightMonsterWithAlignmentInformations();
};

GameFightMonsterWithAlignmentInformations.prototype.serialize = function(output) {
    this.serializeAs_GameFightMonsterWithAlignmentInformations(output);
};

GameFightMonsterWithAlignmentInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightMonsterWithAlignmentInformations(input);
};

GameFightMonsterWithAlignmentInformations.prototype.serializeAs_GameFightMonsterWithAlignmentInformations = function(param1) {
    this.serializeAs_GameFightMonsterInformations(param1);
    this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
};

GameFightMonsterWithAlignmentInformations.prototype.deserializeAs_GameFightMonsterWithAlignmentInformations = function(param1) {
    this.deserializeAs_GameFightMonsterInformations(param1);
    this.alignmentInfos = new ActorAlignmentInformations();
    this.alignmentInfos.deserialize(param1);
};

GameFightMonsterWithAlignmentInformations.prototype.getTypeId = function() {
    return 203;
};

GameFightMonsterWithAlignmentInformations.prototype.getClassName = function() {
    return 'GameFightMonsterWithAlignmentInformations';
};

module.exports.id = 203;
module.exports.GameFightMonsterWithAlignmentInformations = GameFightMonsterWithAlignmentInformations;