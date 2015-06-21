var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information.js').class;

var CharacterSelectionWithRemodelMessage = module.exports = function() {
    this.remodel = new RemodelingInformation();

    return this;
};

require('util').inherits(CharacterSelectionWithRemodelMessage, require('./character-selection-message.js'));

CharacterSelectionWithRemodelMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterSelectionWithRemodelMessage(output);
};

CharacterSelectionWithRemodelMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterSelectionWithRemodelMessage(input);
};

CharacterSelectionWithRemodelMessage.prototype.serializeAs_CharacterSelectionWithRemodelMessage = function(param1) {
    this.serializeAs_CharacterSelectionMessage(param1);
    this.remodel.serializeAs_RemodelingInformation(param1);
};

CharacterSelectionWithRemodelMessage.prototype.deserializeAs_CharacterSelectionWithRemodelMessage = function(param1) {
    this.deserializeAs_CharacterSelectionMessage(param1);
    this.remodel = new RemodelingInformation();
    this.remodel.deserialize(param1);
};

CharacterSelectionWithRemodelMessage.prototype.getMessageId = function() {
    return 6549;
};

CharacterSelectionWithRemodelMessage.prototype.getClassName = function() {
    return 'CharacterSelectionWithRemodelMessage';
};

module.exports.id = 6549;