var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations.js').class;

var GameEntityDispositionMessage = module.exports = function() {
    this.disposition = new IdentifiedEntityDispositionInformations();

    return this;
};

require('util').inherits(GameEntityDispositionMessage, d2com.NetworkMessage.class);

GameEntityDispositionMessage.prototype.serialize = function(output) {
    this.serializeAs_GameEntityDispositionMessage(output);
};

GameEntityDispositionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GameEntityDispositionMessage(input);
};

GameEntityDispositionMessage.prototype.serializeAs_GameEntityDispositionMessage = function(param1) {
    this.disposition.serializeAs_IdentifiedEntityDispositionInformations(param1);
};

GameEntityDispositionMessage.prototype.deserializeAs_GameEntityDispositionMessage = function(param1) {
    this.disposition = new IdentifiedEntityDispositionInformations();
    this.disposition.deserialize(param1);
};

GameEntityDispositionMessage.prototype.getMessageId = function() {
    return 5693;
};

GameEntityDispositionMessage.prototype.getClassName = function() {
    return 'GameEntityDispositionMessage';
};

module.exports.id = 5693;