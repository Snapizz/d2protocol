var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations.js').class;

var CharacterStatsListMessage = function() {
    this.stats = new CharacterCharacteristicsInformations();
};

require('util').inherits(CharacterStatsListMessage, d2com.NetworkMessage.class);

CharacterStatsListMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterStatsListMessage(output);
};

CharacterStatsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterStatsListMessage(input);
};

CharacterStatsListMessage.prototype.serializeAs_CharacterStatsListMessage = function(param1) {
    this.stats.serializeAs_CharacterCharacteristicsInformations(param1);
};

CharacterStatsListMessage.prototype.deserializeAs_CharacterStatsListMessage = function(param1) {
    this.stats = new CharacterCharacteristicsInformations();
    this.stats.deserialize(param1);
};

CharacterStatsListMessage.prototype.getMessageId = function() {
    return 500;
};

CharacterStatsListMessage.prototype.getClassName = function() {
    return 'CharacterStatsListMessage';
};

module.exports.id = 500;
module.exports.class = CharacterStatsListMessage;
module.exports.getInstance = function() {
    return new CharacterStatsListMessage;
};