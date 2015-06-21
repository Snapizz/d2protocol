var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightFighterInformations = require('../../../../../types/game/context/fight/game-fight-fighter-informations.js').GameFightFighterInformations;

var GameFightShowFighterRandomStaticPoseMessage = function() {

};

require('util').inherits(GameFightShowFighterRandomStaticPoseMessage, require('./game-fight-show-fighter-message.js').GameFightShowFighterMessage);

module.exports = function() {
    return new GameFightShowFighterRandomStaticPoseMessage();
};

GameFightShowFighterRandomStaticPoseMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightShowFighterRandomStaticPoseMessage(output);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightShowFighterRandomStaticPoseMessage(input);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.serializeAs_GameFightShowFighterRandomStaticPoseMessage = function(param1) {
    this.serializeAs_GameFightShowFighterMessage(param1);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.deserializeAs_GameFightShowFighterRandomStaticPoseMessage = function(param1) {
    this.deserializeAs_GameFightShowFighterMessage(param1);
};

GameFightShowFighterRandomStaticPoseMessage.prototype.getMessageId = function() {
    return 6218;
};

GameFightShowFighterRandomStaticPoseMessage.prototype.getClassName = function() {
    return 'GameFightShowFighterRandomStaticPoseMessage';
};

module.exports.id = 6218;
module.exports.GameFightShowFighterRandomStaticPoseMessage = GameFightShowFighterRandomStaticPoseMessage;