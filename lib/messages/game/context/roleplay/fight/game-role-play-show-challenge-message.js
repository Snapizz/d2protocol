var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FightCommonInformations = require('../../../../../types/game/context/fight/fight-common-informations.js').class;

var GameRolePlayShowChallengeMessage = module.exports = function() {
    this.commonsInfos = new FightCommonInformations();

    return this;
};

require('util').inherits(GameRolePlayShowChallengeMessage, d2com.NetworkMessage.class);

GameRolePlayShowChallengeMessage.prototype.serialize = function(output) {
    this.serializeAs_GameRolePlayShowChallengeMessage(output);
};

GameRolePlayShowChallengeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameRolePlayShowChallengeMessage(input);
};

GameRolePlayShowChallengeMessage.prototype.serializeAs_GameRolePlayShowChallengeMessage = function(param1) {
    this.commonsInfos.serializeAs_FightCommonInformations(param1);
};

GameRolePlayShowChallengeMessage.prototype.deserializeAs_GameRolePlayShowChallengeMessage = function(param1) {
    this.commonsInfos = new FightCommonInformations();
    this.commonsInfos.deserialize(param1);
};

GameRolePlayShowChallengeMessage.prototype.getMessageId = function() {
    return 301;
};

GameRolePlayShowChallengeMessage.prototype.getClassName = function() {
    return 'GameRolePlayShowChallengeMessage';
};

module.exports.id = 301;