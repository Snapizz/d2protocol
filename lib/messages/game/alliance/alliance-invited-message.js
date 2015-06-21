var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicNamedAllianceInformations = require('../../../types/game/context/roleplay/basic-named-alliance-informations.js').class;

var AllianceInvitedMessage = function() {
    this.recruterId = 0;
    this.recruterName = "";
    this.allianceInfo = new BasicNamedAllianceInformations();
};

require('util').inherits(AllianceInvitedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceInvitedMessage();
};

AllianceInvitedMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceInvitedMessage(output);
};

AllianceInvitedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInvitedMessage(input);
};

AllianceInvitedMessage.prototype.serializeAs_AllianceInvitedMessage = function(param1) {
    if (this.recruterId < 0) {
        throw new Error("Forbidden value (" + this.recruterId + ") on element recruterId.");
    } else {
        param1.writeVarInt(this.recruterId);
        param1.writeUTF(this.recruterName);
        this.allianceInfo.serializeAs_BasicNamedAllianceInformations(param1);
        return;
    }
};

AllianceInvitedMessage.prototype.deserializeAs_AllianceInvitedMessage = function(param1) {
    this.recruterId = param1.readVarUhInt();
    if (this.recruterId < 0) {
        throw new Error("Forbidden value (" + this.recruterId + ") on element of AllianceInvitedMessage.recruterId.");
    } else {
        this.recruterName = param1.readUTF();
        this.allianceInfo = new BasicNamedAllianceInformations();
        this.allianceInfo.deserialize(param1);
        return;
    }
};

AllianceInvitedMessage.prototype.getMessageId = function() {
    return 6397;
};

AllianceInvitedMessage.prototype.getClassName = function() {
    return 'AllianceInvitedMessage';
};

module.exports.id = 6397;
module.exports.AllianceInvitedMessage = AllianceInvitedMessage;