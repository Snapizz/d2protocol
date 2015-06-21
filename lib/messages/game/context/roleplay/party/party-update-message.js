var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations.js').class;

var PartyUpdateMessage = module.exports = function() {
    this.memberInformations = new PartyMemberInformations();

    return this;
};

require('util').inherits(PartyUpdateMessage, require('./abstract-party-event-message.js'));

PartyUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyUpdateMessage(output);
};

PartyUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyUpdateMessage(input);
};

PartyUpdateMessage.prototype.serializeAs_PartyUpdateMessage = function(param1) {
    this.serializeAs_AbstractPartyEventMessage(param1);
    param1.writeShort(this.memberInformations.getTypeId());
    this.memberInformations.serialize(param1);
};

PartyUpdateMessage.prototype.deserializeAs_PartyUpdateMessage = function(param1) {
    this.deserializeAs_AbstractPartyEventMessage(param1);
    var _loc2_ = param1.readUnsignedShort();
    this.memberInformations = ProtocolTypeManager.getInstance(PartyMemberInformations, _loc2_);
    this.memberInformations.deserialize(param1);
};

PartyUpdateMessage.prototype.getMessageId = function() {
    return 5575;
};

PartyUpdateMessage.prototype.getClassName = function() {
    return 'PartyUpdateMessage';
};

module.exports.id = 5575;