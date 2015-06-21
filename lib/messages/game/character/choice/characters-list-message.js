var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var CharacterBaseInformations = require('../../../../types/game/character/choice/character-base-informations.js').class;

var CharactersListMessage = module.exports = function() {
    this.hasStartupActions = false;

    return this;
};

require('util').inherits(CharactersListMessage, require('./basic-characters-list-message.js'));

CharactersListMessage.prototype.serialize = function(output) {
    this.serializeAs_CharactersListMessage(output);
};

CharactersListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharactersListMessage(input);
};

CharactersListMessage.prototype.serializeAs_CharactersListMessage = function(param1) {
    this.serializeAs_BasicCharactersListMessage(param1);
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