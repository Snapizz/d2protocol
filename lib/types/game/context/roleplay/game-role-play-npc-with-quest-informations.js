var GameRolePlayNpcWithQuestInformations = module.exports = function() {
    this.questFlag = new GameRolePlayNpcQuestFlag();

    return this;
};

require('util').inherits(GameRolePlayNpcWithQuestInformations, require('./game-role-play-npc-informations.js'));

GameRolePlayNpcWithQuestInformations.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayNpcWithQuestInformations(output);
};

GameRolePlayNpcWithQuestInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayNpcWithQuestInformations(input);
};

GameRolePlayNpcWithQuestInformations.prototype.serializeAs_GameRolePlayNpcWithQuestInformations = function(param1) {
    this.serializeAs_GameRolePlayNpcInformations(param1);
    this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(param1);
};

GameRolePlayNpcWithQuestInformations.prototype.deserializeAs_GameRolePlayNpcWithQuestInformations = function(param1) {
    this.deserializeAs_GameRolePlayNpcInformations(param1);
    this.questFlag = new GameRolePlayNpcQuestFlag();
    this.questFlag.deserialize(param1);
};

GameRolePlayNpcWithQuestInformations.prototype.getTypeId = function() {
    return 383;
};

GameRolePlayNpcWithQuestInformations.prototype.getClassName = function() {
    return 'GameRolePlayNpcWithQuestInformations';
};

module.exports.id = 383;