var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations.js').class;

var AllianceJoinedMessage = function() {
    this.allianceInfo = new AllianceInformations();
    this.enabled = false;
};

require('util').inherits(AllianceJoinedMessage, d2com.NetworkMessage.class);

AllianceJoinedMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceJoinedMessage(output);
};

AllianceJoinedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceJoinedMessage(input);
};

AllianceJoinedMessage.prototype.serializeAs_AllianceJoinedMessage = function(param1) {
    this.allianceInfo.serializeAs_AllianceInformations(param1);
    param1.writeBoolean(this.enabled);
};

AllianceJoinedMessage.prototype.deserializeAs_AllianceJoinedMessage = function(param1) {
    this.allianceInfo = new AllianceInformations();
    this.allianceInfo.deserialize(param1);
    this.enabled = param1.readBoolean();
};

AllianceJoinedMessage.prototype.getMessageId = function() {
    return 6402;
};

AllianceJoinedMessage.prototype.getClassName = function() {
    return 'AllianceJoinedMessage';
};

module.exports.id = 6402;
module.exports.class = AllianceJoinedMessage;
module.exports.getInstance = function() {
    return new AllianceJoinedMessage;
};