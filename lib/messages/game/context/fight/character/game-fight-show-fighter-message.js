var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightFighterInformations = require('../../../../../types/game/context/fight/game-fight-fighter-informations.js').class;

var GameFightShowFighterMessage = function() {
    this.informations = new GameFightFighterInformations();
};

require('util').inherits(GameFightShowFighterMessage, d2com.NetworkMessage.class);

GameFightShowFighterMessage.prototype.serialize = function(output) {
    this.serializeAs_GameFightShowFighterMessage(output);
};

GameFightShowFighterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameFightShowFighterMessage(input);
};

GameFightShowFighterMessage.prototype.serializeAs_GameFightShowFighterMessage = function(param1) {
    param1.writeShort(this.informations.getTypeId());
    this.informations.serialize(param1);
};

GameFightShowFighterMessage.prototype.deserializeAs_GameFightShowFighterMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.informations = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
    this.informations.deserialize(param1);
};

GameFightShowFighterMessage.prototype.getMessageId = function() {
    return 5864;
};

GameFightShowFighterMessage.prototype.getClassName = function() {
    return 'GameFightShowFighterMessage';
};

module.exports.id = 5864;
module.exports.class = GameFightShowFighterMessage;
module.exports.getInstance = function() {
    return new GameFightShowFighterMessage;
};