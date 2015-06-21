var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var CharacterFirstSelectionMessage = function() {
    this.doTutorial = false;
};

require('util').inherits(CharacterFirstSelectionMessage, require('./character-selection-message.js').CharacterSelectionMessage);

module.exports = function() {
    return new CharacterFirstSelectionMessage();
};

CharacterFirstSelectionMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterFirstSelectionMessage(output);
};

CharacterFirstSelectionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterFirstSelectionMessage(input);
};

CharacterFirstSelectionMessage.prototype.serializeAs_CharacterFirstSelectionMessage = function(param1) {
    this.serializeAs_CharacterSelectionMessage(param1);
    param1.writeBoolean(this.doTutorial);
};

CharacterFirstSelectionMessage.prototype.deserializeAs_CharacterFirstSelectionMessage = function(param1) {
    this.deserializeAs_CharacterSelectionMessage(param1);
    this.doTutorial = param1.readBoolean();
};

CharacterFirstSelectionMessage.prototype.getMessageId = function() {
    return 6084;
};

CharacterFirstSelectionMessage.prototype.getClassName = function() {
    return 'CharacterFirstSelectionMessage';
};

module.exports.id = 6084;
module.exports.CharacterFirstSelectionMessage = CharacterFirstSelectionMessage;