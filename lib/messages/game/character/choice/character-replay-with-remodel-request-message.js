var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information.js').class;

var CharacterReplayWithRemodelRequestMessage = function() {
    this.remodel = new RemodelingInformation();
};

require('util').inherits(CharacterReplayWithRemodelRequestMessage, require('../replay/').class);

CharacterReplayWithRemodelRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_CharacterReplayWithRemodelRequestMessage(output);
};

CharacterReplayWithRemodelRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CharacterReplayWithRemodelRequestMessage(input);
};

CharacterReplayWithRemodelRequestMessage.prototype.serializeAs_CharacterReplayWithRemodelRequestMessage = function(param1) {
    this.serializeAs_CharacterReplayRequestMessageAs_CharacterReplayRequestMessage(param1);
    this.remodel.serializeAs_RemodelingInformation(param1);
};

CharacterReplayWithRemodelRequestMessage.prototype.deserializeAs_CharacterReplayWithRemodelRequestMessage = function(param1) {
    this.deserializeAs_CharacterReplayRequestMessage(param1);
    this.remodel = new RemodelingInformation();
    this.remodel.deserialize(param1);
};

CharacterReplayWithRemodelRequestMessage.prototype.getMessageId = function() {
    return 6551;
};

CharacterReplayWithRemodelRequestMessage.prototype.getClassName = function() {
    return 'CharacterReplayWithRemodelRequestMessage';
};

module.exports.id = 6551;
module.exports.class = CharacterReplayWithRemodelRequestMessage;
module.exports.getInstance = function() {
    return new CharacterReplayWithRemodelRequestMessage;
};