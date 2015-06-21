var GameRolePlayCharacterInformations = function() {
    this.alignmentInfos = new ActorAlignmentInformations();
};

require('util').inherits(GameRolePlayCharacterInformations, require('./game-role-play-humanoid-informations.js').class);

GameRolePlayCharacterInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayCharacterInformations(output);
};

GameRolePlayCharacterInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayCharacterInformations(input);
};

GameRolePlayCharacterInformations.prototype.serializeAs_GameRolePlayCharacterInformations = function(param1) {
    this.serializeAs_GameRolePlayHumanoidInformations(param1);
    this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
};

GameRolePlayCharacterInformations.prototype.deserializeAs_GameRolePlayCharacterInformations = function(param1) {
    this.deserializeAs_GameRolePlayHumanoidInformations(param1);
    this.alignmentInfos = new ActorAlignmentInformations();
    this.alignmentInfos.deserialize(param1);
};

GameRolePlayCharacterInformations.prototype.getTypeId = function() {
    return 36;
};

GameRolePlayCharacterInformations.prototype.getClassName = function() {
    return 'GameRolePlayCharacterInformations';
};

module.exports.id = 36;
module.exports.class = GameRolePlayCharacterInformations;
module.exports.getInstance = function() {
    return new GameRolePlayCharacterInformations;
};