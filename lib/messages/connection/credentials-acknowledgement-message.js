var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var CredentialsAcknowledgementMessage = function() {

};

require('util').inherits(CredentialsAcknowledgementMessage, d2com.NetworkMessage.class);

CredentialsAcknowledgementMessage.prototype.serialize = function(output) {
    this.serializeAs_CredentialsAcknowledgementMessage(output);
};

CredentialsAcknowledgementMessage.prototype.deserialize = function(input) {
    this.deserializeAs_CredentialsAcknowledgementMessage(input);
};

CredentialsAcknowledgementMessage.prototype.serializeAs_CredentialsAcknowledgementMessage = function(param1) {

};

CredentialsAcknowledgementMessage.prototype.deserializeAs_CredentialsAcknowledgementMessage = function(param1) {

};

CredentialsAcknowledgementMessage.prototype.getMessageId = function() {
    return 6314;
};

CredentialsAcknowledgementMessage.prototype.getClassName = function() {
    return 'CredentialsAcknowledgementMessage';
};

module.exports.id = 6314;
module.exports.class = CredentialsAcknowledgementMessage;
module.exports.getInstance = function() {
    return new CredentialsAcknowledgementMessage;
};