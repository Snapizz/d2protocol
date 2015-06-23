var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var ActorRestrictionsInformations = require('../../../types/game/character/restriction/actor-restrictions-informations.js').ActorRestrictionsInformations;

var SetCharacterRestrictionsMessage = function() {
    this.actorId = 0;
    this.restrictions = new ActorRestrictionsInformations();
};

require('util').inherits(SetCharacterRestrictionsMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new SetCharacterRestrictionsMessage();
};

SetCharacterRestrictionsMessage.prototype.serialize = function(output) {
    this.serializeAs_SetCharacterRestrictionsMessage(output);
};

SetCharacterRestrictionsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SetCharacterRestrictionsMessage(input);
};

SetCharacterRestrictionsMessage.prototype.serializeAs_SetCharacterRestrictionsMessage = function(param1) {
    param1.writeInt(this.actorId);
    this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
};

SetCharacterRestrictionsMessage.prototype.deserializeAs_SetCharacterRestrictionsMessage = function(param1) {
    this.actorId = param1.readInt();
    this.restrictions = new ActorRestrictionsInformations();
    this.restrictions.deserialize(param1);
};

SetCharacterRestrictionsMessage.prototype.getMessageId = function() {
    return 170;
};

SetCharacterRestrictionsMessage.prototype.getClassName = function() {
    return 'SetCharacterRestrictionsMessage';
};

module.exports.id = 170;
module.exports.SetCharacterRestrictionsMessage = SetCharacterRestrictionsMessage;