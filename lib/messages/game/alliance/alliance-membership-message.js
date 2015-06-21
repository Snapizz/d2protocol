var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AllianceInformations = require('../../../types/game/context/roleplay/alliance-informations.js').class;

var AllianceMembershipMessage = function() {

};

require('util').inherits(AllianceMembershipMessage, require('./alliance-joined-message.js').class);

AllianceMembershipMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceMembershipMessage(output);
};

AllianceMembershipMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceMembershipMessage(input);
};

AllianceMembershipMessage.prototype.serializeAs_AllianceMembershipMessage = function(param1) {
    this.serializeAs_AllianceJoinedMessage(param1);
};

AllianceMembershipMessage.prototype.deserializeAs_AllianceMembershipMessage = function(param1) {
    this.deserializeAs_AllianceJoinedMessage(param1);
};

AllianceMembershipMessage.prototype.getMessageId = function() {
    return 6390;
};

AllianceMembershipMessage.prototype.getClassName = function() {
    return 'AllianceMembershipMessage';
};

module.exports.id = 6390;
module.exports.class = AllianceMembershipMessage;
module.exports.getInstance = function() {
    return new AllianceMembershipMessage;
};