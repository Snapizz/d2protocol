var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AuthenticationTicketRefusedMessage = function() {

};

require('util').inherits(AuthenticationTicketRefusedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AuthenticationTicketRefusedMessage();
};

AuthenticationTicketRefusedMessage.prototype.serialize = function(output) {
    this.serializeAs_AuthenticationTicketRefusedMessage(output);
};

AuthenticationTicketRefusedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AuthenticationTicketRefusedMessage(input);
};

AuthenticationTicketRefusedMessage.prototype.serializeAs_AuthenticationTicketRefusedMessage = function(param1) {

};

AuthenticationTicketRefusedMessage.prototype.deserializeAs_AuthenticationTicketRefusedMessage = function(param1) {

};

AuthenticationTicketRefusedMessage.prototype.getMessageId = function() {
    return 112;
};

AuthenticationTicketRefusedMessage.prototype.getClassName = function() {
    return 'AuthenticationTicketRefusedMessage';
};

module.exports.id = 112;
module.exports.AuthenticationTicketRefusedMessage = AuthenticationTicketRefusedMessage;