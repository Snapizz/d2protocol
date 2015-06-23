var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyIdol = require('../../../types/game/idol/party-idol.js').PartyIdol;

var IdolPartyRefreshMessage = function() {
    this.partyIdol = new PartyIdol();
};

require('util').inherits(IdolPartyRefreshMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolPartyRefreshMessage();
};

IdolPartyRefreshMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolPartyRefreshMessage(output);
};

IdolPartyRefreshMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolPartyRefreshMessage(input);
};

IdolPartyRefreshMessage.prototype.serializeAs_IdolPartyRefreshMessage = function(param1) {
    this.partyIdol.serializeAs_PartyIdol(param1);
};

IdolPartyRefreshMessage.prototype.deserializeAs_IdolPartyRefreshMessage = function(param1) {
    this.partyIdol = new PartyIdol();
    this.partyIdol.deserialize(param1);
};

IdolPartyRefreshMessage.prototype.getMessageId = function() {
    return 6583;
};

IdolPartyRefreshMessage.prototype.getClassName = function() {
    return 'IdolPartyRefreshMessage';
};

module.exports.id = 6583;
module.exports.IdolPartyRefreshMessage = IdolPartyRefreshMessage;