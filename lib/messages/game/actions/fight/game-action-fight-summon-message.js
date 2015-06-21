var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations.js').GameFightFighterInformations;

var GameActionFightSummonMessage = function() {
    this.summon = new GameFightFighterInformations();
};

require('util').inherits(GameActionFightSummonMessage, require('../abstract-game-action-message.js').AbstractGameActionMessage);

module.exports = function() {
    return new GameActionFightSummonMessage();
};

GameActionFightSummonMessage.prototype.serialize = function(output) {
    this.serializeAs_GameActionFightSummonMessage(output);
};

GameActionFightSummonMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameActionFightSummonMessage(input);
};

GameActionFightSummonMessage.prototype.serializeAs_GameActionFightSummonMessage = function(param1) {
    this.serializeAs_AbstractGameActionMessage(param1);
    param1.writeShort(this.summon.getTypeId());
    this.summon.serialize(param1);
};

GameActionFightSummonMessage.prototype.deserializeAs_GameActionFightSummonMessage = function(param1) {
    this.deserializeAs_AbstractGameActionMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    this.summon = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
    this.summon.deserialize(param1);
};

GameActionFightSummonMessage.prototype.getMessageId = function() {
    return 5825;
};

GameActionFightSummonMessage.prototype.getClassName = function() {
    return 'GameActionFightSummonMessage';
};

module.exports.id = 5825;
module.exports.GameActionFightSummonMessage = GameActionFightSummonMessage;