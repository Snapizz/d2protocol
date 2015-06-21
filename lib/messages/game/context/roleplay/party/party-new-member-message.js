var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations.js').class;

var PartyNewMemberMessage = function() {

};

require('util').inherits(PartyNewMemberMessage, require('./party-update-message.js'));

module.exports = function() {
    return new PartyNewMemberMessage();
};

PartyNewMemberMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyNewMemberMessage(output);
};

PartyNewMemberMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyNewMemberMessage(input);
};

PartyNewMemberMessage.prototype.serializeAs_PartyNewMemberMessage = function(param1) {
    this.serializeAs_PartyUpdateMessage(param1);
};

PartyNewMemberMessage.prototype.deserializeAs_PartyNewMemberMessage = function(param1) {
    this.deserializeAs_PartyUpdateMessage(param1);
};

PartyNewMemberMessage.prototype.getMessageId = function() {
    return 6306;
};

PartyNewMemberMessage.prototype.getClassName = function() {
    return 'PartyNewMemberMessage';
};

module.exports.id = 6306;
module.exports.PartyNewMemberMessage = PartyNewMemberMessage;