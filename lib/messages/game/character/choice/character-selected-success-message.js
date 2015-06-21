var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations.js').class;

var CharacterSelectedSuccessMessage = function() {
    this.infos = new CharacterBaseInformations();
    this.isCollectingStats = false;
};

require('util').inherits(CharacterSelectedSuccessMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new CharacterSelectedSuccessMessage();
};

CharacterSelectedSuccessMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterSelectedSuccessMessage(output);
};

CharacterSelectedSuccessMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterSelectedSuccessMessage(input);
};

CharacterSelectedSuccessMessage.prototype.serializeAs_CharacterSelectedSuccessMessage = function(param1) {
    this.infos.serializeAs_CharacterBaseInformations(param1);
    param1.writeBoolean(this.isCollectingStats);
};

CharacterSelectedSuccessMessage.prototype.deserializeAs_CharacterSelectedSuccessMessage = function(param1) {
    this.infos = new CharacterBaseInformations();
    this.infos.deserialize(param1);
    this.isCollectingStats = param1.readBoolean();
};

CharacterSelectedSuccessMessage.prototype.getMessageId = function() {
    return 153;
};

CharacterSelectedSuccessMessage.prototype.getClassName = function() {
    return 'CharacterSelectedSuccessMessage';
};

module.exports.id = 153;
module.exports.CharacterSelectedSuccessMessage = CharacterSelectedSuccessMessage;