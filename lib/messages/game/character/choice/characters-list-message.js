var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations.js').class;

var CharactersListMessage = function() {
    this.hasStartupActions = false;
};

require('util').inherits(CharactersListMessage, require('./basic-characters-list-message.js').class);

CharactersListMessage.prototype.serialize = function(output) {
    this.serializeAs_CharactersListMessage(output);
};

CharactersListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharactersListMessage(input);
};

CharactersListMessage.prototype.serializeAs_CharactersListMessage = function(param1) {
    this.serializeAs_BasicCharactersListMessageAs_BasicCharactersListMessage(param1);
    param1.writeBoolean(this.hasStartupActions);
};

CharactersListMessage.prototype.deserializeAs_CharactersListMessage = function(param1) {
    this.deserializeAs_BasicCharactersListMessage(param1);
    this.hasStartupActions = param1.readBoolean();
};

CharactersListMessage.prototype.getMessageId = function() {
    return 151;
};

CharactersListMessage.prototype.getClassName = function() {
    return 'CharactersListMessage';
};

module.exports.id = 151;
module.exports.class = CharactersListMessage;
module.exports.getInstance = function() {
    return new CharactersListMessage;
};