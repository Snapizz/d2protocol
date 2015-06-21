var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations.js').class;

var FighterStatsListMessage = function() {
    this.stats = new CharacterCharacteristicsInformations();
};

require('util').inherits(FighterStatsListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FighterStatsListMessage();
};

FighterStatsListMessage.prototype.serialize = function(output) {
    this.serializeAs_FighterStatsListMessage(output);
};

FighterStatsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FighterStatsListMessage(input);
};

FighterStatsListMessage.prototype.serializeAs_FighterStatsListMessage = function(param1) {
    this.stats.serializeAs_CharacterCharacteristicsInformations(param1);
};

FighterStatsListMessage.prototype.deserializeAs_FighterStatsListMessage = function(param1) {
    this.stats = new CharacterCharacteristicsInformations();
    this.stats.deserialize(param1);
};

FighterStatsListMessage.prototype.getMessageId = function() {
    return 6322;
};

FighterStatsListMessage.prototype.getClassName = function() {
    return 'FighterStatsListMessage';
};

module.exports.id = 6322;
module.exports.FighterStatsListMessage = FighterStatsListMessage;